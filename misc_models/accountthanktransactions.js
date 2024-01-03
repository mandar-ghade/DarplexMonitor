const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountthanktransactions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thankAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    ignoreCooldown: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    claimed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    sentTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    claimTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accountthanktransactions',
    timestamps: false
  });
};
