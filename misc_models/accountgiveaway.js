const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('accountgiveaway', {
    giveawayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'giveaway',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    cooldownId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serverName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    uuid: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountgiveaway',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "accountgiveaway_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
      {
        name: "giveawayId",
        using: "BTREE",
        fields: [
          { name: "giveawayId" },
        ]
      },
    ]
  });
  model.removeAttribute('id');
  return model;
};
