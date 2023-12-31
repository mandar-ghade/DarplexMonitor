const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanterritory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clanId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chunk: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    safe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clanterritory',
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
        name: "clanId",
        using: "BTREE",
        fields: [
          { name: "clanId" },
        ]
      },
    ]
  });
};
