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
  return Geo;
};
