const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountstatsseasonal', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seasonId: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountstatsseasonal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountId" },
          { name: "statId" },
        ]
      },
      {
        name: "valueIndex",
        using: "BTREE",
        fields: [
          { name: "value" },
        ]
      },
      {
        name: "seasonIndex",
        using: "BTREE",
        fields: [
          { name: "seasonId" },
        ]
      },
      {
        name: "statId",
        using: "BTREE",
        fields: [
          { name: "statId" },
        ]
      },
    ]
  });
};
