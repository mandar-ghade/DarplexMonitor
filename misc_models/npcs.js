const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('npcs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    server: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    world: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    x: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    z: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    yaw: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    pitch: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    radius: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    entityType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    entityMeta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    helmet: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    chestplate: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    leggings: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    boots: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    inHand: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    info: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    infoRadius: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    infoDelay: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'npcs',
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
