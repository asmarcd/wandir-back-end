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
// Get a geo by id, include the entries and photos
//this will be used when you have a point selected and want to see all associated content
router.get("/:id", (req, res) => {
    db.Geo.findAll({
        where:{
            id:parseInt(req.params.id)
        },
        include: [{
            model: db.Entry,
            model:db.Photo
        }
    ]

    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    });
});
// update a point
// not sure how this place out yet, ideally we can edit point nad move it
router.put("/:id", (req, res)=>{
    db.Geo.update(
        {
        region:req.body.region,
        place:req.body.place,
        lat:req.body.lat,
        lng:req.body.long
        },
        {where:{id: req.params.id}}
    )
})
router.delete("/:id", (req, res)=>{
    db.Geo.destroy(
        {where:{
            id: req.params.id
        }}
    )
})

module.exports = router