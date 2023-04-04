const express = require('express');
const router = express.Router();
const { getPrompt } = require('../operations/prompts');

/* GET random prompt. */
router.get('/', async (req, res, next) => {
  res.json({
    "status": "success",
    "prompt": getPrompt()
  });
});

module.exports = router;