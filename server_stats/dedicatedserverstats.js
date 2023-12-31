const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dedicatedserverstats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cpu: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ram: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    usedCpuPercent: {
      type: DataTypes.DOUBLE(4,2),
      allowNull: true
    },
    usedRamPercent: {
      type: DataTypes.DOUBLE(4,2),
      allowNull: true
    },
    US: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'dedicatedserverstats',
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
