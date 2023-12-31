const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bonus', {
    accountId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    dailytime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    clansdailytime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ranktime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    votetime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    clansvotetime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dailyStreak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxDailyStreak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voteStreak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxVoteStreak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tickets: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bonus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
    ]
  });
};
