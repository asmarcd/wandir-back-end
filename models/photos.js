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

    Photo.associate = models =>{
      Photo.belongsTo(models.Geo)
      Photo.belongsTo(models.Entry)
    }
    return Photo;
  };