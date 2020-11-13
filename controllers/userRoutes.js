const express = require("express");
const router = express.Router();
const db = require('../models');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// User authentication goes here

router.get("/", (req,res) => {
    db.User.findAll().then(users => {
        res.json(users)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

router.post("/", (req, res) => {
    db.User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }).then(newUser => {
        res.json(newUser);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router