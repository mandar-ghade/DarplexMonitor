const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountranks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    rankIdentifier: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "PLAYER"
    },
    primaryGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'accountranks',
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
        name: "rankIndex",
        using: "BTREE",
        fields: [
          { name: "rankIdentifier" },
        ]
      },
    ]
  });
};
