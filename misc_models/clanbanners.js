const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanbanners', {
    clanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    baseColor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    patterns: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clanbanners',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clanId" },
        ]
      },
    ]
  });
};
