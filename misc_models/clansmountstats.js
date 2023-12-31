const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clansmountstats', {
    mountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statToken: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clansmountstats',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mountId" },
        ]
      },
    ]
  });
};
