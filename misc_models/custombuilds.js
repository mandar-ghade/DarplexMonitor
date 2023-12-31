const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custombuilds', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomBuildNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PvpClass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SwordSkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SwordSkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AxeSkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AxeSkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BowSkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BowSkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClassPassiveASkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ClassPassiveASkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClassPassiveBSkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ClassPassiveBSkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GlobalPassiveSkill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GlobalPassiveSkillLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SkillTokens: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemTokens: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'custombuilds',
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
