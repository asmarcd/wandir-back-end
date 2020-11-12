module.exports = function (sequelize, DataTypes) {
  var Geo = sequelize.define("Geo", {
    region: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  
  Geo.assocaite = models =>{
    Geo.belongsToMany(models.Post, {through: 'PostGeo'})
  }

  return Geo;
};
