const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountfrienddata', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    favourite: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountfrienddata',
    noPrimaryKey: true,
    timestamps: false
  });
};
