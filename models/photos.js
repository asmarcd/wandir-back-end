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

    Photo.assocaite = models =>{
      Photo.belongsTo(models.Post)
    }
    Photo.assocaite = models =>{
      Photo.belongsTo(models.Geo)
    }
    return Photo;
  };