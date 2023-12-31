const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('aprilfoolstreasure', {
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
    treasureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    }
  }, {
    sequelize,
    tableName: 'aprilfoolstreasure',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "aprilfoolsid",
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
