const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('accountmissions', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    missionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    complete: {
      type: "BIT(64)",
      allowNull: false,
      defaultValue: "b'0'"
    }
  }, {
    sequelize,
    tableName: 'accountmissions',
    noPrimaryKey: true,
    timestamps: false,
    indexes: [
      {
        name: "accountId",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
    ]
  });
  model.removeAttribute('id');
  return model;
};
