const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fieldblock', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    server: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    blockId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blockData: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    emptyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    emptyData: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    stockMax: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stockRegenTime: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    loot: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fieldblock',
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
        name: "serverLocation",
        using: "BTREE",
        fields: [
          { name: "server" },
          { name: "location" },
        ]
      },
    ]
  });
};
