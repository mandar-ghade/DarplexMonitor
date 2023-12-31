const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clans', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    home: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastOnline: {
      type: DataTypes.DATE,
      allowNull: true
    },
    energy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kills: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    murder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    warWins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    warLosses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    generator: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    generatorStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eloRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'clans',
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
        name: "clanName",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
