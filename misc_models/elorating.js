const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elorating', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    gameType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    elo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'elorating',
    timestamps: false,
    noPrimaryKey: true,
  });
};
