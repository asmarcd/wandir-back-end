module.exports = function (sequelize, DataTypes) {
    var Photo = sequelize.define("Photo", {
      name: {
        type: DataTypes.STRING,
      },
     url: {
        type: DataTypes.STRING,
        allowNull:false
      }
    });
    return Photo;
  };