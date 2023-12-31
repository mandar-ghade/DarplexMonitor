const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playermap', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    playerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'playermap',
    timestamps: false,
    noPrimaryKey: true,
  });
};
