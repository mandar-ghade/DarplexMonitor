const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('preferences', {
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
    preference: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'preferences',
    timestamps: false,
    noPrimaryKey: true,
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
