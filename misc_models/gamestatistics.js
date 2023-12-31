const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gamestatistics', {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    region: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    gameType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    map: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'gamestatistics',
    timestamps: false,
    noPrimaryKey: true,
  });
};
