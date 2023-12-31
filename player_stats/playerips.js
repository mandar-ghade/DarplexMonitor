const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playerips', {
    playerInfoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ipInfoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'playerips',
    timestamps: false
  });
};
