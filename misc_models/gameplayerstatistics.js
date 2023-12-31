const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gameplayerstatistics', {
    gameIdString: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    playerIdString: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statIdString: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statValueString: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gameplayerstatistics',
    timestamps: false,
    noPrimaryKey: true,
  });
};
