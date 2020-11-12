const express = require("express");
const db = require("./models")
const app = express();
var path = require('path');

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const APIroutes = require("./routes/API.js");
// Add routes API
app.use(APIroutes);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
      console.log("App now listening on port:", PORT);
  });
});