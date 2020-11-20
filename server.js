require('dotenv').config()
const express = require("express");
const db = require("./models")
const app = express();
var path = require('path');
const cors = require('cors')

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PRODUCTION CORS
// app.use(cors({
//   origin:["https://augfishtank.herokuapp.com"]
// }))

//DEV CORS
app.use(cors())


const routes = require("./controllers/");
// Add routes API
app.use(routes);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
      console.log("App now listening on port:", PORT);
  });
});