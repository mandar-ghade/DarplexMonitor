const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('newnpcsnew', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entity_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    world: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    x: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    y: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    z: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    yaw: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pitch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    in_hand: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    in_hand_data: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    helmet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chestplate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    leggings: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    boots: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    metadata: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    skin_value: {
      type: DataTypes.STRING(700),
      allowNull: true
    },
    skin_signature: {
      type: DataTypes.STRING(700),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'newnpcsnew',
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
