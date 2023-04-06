const express = require('express');
const router = express.Router();
const db = require("../db/db");
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', (async (req, res, next) => {
  const sql = "SELECT * from Users";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
}));

/* Register Users */
router.post('/register', (async (req, res, next) => {
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        "status": "error",
        "message": err.message
      });
    }

    db.run(`
      INSERT INTO Users (username, password, email) VALUES (?, ?, ?)
    `, [username, hash, email], function (err) {
      if (err) {
        return res.status(500).json({
          "status": "error",
          "message": err.message
        });
      }
      res.json({
        "status": "success",
        "user_id": this.lastID
      });
    })
  })
}))

router.post('/login', (async (req, res, next) => {
  const { username, password } = req.body;
  db.get(`
    SELECT * from Users where username = ?
  `, [username], (err, row) => {
    if (err) {
      return res.status(500).json({
        "status": "error",
        "message": err.message
      });
    }

    if (!row) {
      return res.status(401).json({
        "status": "error",
        "message": 'Invalid username or password'
      });
    }

    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        return res.status(500).json({
          "status": "error",
          "message": err.message
        });
      }

      if (!result) {
        return res.status(401).json({
          "status": "error",
          "message": 'Invalid username or password'
        });
      }

      // res.cookie('user_id', row.id);
      res.json({
        "status": "success",
        "user_id": row.id
      });
    });
  });
}));

// router.post('/logout', (async (req, res, err) => {
//   res.clearCookie
// }))

router.post('/delete', async (req, res, err) => {
  const { user_id } = req.body;

  db.run(`DELETE FROM Users WHERE id = ?`, [user_id], (err) => {
    if (err) {
      return res.status(500).json({
        "status": "error",
        "message": err.message
      });
    }
    res.json({
      "status": "success"
    })
  })
});

router.post('/edit', async (req, res, err) => {
  const { user_id, username, password, email } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        "status": "error",
        "message": err.message
      });
    }

    db.run(`
    UPDATE Users SET username = ?, password = ?, email = ? WHERE id = ? AND EXISTS(SELECT 1 FROM Users WHERE id = ?)
    `, [username, hash, email, user_id, user_id], function (err) {
      if (err) {
        return res.status(500).json({
          "status": "error",
          "message": err.message
        });
      };

      if (this.changes == 0) {
        return res.status(400).json({
          "status": "error",
          "message": "The specified user does not exist"
        })
      }

      res.json({
        "status": "success",
        "user_id": user_id
      })
    })
  })
})

module.exports = router;
