const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clannameblacklist', {
    clanName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    admin: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'clannameblacklist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clanName" },
        ]
      },
    ]
  });
};
