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
      type: DataTypes.FLOAT(11,7),
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT(11,7),
      allowNull: false,
    },
  });
  
  Geo.associate = models =>{
    Geo.belongsToMany(models.Entry, {through: 'EntryGeo'})
  }

  return Geo;
};
