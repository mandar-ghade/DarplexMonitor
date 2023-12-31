const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servergroupstats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverGroup: {
      type: DataTypes.STRING(100),
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
    totalNetworkCpuUsage: {
      type: DataTypes.DOUBLE(4,2),
      allowNull: true
    },
    totalNetworkRamUsage: {
      type: DataTypes.DOUBLE(4,2),
      allowNull: true
    },
    totalCpu: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    totalRam: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    US: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'servergroupstats',
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
