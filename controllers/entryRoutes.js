const express = require("express");
const router = express.Router();
const db = require('../models');

// User Authentication goes here

// Create new Entry
router.post("/", (req, res) => {
    db.Entry.create({
        title: req.body.title,
        date: req.body.date,
        body: req.body.body
    }).then(newEntry => {
        res.json(newEntry);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router