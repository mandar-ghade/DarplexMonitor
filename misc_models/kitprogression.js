const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kitprogression', {
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    kitId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upgrade_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kitprogression',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uuid" },
          { name: "kitId" },
        ]
      },
    ]
  });
};
