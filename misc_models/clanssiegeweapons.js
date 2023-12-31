const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanssiegeweapons', {
    uniqueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ownerClan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weaponType: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yaw: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastFired: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    entities: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clanssiegeweapons',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uniqueId" },
        ]
      },
    ]
  });
};
