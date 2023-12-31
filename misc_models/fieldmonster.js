const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fieldmonster', {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mobMax: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mobRate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    center: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fieldmonster',
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
        name: "serverName",
        using: "BTREE",
        fields: [
          { name: "server" },
          { name: "name" },
        ]
      },
    ]
  });
};
