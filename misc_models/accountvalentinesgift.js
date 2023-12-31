const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountvalentinesgift', {
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    targetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    }
  }, {
    sequelize,
    tableName: 'accountvalentinesgift',
    timestamps: false,
    noPrimaryKey: true,
  });
};
