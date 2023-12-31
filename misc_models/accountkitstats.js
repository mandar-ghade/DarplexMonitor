const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('accountkitstats', {
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
    statId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountkitstats',
    timestamps: false,
    noPrimaryKey: true
  });
  model.removeAttribute('id');
  return model
};
