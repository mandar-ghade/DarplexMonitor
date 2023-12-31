const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clansipbans', {
    ipAddress: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    admin: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clansipbans',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ipAddress" },
        ]
      },
      {
        name: "adminIndex",
        using: "BTREE",
        fields: [
          { name: "admin" },
        ]
      },
    ]
  });
};
