const express = require("express");
const router = express.Router();
const db = require('../models');

// User Authentication goes here

// Find all Entries
router.get("/", (req, res) => {
    db.Entry.findAll({
        include: [
            { model: db.Geo },
            { model: db.Photo }
        ]
    }).then(entries => {
        res.json(entries)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});

// Create new Entry
router.post("/", (req, res) => {
    db.Entry.create({
        title: req.body.title,
        date: req.body.date,
        body: req.body.body,
        UserId:req.body.UserId
    }).then(newEntry => {
        res.json(newEntry);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// Get entry by entry ID
router.get("/:id", (req, res) => {
    db.Entry.findAll({
        where: {
            id: req.params.id
        },
        include: [
            { model: db.Geo },
            { model: db.Photo }
        ]
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// Update an entry
router.put("/:id", (req, res) => {
    db.Entry.update(
        {
            title: req.body.title,
            date: req.body.date,
            body: req.body.body
        },
        { where: { id: req.params.id } }
    ).then(result => res.json(result));
});

// Route for search - title of entry contains user input for search
router.get("/entrysearch", (req, res) => {
    db.Entry.findAll({
        where: {
            title: {
                [Op.like]: `%${req.body.title}%`
            }
        }
    }).then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});

// Delete an entry
router.delete("/:id", (req, res) => {
    db.Entry.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.status(200).send("delete successful"))
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});
// route for adding a relation between entry and geos
// geos come in the body as an array of ids, figure we'll mostly be doing several at a time most times
router.put("/addpoint/:id", (req, res) => {
    db.Entry.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((entry) => {
        req.body.forEach(e => {
            entry.addGeo(e);
        });
        res.send("Association Added");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

module.exports = router