var express = require("express");
var router = express.Router();

const userRoutes = require("./userRoutes.js");
const entryRoutes = require("./entryRoutes.js");
const geoRoutes = require("./geoRoutes.js");
// const photoRoutes = require("./photoRoutes.js");

router.get("/",(req,res)=>{
    res.send("Time for a Journ-ey")
});

router.use("/api/users",userRoutes);
router.use("/api/entries",entryRoutes);
router.use("/api/geos",geoRoutes);
// router.use("/api/photos",photoRoutes);

module.exports = router