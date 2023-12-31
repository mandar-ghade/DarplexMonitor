const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportteammemberships', {
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
    teamId: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'reportteams',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }, {
    sequelize,
    tableName: 'reportteammemberships',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountId" },
          { name: "teamId" },
        ]
      },
      {
        name: "reportTeams_accountId_index",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
      {
        name: "reportTeams_reportTeamTypes_id_fk",
        using: "BTREE",
        fields: [
          { name: "teamId" },
        ]
      },
    ]
  });
};
