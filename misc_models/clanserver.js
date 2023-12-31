const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanserver', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      primaryKey: true
    },
    serverName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "serverName"
    }
  }, {
    sequelize,
    tableName: 'clanserver',
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
      {
        name: "serverName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverName" },
        ]
      },
    ]
  });
};
