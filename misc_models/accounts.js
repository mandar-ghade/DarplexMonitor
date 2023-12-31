const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "uuidIndex"
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "nameIndex"
    },
    gems: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2500
    },
    coins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2500
    },
    lastLogin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalPlayTime: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accounts',
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
        name: "uuidIndex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uuid" },
        ]
      },
      {
        name: "nameIndex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
