const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('networkstats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    players: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalNetworkCpuUsage: {
      type: DataTypes.FLOAT(10,0),
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
    tableName: 'networkstats',
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
