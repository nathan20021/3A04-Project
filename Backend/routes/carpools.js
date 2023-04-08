const express = require('express');
const router = express.Router();
const db = require("../db/db");
const { calculateDistance } = require('../operations/carpools')

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
    const { userID, taxiID, destinationLatitude, destinationLongitude, currRiders, maxRiders } = req.body;
    /*
    Add a new entry to the Carpools table. Represents a carpool 
    Request body will contain taxiID, destination, number of riders = 1, max number of riders, status = available,
    rating = blank
    Response is success and carpool ID
    */
    db.run(`
    INSERT INTO Carpools (user_id, taxi_id, destinationLatitude, destinationLongitude, currRiders, maxRiders, status) VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [userID, taxiID, destinationLatitude, destinationLongitude, currRiders, maxRiders, 'open'], function (err) {
        if (err) {
            return res.status(500).json({
                "status": "error",
                "message": err.message
            });
        }
        res.json({
            "status": "success",
            "carpool_id": this.lastID
        });
    });
})

router.get('/getCarpools', async (req, res, next) => {
    const { destinationLatitude, destinationLongitude, locationLatitude, locationLongitude } = req.body;
    db.all('SELECT * from Carpools WHERE status = ?', ['open'], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return
        }

        rows.forEach((carpool) => {
            const currentDistance = calculateDistance(locationLatitude, locationLongitude, carpool.destinationLatitude, carpool.destinationLongitude);
            carpool.currentDistance = currentDistance;
        });

        rows.forEach((carpool) => {
            const destinationDistance = calculateDistance(destinationLatitude, destinationLongitude, carpool.destinationLatitude, carpool.destinationLongitude);
            carpool.destinationDistance = destinationDistance;
        });

        rows.sort((a, b) => (a.currentDistance + a.destinationDistance) - (b.currentDistance + b.destinationDistance));

        res.json({
            "message": "success",
            "carpools": rows
        });
    });
    /*
    Request body will contain criteria
    Query database for offers matching criteria. Only return carpools that 
    have a status of available
        Need some algorithm to compute destinations?
    Return all matching offers
    */
})

router.post('/requestCarpool', async (req, res, next) => {
    const { user_id, carpool_id, status } = req.body;
    db.run(`INSERT INTO Offers (user_id, carpool_id, status) VALUES (?, ?, ?)`,
        [user_id, carpool_id, status], function (err) {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            }
            res.json({
                "status": "success",
                "offer_id": this.lastID,
                "carpool_id": carpoolID
            });
        });
    /*
    Entry into Offers table
    Request body will contain carpoolID (FK to Carpools), status = requested
    */
})

router.post('/respondToOffer', async (req, res, next) => {
    const { user_id, carpool_id, offer_id, decision } = req.body;
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
        });
        db.run(`INSERT INTO CarpoolRiders (carpool_id, user_id, rating) VALUES (?, ?, ?)`, [carpool_id, user_id, 0], (err) => {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                })
            }
        });
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
    /*
    Mark ride as completed. Set status to completed. Set rating. Compute fare and return
    */
});

router.post('/rateUser', async (req, res, next) => {
    const { user_id, rater_user_id, rating } = req.body;
    db.run(`INSERT INTO Ratings (user_id, rater_user_id, rating) VALUES (?, ?, ?)`,
        [user_id, rater_user_id, rating], function (err) {
            if (err) {
                return res.status(500).json({
                    "status": "error",
                    "message": err.message
                });
            }
            res.json({
                "status": "success"
            });
        });
});

module.exports = router;