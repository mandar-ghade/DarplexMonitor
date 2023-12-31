const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('accountlevelreward', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'accounts',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountlevelreward',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "accountLevelRewardId",
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
