const sequelize_fixtures = require('sequelize-fixtures');
const models = require('./models');
console.log("Seeding data---------------------------------------------")
const seed = sequelize_fixtures.loadFile("./seeds.json", models).then(function(){
    console.log("Seeding successful")
});

seed();