const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gamemaps', {
    gameType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mapName: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gamemaps',
    timestamps: false,
    noPrimaryKey: true,
  });
};
