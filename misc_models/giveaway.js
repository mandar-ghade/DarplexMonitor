const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('giveaway', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    prettyName: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    header: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notifyNetwork: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notifyCooldown: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    canWinTwice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'giveaway',
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
    ]
  });
};
