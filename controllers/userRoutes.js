const express = require("express");
const router = express.Router();
const db = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User authentication goes here

router.get("/", (req,res) => {
    db.User.findAll().then(users => {
        res.json(users)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

router.get("/:id", (req,res) => {
    db.User.findAll({
        where:{
            id:req.params.id
        },
        include: [
            {
              model: db.Entry,
              include:[{model:db.Photo}]
            },
            {
              model: db.Geo,
              include:[{model:db.Photo}]
            },
          ],
    }
    ).then(users => {
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

router.post("/login", (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email,
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(403).send("username or password incorrect")
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            const userTokenInfo = {
                email: foundUser.email,
                id: foundUser.id,
                username: foundUser.username
            }
            const token = jwt.sign(userTokenInfo, process.env.JWT_SECRET, { expiresIn: "2h" });
            return res.status(200).json({ token: token })
        } else {
            return res.status(403).send("username or password incorrect")
        }
    })
})

// router.get("/checkauth", (req, res) => {
//     const loggedInUser = checkAuthStatus(req);
//     console.log(loggedInUser);
//     if (!loggedInUser) {
//         return res.status(401).send("invalid token")
//     }
//     db.User.findOne({
//         where:{
//             id:loggedInUser.id
//         },
//         include :[{
//             model:db.Tank,
//             include:[db.Fish]
//         }]
//     }).then(dbUser=>{
//         res.json(dbUser)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).send("an error occured please try again later");
//     })

// })

module.exports = router