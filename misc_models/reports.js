const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    suspectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    categoryId: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'reportcategorytypes',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    region: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    snapshotId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'snapshots',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    assignedTeam: {
      type: DataTypes.TINYINT,
      allowNull: true,
      references: {
        model: 'reportteams',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }, {
    sequelize,
    tableName: 'reports',
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
        name: "reportCategoryTypes_categoryId_id_fk",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "reports_reportTeams_teamId_fk",
        using: "BTREE",
        fields: [
          { name: "assignedTeam" },
        ]
      },
      {
        name: "reports_snapshots_id_fk",
        using: "BTREE",
        fields: [
          { name: "snapshotId" },
        ]
      },
      {
        name: "reports_suspect_id_index",
        using: "BTREE",
        fields: [
          { name: "suspectId" },
        ]
      },
    ]
  });
};
