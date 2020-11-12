module.exports = function (sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
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
    

    Entry.associate = models =>{
      Entry.belongsToMany(models.Geo, {through: 'EntryGeo'})
    }
    
    return Entry;
  };