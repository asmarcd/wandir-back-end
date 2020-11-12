module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull:false
      },
     date: {
        type: DataTypes.DATE,
        allowNull:false
      },
      body:{
        type:DataTypes.TEXT
      }

    });
    return Post;
  };