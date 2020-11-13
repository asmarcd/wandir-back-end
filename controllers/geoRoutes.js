const express = require("express");
const router = express.Router();
const db = require('../models');

// User Authentication goes here

// Create new Entry
router.post("/", (req, res) => {
    db.Geo.create({
        region: req.body.region,
        place: req.body.place,
        lat: req.body.lat,
        lng: req.body.lng,

    }).then(newEntry => {
        res.json(newEntry);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router