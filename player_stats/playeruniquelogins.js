const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playeruniquelogins', {
    playerInfoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'playeruniquelogins',
    timestamps: false
  });
};
