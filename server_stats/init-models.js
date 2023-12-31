var DataTypes = require("sequelize").DataTypes;
var _bungeestats = require("./bungeestats");
var _dedicatedserverstats = require("./dedicatedserverstats");
var _networkstats = require("./networkstats");
var _servergroupstats = require("./servergroupstats");

function initModels(sequelize) {
  var bungeestats = _bungeestats(sequelize, DataTypes);
  var dedicatedserverstats = _dedicatedserverstats(sequelize, DataTypes);
  var networkstats = _networkstats(sequelize, DataTypes);
  var servergroupstats = _servergroupstats(sequelize, DataTypes);


  return {
    bungeestats,
    dedicatedserverstats,
    networkstats,
    servergroupstats,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
