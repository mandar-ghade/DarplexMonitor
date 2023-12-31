const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clansiphistory', {
    ipAddress: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clanserver',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }, {
    sequelize,
    tableName: 'clansiphistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ipAddress" },
          { name: "accountId" },
          { name: "serverId" },
        ]
      },
      {
        name: "ipIndex",
        using: "BTREE",
        fields: [
          { name: "ipAddress" },
        ]
      },
      {
        name: "accountIndex",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
      {
        name: "accountServerIndex",
        using: "BTREE",
        fields: [
          { name: "accountId" },
          { name: "serverId" },
        ]
      },
      {
        name: "ipServerIndex",
        using: "BTREE",
        fields: [
          { name: "ipAddress" },
          { name: "serverId" },
        ]
      },
      {
        name: "serverId",
        using: "BTREE",
        fields: [
          { name: "serverId" },
        ]
      },
    ]
  });
};
