const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bungeestats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    players: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxPlayers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    US: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'bungeestats',
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
    ]
  });
};
