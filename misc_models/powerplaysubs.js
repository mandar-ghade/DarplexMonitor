const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('powerplaysubs', {
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
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'powerplaysubs',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "powerplaysubs_ibfk_1",
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
