const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('polls', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    answerA: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    answerB: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    answerC: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    answerD: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    coinReward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    displayType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'polls',
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
