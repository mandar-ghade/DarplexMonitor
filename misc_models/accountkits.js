const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('accountkits', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
    },
    kitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountkits',
    timestamps: false,
    noPrimaryKey: true,
  });
  model.removeAttribute('id');
  return model
};
