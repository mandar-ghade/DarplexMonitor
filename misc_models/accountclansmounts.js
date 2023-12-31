const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountclansmounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mountSkinId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountclansmounts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
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
        name: "serverIndex",
        using: "BTREE",
        fields: [
          { name: "serverId" },
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
        name: "typeIndex",
        using: "BTREE",
        fields: [
          { name: "mountTypeId" },
        ]
      },
      {
        name: "skinIndex",
        using: "BTREE",
        fields: [
          { name: "mountSkinId" },
        ]
      },
    ]
  });
};
