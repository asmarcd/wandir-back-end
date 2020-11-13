const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = router;

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

router.post("/", (req, res) =>{
    db.Photo.create({
        name: req.body.name,
        url:req.body.url
    }).then(newPhoto =>{
        res.json(newPhoto)
    }).catch(err =>{
        console.log(err);
        res.status(500).end()
    })
})

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