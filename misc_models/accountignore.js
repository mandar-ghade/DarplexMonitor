const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountignore', {
    uuidIgnorer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false
    },
    uuidIgnored: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false
    }
  }, {
    sequelize,
    tableName: 'accountignore',
    timestamps: false,
    noPrimaryKey: true,
  });
};
