const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('communitysettings', {
    settingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    communityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    settingValue: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'communitysettings',
    timestamps: false,
    noPrimaryKey: true,
  });
};
