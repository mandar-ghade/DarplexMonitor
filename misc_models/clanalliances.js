const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanalliances', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clanId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clans',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    otherClanId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clans',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    trusted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clanalliances',
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
        name: "otherClanId",
        using: "BTREE",
        fields: [
          { name: "otherClanId" },
        ]
      },
      {
        name: "clanIdIndex",
        using: "BTREE",
        fields: [
          { name: "clanId" },
        ]
      },
    ]
  });
};
