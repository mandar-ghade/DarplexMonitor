const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('communityinvites', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    communityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'communities',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }, {
    sequelize,
    tableName: 'communityinvites',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "communityinvites_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "communityId" },
        ]
      },
    ]
  });
  model.removeAttribute('id');
  return model;
};
