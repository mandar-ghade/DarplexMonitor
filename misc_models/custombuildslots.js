const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custombuildslots', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BuildName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PvpClass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SlotId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "''"
    },
    Material: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "''"
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'custombuildslots',
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
