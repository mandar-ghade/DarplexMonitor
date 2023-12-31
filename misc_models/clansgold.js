const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clansgold', {
    serverId: {
      type: DataTypes.INTEGER,
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
    gold: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clansgold',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverId" },
          { name: "accountId" },
        ]
      },
      {
        name: "valueIndex",
        using: "BTREE",
        fields: [
          { name: "serverId" },
          { name: "accountId" },
          { name: "gold" },
        ]
      },
      {
        name: "goldIndex",
        using: "BTREE",
        fields: [
          { name: "serverId" },
          { name: "gold" },
        ]
      },
      {
        name: "accountId",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
    ]
  });
};
