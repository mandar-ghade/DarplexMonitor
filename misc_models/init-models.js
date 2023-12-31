var DataTypes = require("sequelize").DataTypes;
var _accountamplifierthank = require("./accountamplifierthank");
var _accountclan = require("./accountclan");
var _accountclansmounts = require("./accountclansmounts");
var _accountcrowns = require("./accountcrowns");
var _accountcustomdata = require("./accountcustomdata");
var _accountfavouritenano = require("./accountfavouritenano");
var _accountfriend = require("./accountfriend");
var _accountfrienddata = require("./accountfrienddata");
var _accountgiveaway = require("./accountgiveaway");
var _accountignore = require("./accountignore");
var _accountinventory = require("./accountinventory");
var _accountkits = require("./accountkits");
var _accountkitstats = require("./accountkitstats");
var _accountlevelreward = require("./accountlevelreward");
var _accountmissions = require("./accountmissions");
var _accountpets = require("./accountpets");
var _accountpolls = require("./accountpolls");
var _accountpreferences = require("./accountpreferences");
var _accountpunishments = require("./accountpunishments");
var _accountranks = require("./accountranks");
var _accounts = require("./accounts");
var _accountstatsalltime = require("./accountstatsalltime");
var _accountstatsdaily = require("./accountstatsdaily");
var _accountstatsmonthly = require("./accountstatsmonthly");
var _accountstatsseasonal = require("./accountstatsseasonal");
var _accountstatsweekly = require("./accountstatsweekly");
var _accountstatsyearly = require("./accountstatsyearly");
var _accounttasks = require("./accounttasks");
var _accountteamspeak = require("./accountteamspeak");
var _accountthanktransactions = require("./accountthanktransactions");
var _accounttitle = require("./accounttitle");
var _accounttreasurehunt = require("./accounttreasurehunt");
var _accountvalentinesgift = require("./accountvalentinesgift");
var _accountwinstreak = require("./accountwinstreak");
var _aprilfoolstreasure = require("./aprilfoolstreasure");
var _banwavepending = require("./banwavepending");
var _banwaveprocessed = require("./banwaveprocessed");
var _bonus = require("./bonus");
var _bonuslog = require("./bonuslog");
var _boosters = require("./boosters");
var _botspam = require("./botspam");
var _check_daily = require("./check_daily");
var _clanalliances = require("./clanalliances");
var _clanbanners = require("./clanbanners");
var _clanbans = require("./clanbans");
var _clannameblacklist = require("./clannameblacklist");
var _clans = require("./clans");
var _clanserver = require("./clanserver");
var _clansgold = require("./clansgold");
var _clansipbans = require("./clansipbans");
var _clansiphistory = require("./clansiphistory");
var _clansipwhitelists = require("./clansipwhitelists");
var _clansmountstats = require("./clansmountstats");
var _clansnetherportals = require("./clansnetherportals");
var _clansoutposts = require("./clansoutposts");
var _clanssiegeweapons = require("./clanssiegeweapons");
var _clanssupplypack = require("./clanssupplypack");
var _clanstutorial = require("./clanstutorial");
var _clanterritory = require("./clanterritory");
var _clanwar = require("./clanwar");
var _communities = require("./communities");
var _communityinvites = require("./communityinvites");
var _communityjoinrequests = require("./communityjoinrequests");
var _communitymembers = require("./communitymembers");
var _communitysettings = require("./communitysettings");
var _custombuilds = require("./custombuilds");
var _custombuildslots = require("./custombuildslots");
var _customdata = require("./customdata");
var _elorating = require("./elorating");
var _eternalgiveaway = require("./eternalgiveaway");
var _fieldblock = require("./fieldblock");
var _fieldmonster = require("./fieldmonster");
var _fieldore = require("./fieldore");
var _forumlink = require("./forumlink");
var _gamemaps = require("./gamemaps");
var _gameplayerstatistics = require("./gameplayerstatistics");
var _gamestatistics = require("./gamestatistics");
var _gepaddresses = require("./gepaddresses");
var _giveaway = require("./giveaway");
var _gwenpunishments = require("./gwenpunishments");
var _hubnews = require("./hubnews");
var _incognitostaff = require("./incognitostaff");
var _items = require("./items");
var _kitprogression = require("./kitprogression");
var _mavericksmasterbuildersbuilds = require("./mavericksmasterbuildersbuilds");
var _newnpcsnew = require("./newnpcsnew");
var _npcs = require("./npcs");
var _playermap = require("./playermap");
var _polls = require("./polls");
var _powerplayclaims = require("./powerplayclaims");
var _powerplaysubs = require("./powerplaysubs");
var _preferences = require("./preferences");
var _rankbenefits = require("./rankbenefits");
var _reportcategorytypes = require("./reportcategorytypes");
var _reporthandlers = require("./reporthandlers");
var _reportreasons = require("./reportreasons");
var _reportresults = require("./reportresults");
var _reportresulttypes = require("./reportresulttypes");
var _reports = require("./reports");
var _reportteammemberships = require("./reportteammemberships");
var _reportteams = require("./reportteams");
var _salesannouncements = require("./salesannouncements");
var _shadowmutes = require("./shadowmutes");
var _snapshotmessagemap = require("./snapshotmessagemap");
var _snapshotmessages = require("./snapshotmessages");
var _snapshotrecipients = require("./snapshotrecipients");
var _snapshots = require("./snapshots");
var _snapshottypes = require("./snapshottypes");
var _specificyoutube = require("./specificyoutube");
var _stats = require("./stats");
var _statseasons = require("./statseasons");
var _tasks = require("./tasks");
var _titangiveaway = require("./titangiveaway");
var _tournaments = require("./tournaments");
var _tournamentteaminvites = require("./tournamentteaminvites");
var _tournamentteams = require("./tournamentteams");
var _twofactor = require("./twofactor");
var _twofactor_history = require("./twofactor_history");
var _youtube = require("./youtube");

