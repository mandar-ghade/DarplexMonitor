const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountcustomdata', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    customDataId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountcustomdata',
    timestamps: false,
    noPrimaryKey: true,
  });
};
