const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reporthandlers', {
    reportId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'reports',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    handlerId: {
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
    aborted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'reporthandlers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reportId" },
          { name: "handlerId" },
        ]
      },
      {
        name: "reportHandlers_accountStat_accountId_fk",
        using: "BTREE",
        fields: [
          { name: "handlerId" },
        ]
      },
      {
        name: "reportHandlers_reportId_index",
        using: "BTREE",
        fields: [
          { name: "reportId" },
        ]
      },
    ]
  });
};
