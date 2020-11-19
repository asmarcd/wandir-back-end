const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = router;

// Get all photos
router.get("/", (req, res) => {
    db.Photo.findAll()
      .then((photos) => {
        res.json(photos);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

// Add a photo
router.post("/", (req, res) =>{
    db.Photo.create({
        name: req.body.name,
        url:req.body.url,
        UserId:req.body.userid
    }).then(newPhoto =>{
        res.json(newPhoto)
    }).catch(err =>{
        console.log(err);
        res.status(500).end()
    })
})

// delete a photo
router.delete("/:id", (req, res) =>{
    db.Photo.destroy({
        where:{
            id:req.params.id
        }
    }).then(res.status(200).send("delete successful"))
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    })
})
//add associations between a photo and either geo or entry
// this method is not destructive so it only updates what you pass it, allowing to update geo or entry individually
router.put("/:id" , (req, res) =>{
    console.log("==========================================================")
    console.log(req.body)
    db.Photo.update({
        GeoId: req.body.geoid,
        EntryId: req.body.entryid
    },
    {
        where:{id:req.params.id}
    }).then(res.status(200).send("association created successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
})