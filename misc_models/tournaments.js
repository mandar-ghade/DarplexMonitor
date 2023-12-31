const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tournaments', {
    TournamentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    GameType: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tournaments',
    noPrimaryKey: true,
    timestamps: false
  });
};
