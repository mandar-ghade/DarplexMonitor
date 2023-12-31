const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountstatsweekly', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    statId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stats',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountstatsweekly',
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
        name: "dateIndex",
        using: "BTREE",
        fields: [
          { name: "date" },
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
