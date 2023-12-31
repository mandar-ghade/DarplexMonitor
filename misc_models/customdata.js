const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customdata', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customdata',
    timestamps: false,
    indexes: [
      {
        name: "customdata_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
