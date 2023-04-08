const express = require('express');
const router = express.Router();
const db = require("../db/db");
const { calculateDistance } = require('../operations/carpools')
const rate = require('../constants/ratePerKm');

// Get offers
router.get('/', async (req, res, next) => {
    db.all('SELECT * from Carpools', (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
})



router.post('/offerCarpool', async (req, res, next) => {
    const { taxiID, destination, currRiders, maxRiders } = req.body;
    //res.send('this endpoint will allow people in taxi to offer a ride');
    /*
    Add a new entry to the Carpools table. Represents a carpool 
    Request body will contain taxiID, destination, number of riders = 1, max number of riders, status = available,
    rating = blank
    Response is success and carpool ID
    */
    db.run(`
    INSERT INTO Carpools (taxiID, destination, currRiders, maxRiders, status) VALUES (?, ?, ?, ?, ?)
  `, [taxiID, destination, currRiders, maxRiders, 'open'], function (err) {
    if (err) {
      return res.status(500).json({
        "status": "error",
        "message": err.message
      });
    }
    console.log(this.lastID);
    res.json({
      "status": "success",
      "carpool_id": this.lastID
    });
  })
})

router.get('/getCarpools', async (req, res, next) => {
    res.send('this endpoint will return matching offers')
    /*
    Request body will contain criteria
    Query database for offers matching criteria. Only return carpools that 
    have a status of available
        Need some algorithm to compute destinations?
    Return all matching offers
    */
})

router.post('/requestCarpool', async (req, res, next) => {
    const { carpool_id, status } = req.body;
    db.run(`INSERT INTO Offers (carpoolID, status) VALUES (?, ?)`,
        [carpool_id, status], function (err) {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            }
            res.json({
                "status": "success",
                "offer_id": this.lastID,
                "carpool_id": carpool_id
            });
        })
    /*
    Entry into Offers table
    Request body will contain carpoolID (FK to Carpools), status = requested
    */
})

router.post('/respondToOffer', async (req, res, next) => {
    const { carpool_id, offer_id, decision } = req.body;
    if (decision == "accept") {
        db.run(`UPDATE Offers SET status = ? WHERE id = ?`, ["accepted", offer_id], (err) => {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            };
        });
        db.run(`UPDATE Carpools SET currRiders = currRiders + 1, status = CASE WHEN currRiders + 1 = maxRiders THEN 'full' ELSE status END WHERE id = ?`, [carpool_id], (err) => {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            };
        })
    };
    if (decision == "reject") {
        db.run(`UPDATE Offers SET status = ? WHERE id = ?`, ["rejected", offer_id], (err) => {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            };
        });
    };
    res.json({
        "status": "success",
        carpool_id,
        offer_id
    })
    /*
    For user in taxi to accept or reject offer
    Request body will contain OfferID and decision 
    If accept: set offer status to accepted, increment number of riders in carpool. if numRiders == maxRiders, set status to fill
    If reject: set offer status to rejected, no changes to number of riders in carpool
    */
})

router.post('/completeRide', async (req, res, next) => {
    const { carpool_id, user1_id, user1_lat, user1_long, rating2, user2_id, user2_lat, user2_long, rating1, dest_lat, dest_long } = req.body;
    /*
    Mark ride as completed. Set status to completed. Set rating. Compute fare and return
    */
    db.run(`UPDATE Carpools SET status = ? WHERE id = ?`, ['completed', carpool_id ], (err) => {
        if (err) {
            return res.status(500).json({
                "status": "error",
                "message": err.message
            });
        };
    });
    
    /*
    Insert rating for user 1
    */
    db.run(`INSERT INTO Ratings (user_id, rater_user_id, rating) VALUES (?, ?, ?)`, [user1_id, user2_id, rating1], (err) => {
        if (err) {
            return res.status(500).json({
                "status": "error",
                "message": err.message
            })
        }
    });

    /*
    Insert rating for user 2
    */
    db.run(`INSERT INTO Ratings (user_id, rater_user_id, rating) VALUES (?, ?, ?)`, [user2_id, user1_id, rating2], (err) => {
        if (err) {
            return res.status(500).json({
                "status": "error",
                "message": err.message
            })
        }
    });

    /*
    Compute fares
    */
    const dist1 = calculateDistance(user1_lat, user1_long, user2_lat, user2_long);
    const dist2 = calculateDistance(user2_lat, user2_long, dest_lat, dest_long);
    const fare1 = rate * dist1 + (rate * dist2) / 2;
    fare1 = fare1.toFixed(2);
    const fare2 = (rate * dist2) / 2;
    fare2 = fare2.toFixed(2);

    res.json({
        "status": "success",
        //"carpool id": carpool_id,
        "user 1 fare": fare1,
        "user 2 fare": fare2
    })
})

module.exports = router;