const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountclan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    clanId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clanRole: {
      type: DataTypes.STRING(140),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accountclan',
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
        name: "clanIdIndex",
        using: "BTREE",
        fields: [
          { name: "clanId" },
        ]
      },
      {
        name: "accountclan_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
    ]
  });
};
