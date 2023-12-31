const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountpreferences', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    filterChat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    invisibility: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    games: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    visibility: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendChat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    privateMessaging: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showChat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    partyRequests: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    forcefield: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    showMacReports: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ignoreVelocity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pendingFriendRequests: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendDisplayInventoryUI: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendDisplayOnlineStatus: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendDisplayServerName: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendAllowRequests: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    friendAllowMessaging: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accountpreferences',
    timestamps: false
  });
};
