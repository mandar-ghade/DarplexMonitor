const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mavericksmasterbuildersbuilds', {
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
    BuildTheme: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Points: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Place: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Schematic: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Reviewed: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mavericksmasterbuildersbuilds',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountId" },
          { name: "Date" },
        ]
      },
    ]
  });
};
