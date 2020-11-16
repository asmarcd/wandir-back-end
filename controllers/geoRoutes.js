const express = require("express");
const router = express.Router();
const db = require("../models");

// User Authentication goes here

// Get all geos
router.get("/", (req, res) => {
  db.Geo.findAll({
    // include: [
    //   {
    //     model: db.Entry,
    //   },
    //   {
    //     model: db.Photo,
    //   },
    // ],
  })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// Create new Geo
router.post("/", (req, res) => {
  db.Geo.create({
    region: req.body.region,
    place: req.body.place,
    lat: req.body.lat,
    lng: req.body.lng,
    UserId:req.body.UserId
  })
    .then((newGeo) => {
      res.json(newGeo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// Get a geo by id, include the entries and photos
//this will be used when you have a point selected and want to see all associated content
router.get("/:id", (req, res) => {
  db.Geo.findAll({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: db.Entry,
      },
      {
        model: db.Photo,
      },
    ],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// update a point
// not sure how this place out yet, ideally we can edit point nad move it
router.put("/:id", (req, res) => {
  db.Geo.update(
    {
      region: req.body.region,
      place: req.body.place,
      lat: req.body.lat,
      lng: req.body.long,
    },
    { where: { id: req.params.id } }
  );
});

router.delete("/:id", (req, res) => {
  db.Geo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(res.status(200).send("delete successful"))
  .catch((err) => {
    console.log(err);
    res.status(500).end();
  });
});

// adding an entry to a geo point
// not sure if we will use this one, since we are going to be adding the geotags inside the post...
router.get("/addentry/:geoid/:entryid", (req, res) => {
  db.Geo.findOne({
    where: {
      id: req.params.geoid,
    },
  })
    .then((geoPoint) => {
      geoPoint.addEntry(req.params.entryid);
      res.send("Association Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
