const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportresults', {
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
    resultId: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    closedTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reportresults',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reportId" },
        ]
      },
      {
        name: "reportResults_reportResultTypes_id_fk",
        using: "BTREE",
        fields: [
          { name: "resultId" },
        ]
      },
    ]
  });
};
