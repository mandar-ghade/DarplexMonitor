const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanbans', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(250),
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'uuid',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    admin: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    banTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    unbanTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    permanent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    removeAdmin: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    removeReason: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clanbans',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "clanbans_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
};
