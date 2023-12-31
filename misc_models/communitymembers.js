const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  model = sequelize.define('communitymembers', {
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
    },
    communityRole: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    readingChat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'communitymembers',
    timestamps: false,
    noPrimaryKey: true,
    indexes: [
      {
        name: "communitymembers_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
      {
        name: "communitymembers_ibfk_2",
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
