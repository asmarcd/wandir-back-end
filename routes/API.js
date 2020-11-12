const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api", function (req, res) {
   res.send("Hello there")
});

module.exports = router;