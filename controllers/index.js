var express = require("express");
var router = express.Router();

const userRoutes = require("./userController");
const postRoutes = requires("./postController");
const geoRoutes = requires("./geoController");
const photoRoutes = requires("./photoController");

router.get("/",(req,res)=>{
    res.send("Time for a Journ-ey")
});

router.use("/api/users",userRoutes);
router.use("/api/posts",postRoutes);
router.use("/api/geos",geoRoutes);
router.use("/api/photos",photoRoutes);

module.exports = router