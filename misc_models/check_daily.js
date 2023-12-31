const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('check_daily', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coinsChange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gemsChange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pass: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    outTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'check_daily',
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