function initModels(sequelize) {
  var accountamplifierthank = _accountamplifierthank(sequelize, DataTypes);
  var accountclan = _accountclan(sequelize, DataTypes);
  var accountclansmounts = _accountclansmounts(sequelize, DataTypes);
  var accountcrowns = _accountcrowns(sequelize, DataTypes);
  var accountcustomdata = _accountcustomdata(sequelize, DataTypes);
  var accountfavouritenano = _accountfavouritenano(sequelize, DataTypes);
  var accountfriend = _accountfriend(sequelize, DataTypes);
  var accountfrienddata = _accountfrienddata(sequelize, DataTypes);
  var accountgiveaway = _accountgiveaway(sequelize, DataTypes);
  var accountignore = _accountignore(sequelize, DataTypes);
  var accountinventory = _accountinventory(sequelize, DataTypes);
  var accountkits = _accountkits(sequelize, DataTypes);
  var accountkitstats = _accountkitstats(sequelize, DataTypes);
  var accountlevelreward = _accountlevelreward(sequelize, DataTypes);
  var accountmissions = _accountmissions(sequelize, DataTypes);
  var accountpets = _accountpets(sequelize, DataTypes);
  var accountpolls = _accountpolls(sequelize, DataTypes);
  var accountpreferences = _accountpreferences(sequelize, DataTypes);
  var accountpunishments = _accountpunishments(sequelize, DataTypes);
  var accountranks = _accountranks(sequelize, DataTypes);
  var accounts = _accounts(sequelize, DataTypes);
  var accountstatsalltime = _accountstatsalltime(sequelize, DataTypes);
  var accountstatsdaily = _accountstatsdaily(sequelize, DataTypes);
  var accountstatsmonthly = _accountstatsmonthly(sequelize, DataTypes);
  var accountstatsseasonal = _accountstatsseasonal(sequelize, DataTypes);
  var accountstatsweekly = _accountstatsweekly(sequelize, DataTypes);
  var accountstatsyearly = _accountstatsyearly(sequelize, DataTypes);
  var accounttasks = _accounttasks(sequelize, DataTypes);
  var accountteamspeak = _accountteamspeak(sequelize, DataTypes);
  var accountthanktransactions = _accountthanktransactions(sequelize, DataTypes);
  var accounttitle = _accounttitle(sequelize, DataTypes);
  var accounttreasurehunt = _accounttreasurehunt(sequelize, DataTypes);
  var accountvalentinesgift = _accountvalentinesgift(sequelize, DataTypes);
  var accountwinstreak = _accountwinstreak(sequelize, DataTypes);
  var aprilfoolstreasure = _aprilfoolstreasure(sequelize, DataTypes);
  var banwavepending = _banwavepending(sequelize, DataTypes);
  var banwaveprocessed = _banwaveprocessed(sequelize, DataTypes);
  var bonus = _bonus(sequelize, DataTypes);
  var bonuslog = _bonuslog(sequelize, DataTypes);
  var boosters = _boosters(sequelize, DataTypes);
  var botspam = _botspam(sequelize, DataTypes);
  var check_daily = _check_daily(sequelize, DataTypes);
  var clanalliances = _clanalliances(sequelize, DataTypes);
  var clanbanners = _clanbanners(sequelize, DataTypes);
  var clanbans = _clanbans(sequelize, DataTypes);
  var clannameblacklist = _clannameblacklist(sequelize, DataTypes);
  var clans = _clans(sequelize, DataTypes);
  var clanserver = _clanserver(sequelize, DataTypes);
  var clansgold = _clansgold(sequelize, DataTypes);
  var clansipbans = _clansipbans(sequelize, DataTypes);
  var clansiphistory = _clansiphistory(sequelize, DataTypes);
  var clansipwhitelists = _clansipwhitelists(sequelize, DataTypes);
  var clansmountstats = _clansmountstats(sequelize, DataTypes);
  var clansnetherportals = _clansnetherportals(sequelize, DataTypes);
  var clansoutposts = _clansoutposts(sequelize, DataTypes);
  var clanssiegeweapons = _clanssiegeweapons(sequelize, DataTypes);
  var clanssupplypack = _clanssupplypack(sequelize, DataTypes);
  var clanstutorial = _clanstutorial(sequelize, DataTypes);
  var clanterritory = _clanterritory(sequelize, DataTypes);
  var clanwar = _clanwar(sequelize, DataTypes);
  var communities = _communities(sequelize, DataTypes);
  var communityinvites = _communityinvites(sequelize, DataTypes);
  var communityjoinrequests = _communityjoinrequests(sequelize, DataTypes);
  var communitymembers = _communitymembers(sequelize, DataTypes);
  var communitysettings = _communitysettings(sequelize, DataTypes);
  var custombuilds = _custombuilds(sequelize, DataTypes);
  var custombuildslots = _custombuildslots(sequelize, DataTypes);
  var customdata = _customdata(sequelize, DataTypes);
  var elorating = _elorating(sequelize, DataTypes);
  var eternalgiveaway = _eternalgiveaway(sequelize, DataTypes);
  var fieldblock = _fieldblock(sequelize, DataTypes);
  var fieldmonster = _fieldmonster(sequelize, DataTypes);
  var fieldore = _fieldore(sequelize, DataTypes);
  var forumlink = _forumlink(sequelize, DataTypes);
  var gamemaps = _gamemaps(sequelize, DataTypes);
  var gameplayerstatistics = _gameplayerstatistics(sequelize, DataTypes);
  var gamestatistics = _gamestatistics(sequelize, DataTypes);
  var gepaddresses = _gepaddresses(sequelize, DataTypes);
  var giveaway = _giveaway(sequelize, DataTypes);
  var gwenpunishments = _gwenpunishments(sequelize, DataTypes);
  var hubnews = _hubnews(sequelize, DataTypes);
  var incognitostaff = _incognitostaff(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var kitprogression = _kitprogression(sequelize, DataTypes);
  var mavericksmasterbuildersbuilds = _mavericksmasterbuildersbuilds(sequelize, DataTypes);
  var newnpcsnew = _newnpcsnew(sequelize, DataTypes);
  var npcs = _npcs(sequelize, DataTypes);
  var playermap = _playermap(sequelize, DataTypes);
  var polls = _polls(sequelize, DataTypes);
  var powerplayclaims = _powerplayclaims(sequelize, DataTypes);
  var powerplaysubs = _powerplaysubs(sequelize, DataTypes);
  var preferences = _preferences(sequelize, DataTypes);
  var rankbenefits = _rankbenefits(sequelize, DataTypes);
  var reportcategorytypes = _reportcategorytypes(sequelize, DataTypes);
  var reporthandlers = _reporthandlers(sequelize, DataTypes);
  var reportreasons = _reportreasons(sequelize, DataTypes);
  var reportresults = _reportresults(sequelize, DataTypes);
  var reportresulttypes = _reportresulttypes(sequelize, DataTypes);
  var reports = _reports(sequelize, DataTypes);
  var reportteammemberships = _reportteammemberships(sequelize, DataTypes);
  var reportteams = _reportteams(sequelize, DataTypes);
  var salesannouncements = _salesannouncements(sequelize, DataTypes);
  var shadowmutes = _shadowmutes(sequelize, DataTypes);
  var snapshotmessagemap = _snapshotmessagemap(sequelize, DataTypes);
  var snapshotmessages = _snapshotmessages(sequelize, DataTypes);
  var snapshotrecipients = _snapshotrecipients(sequelize, DataTypes);
  var snapshots = _snapshots(sequelize, DataTypes);
  var snapshottypes = _snapshottypes(sequelize, DataTypes);
  var specificyoutube = _specificyoutube(sequelize, DataTypes);
  var stats = _stats(sequelize, DataTypes);
  var statseasons = _statseasons(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var titangiveaway = _titangiveaway(sequelize, DataTypes);
  var tournaments = _tournaments(sequelize, DataTypes);
  var tournamentteaminvites = _tournamentteaminvites(sequelize, DataTypes);
  var tournamentteams = _tournamentteams(sequelize, DataTypes);
  var twofactor = _twofactor(sequelize, DataTypes);
  var twofactor_history = _twofactor_history(sequelize, DataTypes);
  var youtube = _youtube(sequelize, DataTypes);

  accounts.belongsToMany(clanserver, { as: 'serverId_clanservers', through: clansiphistory, foreignKey: "accountId", otherKey: "serverId" });
  accounts.belongsToMany(clanserver, { as: 'serverId_clanserver_clanssupplypacks', through: clanssupplypack, foreignKey: "accountId", otherKey: "serverId" });
  accounts.belongsToMany(reports, { as: 'reportId_reports', through: reporthandlers, foreignKey: "handlerId", otherKey: "reportId" });
  accounts.belongsToMany(reports, { as: 'reportId_reports_reportreasons', through: reportreasons, foreignKey: "reporterId", otherKey: "reportId" });
  accounts.belongsToMany(reportteams, { as: 'teamId_reportteams', through: reportteammemberships, foreignKey: "accountId", otherKey: "teamId" });
  accounts.belongsToMany(snapshotmessages, { as: 'messageId_snapshotmessages_snapshotrecipients', through: snapshotrecipients, foreignKey: "recipientId", otherKey: "messageId" });
  accounts.belongsToMany(stats, { as: 'statId_stats', through: accountstatsalltime, foreignKey: "accountId", otherKey: "statId" });
  accounts.belongsToMany(stats, { as: 'statId_stats_accountstatsdailies', through: accountstatsdaily, foreignKey: "accountId", otherKey: "statId" });
  accounts.belongsToMany(stats, { as: 'statId_stats_accountstatsmonthlies', through: accountstatsmonthly, foreignKey: "accountId", otherKey: "statId" });
  accounts.belongsToMany(stats, { as: 'statId_stats_accountstatsweeklies', through: accountstatsweekly, foreignKey: "accountId", otherKey: "statId" });
  accounts.belongsToMany(stats, { as: 'statId_stats_accountstatsyearlies', through: accountstatsyearly, foreignKey: "accountId", otherKey: "statId" });
  clanserver.belongsToMany(accounts, { as: 'accountId_accounts_clansiphistories', through: clansiphistory, foreignKey: "serverId", otherKey: "accountId" });
  clanserver.belongsToMany(accounts, { as: 'accountId_accounts_clanssupplypacks', through: clanssupplypack, foreignKey: "serverId", otherKey: "accountId" });
  reports.belongsToMany(accounts, { as: 'handlerId_accounts', through: reporthandlers, foreignKey: "reportId", otherKey: "handlerId" });
  reports.belongsToMany(accounts, { as: 'reporterId_accounts', through: reportreasons, foreignKey: "reportId", otherKey: "reporterId" });
  reportteams.belongsToMany(accounts, { as: 'accountId_accounts_reportteammemberships', through: reportteammemberships, foreignKey: "teamId", otherKey: "accountId" });
  snapshotmessages.belongsToMany(accounts, { as: 'recipientId_accounts', through: snapshotrecipients, foreignKey: "messageId", otherKey: "recipientId" });
  snapshotmessages.belongsToMany(snapshots, { as: 'snapshotId_snapshots', through: snapshotmessagemap, foreignKey: "messageId", otherKey: "snapshotId" });
  snapshots.belongsToMany(snapshotmessages, { as: 'messageId_snapshotmessages', through: snapshotmessagemap, foreignKey: "snapshotId", otherKey: "messageId" });
  stats.belongsToMany(accounts, { as: 'accountId_accounts', through: accountstatsalltime, foreignKey: "statId", otherKey: "accountId" });
  stats.belongsToMany(accounts, { as: 'accountId_accounts_accountstatsdailies', through: accountstatsdaily, foreignKey: "statId", otherKey: "accountId" });
  stats.belongsToMany(accounts, { as: 'accountId_accounts_accountstatsmonthlies', through: accountstatsmonthly, foreignKey: "statId", otherKey: "accountId" });
  stats.belongsToMany(accounts, { as: 'accountId_accounts_accountstatsweeklies', through: accountstatsweekly, foreignKey: "statId", otherKey: "accountId" });
  stats.belongsToMany(accounts, { as: 'accountId_accounts_accountstatsyearlies', through: accountstatsyearly, foreignKey: "statId", otherKey: "accountId" });
  accounts.hasMany(accountamplifierthank, { as: "accountamplifierthanks", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountamplifierthank.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountclan, { as: "accountclans", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountclan.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasOne(accountcrowns, { as: "accountcrown", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountcrowns.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountfavouritenano, { as: "accountfavouritenanos", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountfavouritenano.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountgiveaway, { as: "accountgiveaways", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountgiveaway.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountinventory, { as: "accountinventories", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountinventory.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountlevelreward, { as: "accountlevelrewards", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountlevelreward.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountmissions, { as: "accountmissions", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountmissions.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountpets, { as: "accountpets", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountpets.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountpolls, { as: "accountpolls", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountpolls.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountranks, { as: "accountranks", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountranks.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountstatsalltime, { as: "accountstatsalltimes", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsalltime.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountstatsdaily, { as: "accountstatsdailies", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsdaily.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountstatsmonthly, { as: "accountstatsmonthlies", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsmonthly.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountstatsweekly, { as: "accountstatsweeklies", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsweekly.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountstatsyearly, { as: "accountstatsyearlies", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsyearly.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accounttasks, { as: "accounttasks", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accounttasks.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasOne(accountteamspeak, { as: "accountteamspeak", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountteamspeak.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasOne(accounttitle, { as: "accounttitle", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accounttitle.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accounttreasurehunt, { as: "accounttreasurehunts", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accounttreasurehunt.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(accountwinstreak, { as: "accountwinstreaks", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountwinstreak.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(aprilfoolstreasure, { as: "aprilfoolstreasures", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  aprilfoolstreasure.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasOne(banwavepending, { as: "banwavepending", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  banwavepending.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(banwaveprocessed, { as: "banwaveprocesseds", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  banwaveprocessed.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasOne(bonus, { as: "bonus", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  bonus.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(bonuslog, { as: "bonuslogs", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  bonuslog.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(boosters, { as: "boosters", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  boosters.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(clanbans, { as: "clanbans", foreignKey: "uuid", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clanbans.belongsTo(accounts, { as: "uu", foreignKey: "uuid"});
  accounts.hasMany(clansgold, { as: "clansgolds", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clansgold.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(clansiphistory, { as: "clansiphistories", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clansiphistory.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(clanssupplypack, { as: "clanssupplypacks", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clanssupplypack.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(communityjoinrequests, { as: "communityjoinrequests", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  communityjoinrequests.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(communitymembers, { as: "communitymembers", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  communitymembers.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(customdata, { as: "customdata", foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  customdata.belongsTo(accounts, { as: "id_account", foreignKey: "id"});
  accounts.hasMany(eternalgiveaway, { as: "eternalgiveaways", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  eternalgiveaway.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(gwenpunishments, { as: "gwenpunishments", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  gwenpunishments.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(mavericksmasterbuildersbuilds, { as: "mavericksmasterbuildersbuilds", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  mavericksmasterbuildersbuilds.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(powerplayclaims, { as: "powerplayclaims", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  powerplayclaims.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(powerplaysubs, { as: "powerplaysubs", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  powerplaysubs.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(preferences, { as: "preferences", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  preferences.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(rankbenefits, { as: "rankbenefits", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  rankbenefits.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(reporthandlers, { as: "reporthandlers", foreignKey: "handlerId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reporthandlers.belongsTo(accounts, { as: "handler", foreignKey: "handlerId"});
  accounts.hasMany(reportreasons, { as: "reportreasons", foreignKey: "reporterId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reportreasons.belongsTo(accounts, { as: "reporter", foreignKey: "reporterId"});
  accounts.hasMany(reports, { as: "reports", foreignKey: "suspectId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reports.belongsTo(accounts, { as: "suspect", foreignKey: "suspectId"});
  accounts.hasMany(reportteammemberships, { as: "reportteammemberships", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reportteammemberships.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(shadowmutes, { as: "shadowmutes", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  shadowmutes.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(snapshotmessages, { as: "snapshotmessages", foreignKey: "senderId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotmessages.belongsTo(accounts, { as: "sender", foreignKey: "senderId"});
  accounts.hasMany(snapshotrecipients, { as: "snapshotrecipients", foreignKey: "recipientId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotrecipients.belongsTo(accounts, { as: "recipient", foreignKey: "recipientId"});
  accounts.hasMany(snapshots, { as: "snapshots", foreignKey: "creatorId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshots.belongsTo(accounts, { as: "creator", foreignKey: "creatorId"});
  accounts.hasMany(specificyoutube, { as: "specificyoutubes", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  specificyoutube.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(titangiveaway, { as: "titangiveaways", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  titangiveaway.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(tournamentteaminvites, { as: "tournamentteaminvites", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  tournamentteaminvites.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(tournamentteams, { as: "tournamentteams", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  tournamentteams.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(twofactor, { as: "twofactors", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  twofactor.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(twofactor_history, { as: "twofactor_histories", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  twofactor_history.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  accounts.hasMany(youtube, { as: "youtubes", foreignKey: "accountId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  youtube.belongsTo(accounts, { as: "account", foreignKey: "accountId"});
  boosters.hasMany(accountamplifierthank, { as: "accountamplifierthanks", foreignKey: "amplifierId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountamplifierthank.belongsTo(boosters, { as: "amplifier", foreignKey: "amplifierId"});
  clans.hasMany(clanalliances, { as: "clanalliances", foreignKey: "clanId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clanalliances.belongsTo(clans, { as: "clan", foreignKey: "clanId"});
  clans.hasMany(clanalliances, { as: "otherClan_clanalliances", foreignKey: "otherClanId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clanalliances.belongsTo(clans, { as: "otherClan", foreignKey: "otherClanId"});
  clanserver.hasMany(clansiphistory, { as: "clansiphistories", foreignKey: "serverId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clansiphistory.belongsTo(clanserver, { as: "server", foreignKey: "serverId"});
  clanserver.hasMany(clanssupplypack, { as: "clanssupplypacks", foreignKey: "serverId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  clanssupplypack.belongsTo(clanserver, { as: "server", foreignKey: "serverId"});
  communities.hasMany(communityinvites, { as: "communityinvites", foreignKey: "communityId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  communityinvites.belongsTo(communities, { as: "community", foreignKey: "communityId"});
  communities.hasMany(communityjoinrequests, { as: "communityjoinrequests", foreignKey: "communityId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  communityjoinrequests.belongsTo(communities, { as: "community", foreignKey: "communityId"});
  communities.hasMany(communitymembers, { as: "communitymembers", foreignKey: "communityId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  communitymembers.belongsTo(communities, { as: "community", foreignKey: "communityId"});
  giveaway.hasMany(accountgiveaway, { as: "accountgiveaways", foreignKey: "giveawayId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountgiveaway.belongsTo(giveaway, { as: "giveaway", foreignKey: "giveawayId"});
  items.hasMany(accountinventory, { as: "accountinventories", foreignKey: "itemId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountinventory.belongsTo(items, { as: "item", foreignKey: "itemId"});
  polls.hasMany(accountpolls, { as: "accountpolls", foreignKey: "pollId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountpolls.belongsTo(polls, { as: "poll", foreignKey: "pollId"});
  reportcategorytypes.hasMany(reports, { as: "reports", foreignKey: "categoryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reports.belongsTo(reportcategorytypes, { as: "category", foreignKey: "categoryId"});
  reports.hasMany(reporthandlers, { as: "reporthandlers", foreignKey: "reportId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reporthandlers.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportreasons, { as: "reportreasons", foreignKey: "reportId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reportreasons.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasOne(reportresults, { as: "reportresult", foreignKey: "reportId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reportresults.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reportteams.hasMany(reports, { as: "reports", foreignKey: "assignedTeam", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reports.belongsTo(reportteams, { as: "assignedTeam_reportteam", foreignKey: "assignedTeam"});
  reportteams.hasMany(reportteammemberships, { as: "reportteammemberships", foreignKey: "teamId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reportteammemberships.belongsTo(reportteams, { as: "team", foreignKey: "teamId"});
  snapshotmessages.hasMany(snapshotmessagemap, { as: "snapshotmessagemaps", foreignKey: "messageId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotmessagemap.belongsTo(snapshotmessages, { as: "message", foreignKey: "messageId"});
  snapshotmessages.hasMany(snapshotrecipients, { as: "snapshotrecipients", foreignKey: "messageId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotrecipients.belongsTo(snapshotmessages, { as: "message", foreignKey: "messageId"});
  snapshots.hasMany(reports, { as: "reports", foreignKey: "snapshotId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  reports.belongsTo(snapshots, { as: "snapshot", foreignKey: "snapshotId"});
  snapshots.hasMany(snapshotmessagemap, { as: "snapshotmessagemaps", foreignKey: "snapshotId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotmessagemap.belongsTo(snapshots, { as: "snapshot", foreignKey: "snapshotId"});
  snapshottypes.hasMany(snapshotmessages, { as: "snapshotmessages", foreignKey: "snapshotType", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  snapshotmessages.belongsTo(snapshottypes, { as: "snapshotType_snapshottype", foreignKey: "snapshotType"});
  stats.hasMany(accountstatsalltime, { as: "accountstatsalltimes", foreignKey: "statId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsalltime.belongsTo(stats, { as: "stat", foreignKey: "statId"});
  stats.hasMany(accountstatsdaily, { as: "accountstatsdailies", foreignKey: "statId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsdaily.belongsTo(stats, { as: "stat", foreignKey: "statId"});
  stats.hasMany(accountstatsmonthly, { as: "accountstatsmonthlies", foreignKey: "statId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsmonthly.belongsTo(stats, { as: "stat", foreignKey: "statId"});
  stats.hasMany(accountstatsweekly, { as: "accountstatsweeklies", foreignKey: "statId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsweekly.belongsTo(stats, { as: "stat", foreignKey: "statId"});
  stats.hasMany(accountstatsyearly, { as: "accountstatsyearlies", foreignKey: "statId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  accountstatsyearly.belongsTo(stats, { as: "stat", foreignKey: "statId"});
  
  return {
    accountamplifierthank,
    accountclan,
    accountclansmounts,
    accountcrowns,
    accountcustomdata,
    accountfavouritenano,
    accountfriend,
    accountfrienddata,
    accountgiveaway,
    accountignore,
    accountinventory,
    accountkits,
    accountkitstats,
    accountlevelreward,
    accountmissions,
    accountpets,
    accountpolls,
    accountpreferences,
    accountpunishments,
    accountranks,
    accounts,
    accountstatsalltime,
    accountstatsdaily,
    accountstatsmonthly,
    accountstatsseasonal,
    accountstatsweekly,
    accountstatsyearly,
    accounttasks,
    accountteamspeak,
    accountthanktransactions,
    accounttitle,
    accounttreasurehunt,
    accountvalentinesgift,
    accountwinstreak,
    aprilfoolstreasure,
    banwavepending,
    banwaveprocessed,
    bonus,
    bonuslog,
    boosters,
    botspam,
    check_daily,
    clanalliances,
    clanbanners,
    clanbans,
    clannameblacklist,
    clans,
    clanserver,
    clansgold,
    clansipbans,
    clansiphistory,
    clansipwhitelists,
    clansmountstats,
    clansnetherportals,
    clansoutposts,
    clanssiegeweapons,
    clanssupplypack,
    clanstutorial,
    clanterritory,
    clanwar,
    communities,
    communityinvites,
    communityjoinrequests,
    communitymembers,
    communitysettings,
    custombuilds,
    custombuildslots,
    customdata,
    elorating,
    eternalgiveaway,
    fieldblock,
    fieldmonster,
    fieldore,
    forumlink,
    gamemaps,
    gameplayerstatistics,
    gamestatistics,
    gepaddresses,
    giveaway,
    gwenpunishments,
    hubnews,
    incognitostaff,
    items,
    kitprogression,
    mavericksmasterbuildersbuilds,
    newnpcsnew,
    npcs,
    playermap,
    polls,
    powerplayclaims,
    powerplaysubs,
    preferences,
    rankbenefits,
    reportcategorytypes,
    reporthandlers,
    reportreasons,
    reportresults,
    reportresulttypes,
    reports,
    reportteammemberships,
    reportteams,
    salesannouncements,
    shadowmutes,
    snapshotmessagemap,
    snapshotmessages,
    snapshotrecipients,
    snapshots,
    snapshottypes,
    specificyoutube,
    stats,
    statseasons,
    tasks,
    titangiveaway,
    tournaments,
    tournamentteaminvites,
    tournamentteams,
    twofactor,
    twofactor_history,
    youtube,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
