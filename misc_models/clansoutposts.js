const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clansoutposts', {
    uniqueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    outpostType: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ownerClan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timeSpawned: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    outpostState: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clansoutposts',
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
