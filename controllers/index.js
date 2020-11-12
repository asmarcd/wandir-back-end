var express = require("express");
var router = express.Router();

const userRoutes = require("./userRoutes.js");
// const postRoutes = require("./postRoutes.js");
// const geoRoutes = require("./geoRoutes.js");
// const photoRoutes = require("./photoRoutes.js");

router.get("/",(req,res)=>{
    res.send("Time for a Journ-ey")
});

router.use("/api/users",userRoutes);
// router.use("/api/posts",postRoutes);
// router.use("/api/geos",geoRoutes);
// router.use("/api/photos",photoRoutes);

module.exports = router