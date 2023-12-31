var DataTypes = require("sequelize").DataTypes;
var _ipinfo = require("./ipinfo");
var _playerinfo = require("./playerinfo");
var _playerips = require("./playerips");
var _playerloginsessions = require("./playerloginsessions");
var _playeruniquelogins = require("./playeruniquelogins");

function initModels(sequelize) {
  var ipinfo = _ipinfo(sequelize, DataTypes);
  var playerinfo = _playerinfo(sequelize, DataTypes);
  var playerips = _playerips(sequelize, DataTypes);
  var playerloginsessions = _playerloginsessions(sequelize, DataTypes);
  var playeruniquelogins = _playeruniquelogins(sequelize, DataTypes);


  return {
    ipinfo,
    playerinfo,
    playerips,
    playerloginsessions,
    playeruniquelogins,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
