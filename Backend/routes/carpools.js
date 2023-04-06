const express = require('express');
const router = express.Router();
const db = require("../db/db");

// Get offers
router.get('/', async (req, res, next) => {
    db.all('SELECT * from Offers', (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return
        }
        res.json({
            "message": "success",
            "data": rows
        });
    })
})

router.post('/offerCarpool', async (req, res, next) => {
    res.send('this endpoint will allow people in taxi to offer a ride');
    /*
    Add a new entry to the Carpools table. Represents a carpool 
    Request body will contain taxiID, destination, number of riders = 1, max number of riders, status = available,
    rating = blank
    Response is success and carpool ID
    */
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
    /*
    Entry into Offers table
    Request body will contain carpoolID (FK to Carpools), status = requested
    */
})

router.post('/respondToOffer', async (req, res, next) => {
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
})

module.exports = router;