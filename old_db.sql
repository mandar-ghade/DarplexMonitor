-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 13, 2023 at 01:07 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `account`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountCrowns`
--

CREATE TABLE `accountCrowns` (
  `accountId` int(11) NOT NULL,
  `crownCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountFavouriteNano`
--

CREATE TABLE `accountFavouriteNano` (
  `accountId` int(11) NOT NULL,
  `gameId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountFriend`
--

CREATE TABLE `accountFriend` (
  `id` int(11) NOT NULL,
  `uuidSource` varchar(100) DEFAULT NULL,
  `uuidTarget` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountGiveaway`
--

CREATE TABLE `accountGiveaway` (
  `giveawayId` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `cooldownId` int(11) NOT NULL,
  `region` varchar(10) NOT NULL,
  `serverName` varchar(64) NOT NULL,
  `uuid` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountIgnore`
--

CREATE TABLE `accountIgnore` (
  `uuidIgnorer` varchar(100) NOT NULL,
  `uuidIgnored` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountInventory`
--

CREATE TABLE `accountInventory` (
  `id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountLevelReward`
--

CREATE TABLE `accountLevelReward` (
  `accountId` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountMissions`
--

CREATE TABLE `accountMissions` (
  `accountId` int(11) NOT NULL,
  `missionId` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  `startTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountPolls`
--

CREATE TABLE `accountPolls` (
  `id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `pollId` int(11) NOT NULL,
  `value` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountRanks`
--

CREATE TABLE `accountRanks` (
  `id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `rankIdentifier` varchar(40) DEFAULT NULL,
  `primaryGroup` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `gems` int(11) DEFAULT NULL,
  `lastLogin` mediumtext DEFAULT NULL,
  `totalPlayTime` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsAllTime`
--

CREATE TABLE `accountStatsAllTime` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsDaily`
--

CREATE TABLE `accountStatsDaily` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `date` date NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsMonthly`
--

CREATE TABLE `accountStatsMonthly` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `date` date NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsSeasonal`
--

CREATE TABLE `accountStatsSeasonal` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `seasonId` smallint(6) NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsWeekly`
--

CREATE TABLE `accountStatsWeekly` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `date` date NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountStatsYearly`
--

CREATE TABLE `accountStatsYearly` (
  `accountId` int(11) NOT NULL,
  `statId` int(11) NOT NULL,
  `date` date NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountTasks`
--

CREATE TABLE `accountTasks` (
  `accountId` int(11) NOT NULL,
  `taskId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountTeamspeak`
--

CREATE TABLE `accountTeamspeak` (
  `accountId` int(11) NOT NULL,
  `teamspeakId` int(11) NOT NULL,
  `linkDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountThankTransactions`
--

CREATE TABLE `accountThankTransactions` (
  `id` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `thankAmount` int(11) NOT NULL,
  `reason` varchar(32) NOT NULL,
  `ignoreCooldown` tinyint(4) NOT NULL,
  `claimed` tinyint(4) NOT NULL,
  `sentTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `claimTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountTitle`
--

CREATE TABLE `accountTitle` (
  `accountId` int(11) NOT NULL,
  `trackName` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountValentinesGift`
--

CREATE TABLE `accountValentinesGift` (
  `senderId` int(11) NOT NULL,
  `targetId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `accountWinStreak`
--

CREATE TABLE `accountWinStreak` (
  `accountId` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aprilFoolsTreasure`
--

CREATE TABLE `aprilFoolsTreasure` (
  `accountId` int(11) NOT NULL,
  `treasureId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `banwavePending`
--

CREATE TABLE `banwavePending` (
  `accountId` int(11) NOT NULL,
  `timeToBan` bigint(20) UNSIGNED NOT NULL,
  `hacktype` varchar(64) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `vl` int(11) DEFAULT NULL,
  `server` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `banwaveProcessed`
--

CREATE TABLE `banwaveProcessed` (
  `id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `timeToBan` bigint(20) UNSIGNED NOT NULL,
  `hacktype` varchar(64) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `vl` int(11) DEFAULT NULL,
  `server` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bonus`
--

CREATE TABLE `bonus` (
  `accountId` int(11) NOT NULL,
  `dailytime` timestamp NULL DEFAULT NULL,
  `clansdailytime` timestamp NULL DEFAULT NULL,
  `ranktime` date DEFAULT NULL,
  `votetime` date DEFAULT NULL,
  `clansvotetime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `botSpam`
--

CREATE TABLE `botSpam` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `punishments` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `enabledBy` varchar(255) NOT NULL,
  `disabledBy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clanBans`
--

CREATE TABLE `clanBans` (
  `uuid` varchar(250) NOT NULL,
  `admin` varchar(250) NOT NULL,
  `reason` varchar(250) NOT NULL,
  `banTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `unbanTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `permanent` tinyint(1) NOT NULL,
  `removed` tinyint(1) NOT NULL,
  `removeAdmin` varchar(250) DEFAULT NULL,
  `removeReason` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clansGold`
--

CREATE TABLE `clansGold` (
  `serverId` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `gold` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `communities`
--

CREATE TABLE `communities` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `communityInvites`
--

CREATE TABLE `communityInvites` (
  `communityId` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `communityJoinRequests`
--

CREATE TABLE `communityJoinRequests` (
  `accountId` int(11) NOT NULL,
  `communityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `communityMembers`
--

CREATE TABLE `communityMembers` (
  `accountId` int(11) NOT NULL,
  `communityId` int(11) NOT NULL,
  `communityRole` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customData`
--

CREATE TABLE `customData` (
  `account` int(11) NOT NULL,
  `customData` int(11) NOT NULL,
  `data` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `eternalGiveaway`
--

CREATE TABLE `eternalGiveaway` (
  `accountId` int(11) NOT NULL,
  `region` varchar(10) NOT NULL,
  `serverName` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gameMaps`
--

CREATE TABLE `gameMaps` (
  `gameType` int(11) NOT NULL,
  `mapName` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gamePlayerStatistics`
--

CREATE TABLE `gamePlayerStatistics` (
  `gameIdString` int(11) NOT NULL,
  `playerIdString` int(11) NOT NULL,
  `statIdString` int(11) NOT NULL,
  `statValueString` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gameStatistics`
--

CREATE TABLE `gameStatistics` (
  `gameId` int(11) NOT NULL,
  `region` varchar(2) NOT NULL,
  `gameType` int(11) NOT NULL,
  `map` int(11) NOT NULL,
  `startTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `endTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `giveaway`
--

CREATE TABLE `giveaway` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `prettyName` varchar(250) NOT NULL,
  `header` varchar(250) NOT NULL,
  `message` varchar(250) NOT NULL,
  `max` int(11) NOT NULL,
  `notifyNetwork` tinyint(1) NOT NULL,
  `notifyCooldown` int(11) NOT NULL,
  `canWinTwice` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gwenPunishments`
--

CREATE TABLE `gwenPunishments` (
  `accountId` int(11) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `incognitoStaff`
--

CREATE TABLE `incognitoStaff` (
  `accountId` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `rarity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kitProgression`
--

CREATE TABLE `kitProgression` (
  `uuid` varchar(36) NOT NULL,
  `kitId` varchar(64) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `xp` int(11) DEFAULT NULL,
  `upgrade_level` int(11) DEFAULT NULL,
  `default` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mavericksMasterBuildersBuilds`
--

CREATE TABLE `mavericksMasterBuildersBuilds` (
  `accountId` int(11) NOT NULL,
  `BuildTheme` varchar(255) NOT NULL,
  `Points` double NOT NULL,
  `Place` int(11) NOT NULL,
  `Date` bigint(20) NOT NULL,
  `Schematic` blob DEFAULT NULL,
  `Reviewed` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `newNPCsNew`
--

CREATE TABLE `newNPCsNew` (
  `id` int(11) NOT NULL,
  `entity_type` varchar(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `info` varchar(250) NOT NULL,
  `world` varchar(250) NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `yaw` int(11) NOT NULL,
  `pitch` int(11) NOT NULL,
  `in_hand` varchar(250) NOT NULL,
  `in_hand_data` blob NOT NULL,
  `helmet` varchar(250) NOT NULL,
  `chestplate` varchar(250) NOT NULL,
  `leggings` varchar(250) NOT NULL,
  `boots` varchar(250) NOT NULL,
  `metadata` varchar(250) NOT NULL,
  `skin_value` varchar(250) NOT NULL,
  `skin_signature` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `polls`
--

CREATE TABLE `polls` (
  `id` int(11) NOT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `question` varchar(256) NOT NULL,
  `answerA` varchar(256) NOT NULL,
  `answerB` varchar(256) DEFAULT NULL,
  `answerC` varchar(256) DEFAULT NULL,
  `answerD` varchar(256) DEFAULT NULL,
  `coinReward` int(11) NOT NULL,
  `displayType` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `powerPlayClaims`
--

CREATE TABLE `powerPlayClaims` (
  `accountId` int(11) NOT NULL,
  `claimMonth` int(11) NOT NULL,
  `claimYear` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `powerPlaySubs`
--

CREATE TABLE `powerPlaySubs` (
  `accountId` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `duration` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `preferences`
--

CREATE TABLE `preferences` (
  `preference` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `accountId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rankBenefits`
--

CREATE TABLE `rankBenefits` (
  `id` int(11) NOT NULL,
  `accountId` int(11) DEFAULT NULL,
  `benefit` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportHandlers`
--

CREATE TABLE `reportHandlers` (
  `reportId` mediumtext NOT NULL,
  `handlerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportReasons`
--

CREATE TABLE `reportReasons` (
  `reportId` mediumtext NOT NULL,
  `reporterId` int(11) NOT NULL,
  `reason` varchar(250) NOT NULL,
  `server` varchar(250) NOT NULL,
  `weight` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reportResults`
--

CREATE TABLE `reportResults` (
  `reportId` mediumtext NOT NULL,
  `resultId` int(11) NOT NULL,
  `reason` varchar(250) NOT NULL,
  `closedTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `suspectId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `snapshotId` int(11) NOT NULL,
  `assignedTeam` tinyint(4) NOT NULL,
  `region` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `salesAnnouncements`
--

CREATE TABLE `salesAnnouncements` (
  `id` int(11) NOT NULL,
  `ranks` varchar(250) DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `clans` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `snapshotMessageMap`
--

CREATE TABLE `snapshotMessageMap` (
  `snapshotId` int(11) NOT NULL,
  `messageId` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `snapshotMessages`
--

CREATE TABLE `snapshotMessages` (
  `senderId` int(11) NOT NULL,
  `server` varchar(250) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `message` varchar(250) NOT NULL,
  `snapshotType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `snapshotRecipients`
--

CREATE TABLE `snapshotRecipients` (
  `messageId` mediumtext NOT NULL,
  `recipientId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `snapshots`
--

CREATE TABLE `snapshots` (
  `token` varchar(250) NOT NULL,
  `creatorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `specificYoutube`
--

CREATE TABLE `specificYoutube` (
  `accountId` int(11) NOT NULL,
  `clicktime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `statSeasons`
--

CREATE TABLE `statSeasons` (
  `id` smallint(6) NOT NULL,
  `seasonName` varchar(50) NOT NULL,
  `startDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `endDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `titanGiveaway`
--

CREATE TABLE `titanGiveaway` (
  `accountId` int(11) NOT NULL,
  `region` varchar(10) NOT NULL,
  `serverName` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tournaments`
--

CREATE TABLE `tournaments` (
  `TournamentId` int(11) NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `GameType` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tournamentTeamInvites`
--

CREATE TABLE `tournamentTeamInvites` (
  `accountId` int(11) NOT NULL,
  `tournamentId` int(11) NOT NULL,
  `teamId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tournamentTeams`
--

CREATE TABLE `tournamentTeams` (
  `accountId` int(11) NOT NULL,
  `tournamentId` int(11) NOT NULL,
  `status` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `twofactor`
--

CREATE TABLE `twofactor` (
  `accountId` int(11) NOT NULL,
  `secretKey` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `twofactor_history`
--

CREATE TABLE `twofactor_history` (
  `accountId` int(11) NOT NULL,
  `ip` varchar(250) NOT NULL,
  `loginTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `youtube`
--

CREATE TABLE `youtube` (
  `accountId` int(11) NOT NULL,
  `clicktime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountCrowns`
--
ALTER TABLE `accountCrowns`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `accountFavouriteNano`
--
ALTER TABLE `accountFavouriteNano`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `accountFriend`
--
ALTER TABLE `accountFriend`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuidIndex` (`uuidSource`,`uuidTarget`);

--
-- Indexes for table `accountGiveaway`
--
ALTER TABLE `accountGiveaway`
  ADD KEY `accountgiveaway_ibfk_1` (`accountId`),
  ADD KEY `giveawayId` (`giveawayId`);

--
-- Indexes for table `accountInventory`
--
ALTER TABLE `accountInventory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accountItemIndex` (`accountId`,`itemId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `accountLevelReward`
--
ALTER TABLE `accountLevelReward`
  ADD KEY `accountLevelRewardId` (`accountId`);

--
-- Indexes for table `accountMissions`
--
ALTER TABLE `accountMissions`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `accountPolls`
--
ALTER TABLE `accountPolls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accountPollIndex` (`accountId`,`pollId`),
  ADD KEY `pollId` (`pollId`);

--
-- Indexes for table `accountRanks`
--
ALTER TABLE `accountRanks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `additionalIndex` (`accountId`,`rankIdentifier`,`primaryGroup`),
  ADD KEY `accountIndex` (`accountId`),
  ADD KEY `rankIndex` (`rankIdentifier`);

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuidIndex` (`uuid`),
  ADD UNIQUE KEY `nameIndex` (`name`);

--
-- Indexes for table `accountStatsAllTime`
--
ALTER TABLE `accountStatsAllTime`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountStatsDaily`
--
ALTER TABLE `accountStatsDaily`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `dateIndex` (`date`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountStatsMonthly`
--
ALTER TABLE `accountStatsMonthly`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `dateIndex` (`date`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountStatsSeasonal`
--
ALTER TABLE `accountStatsSeasonal`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `seasonIndex` (`seasonId`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountStatsWeekly`
--
ALTER TABLE `accountStatsWeekly`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `dateIndex` (`date`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountStatsYearly`
--
ALTER TABLE `accountStatsYearly`
  ADD PRIMARY KEY (`accountId`,`statId`),
  ADD KEY `valueIndex` (`value`),
  ADD KEY `dateIndex` (`date`),
  ADD KEY `statId` (`statId`);

--
-- Indexes for table `accountTasks`
--
ALTER TABLE `accountTasks`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `accountTeamspeak`
--
ALTER TABLE `accountTeamspeak`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `accountThankTransactions`
--
ALTER TABLE `accountThankTransactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `accountTitle`
--
ALTER TABLE `accountTitle`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `accountWinStreak`
--
ALTER TABLE `accountWinStreak`
  ADD KEY `accountwinstreak_ibfk_1` (`accountId`);

--
-- Indexes for table `aprilFoolsTreasure`
--
ALTER TABLE `aprilFoolsTreasure`
  ADD KEY `aprilfoolsid` (`accountId`);

--
-- Indexes for table `banwavePending`
--
ALTER TABLE `banwavePending`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `banwaveProcessed`
--
ALTER TABLE `banwaveProcessed`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `bonus`
--
ALTER TABLE `bonus`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `botSpam`
--
ALTER TABLE `botSpam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clanBans`
--
ALTER TABLE `clanBans`
  ADD KEY `uuid` (`uuid`);

--
-- Indexes for table `clansGold`
--
ALTER TABLE `clansGold`
  ADD PRIMARY KEY (`serverId`,`accountId`),
  ADD KEY `valueIndex` (`serverId`,`accountId`,`gold`),
  ADD KEY `goldIndex` (`serverId`,`gold`),
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `communities`
--
ALTER TABLE `communities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `communityInvites`
--
ALTER TABLE `communityInvites`
  ADD KEY `communityinvites_ibfk_1` (`communityId`);

--
-- Indexes for table `communityJoinRequests`
--
ALTER TABLE `communityJoinRequests`
  ADD KEY `accountId` (`accountId`),
  ADD KEY `communityId` (`communityId`);

--
-- Indexes for table `communityMembers`
--
ALTER TABLE `communityMembers`
  ADD KEY `communitymembers_ibfk_1` (`accountId`),
  ADD KEY `communitymembers_ibfk_2` (`communityId`);

--
-- Indexes for table `customData`
--
ALTER TABLE `customData`
  ADD KEY `account` (`account`);

--
-- Indexes for table `eternalGiveaway`
--
ALTER TABLE `eternalGiveaway`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `giveaway`
--
ALTER TABLE `giveaway`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gwenPunishments`
--
ALTER TABLE `gwenPunishments`
  ADD KEY `gwenPunishmentsaccountId` (`accountId`);

--
-- Indexes for table `incognitoStaff`
--
ALTER TABLE `incognitoStaff`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mameIndex` (`name`);

--
-- Indexes for table `kitProgression`
--
ALTER TABLE `kitProgression`
  ADD PRIMARY KEY (`uuid`,`kitId`);

--
-- Indexes for table `mavericksMasterBuildersBuilds`
--
ALTER TABLE `mavericksMasterBuildersBuilds`
  ADD PRIMARY KEY (`accountId`,`Date`);

--
-- Indexes for table `newNPCsNew`
--
ALTER TABLE `newNPCsNew`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polls`
--
ALTER TABLE `polls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `powerPlayClaims`
--
ALTER TABLE `powerPlayClaims`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `powerPlaySubs`
--
ALTER TABLE `powerPlaySubs`
  ADD KEY `powerplaysubs_ibfk_1` (`accountId`);

--
-- Indexes for table `preferences`
--
ALTER TABLE `preferences`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `rankBenefits`
--
ALTER TABLE `rankBenefits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `salesAnnouncements`
--
ALTER TABLE `salesAnnouncements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeIndex` (`clans`);

--
-- Indexes for table `snapshotMessageMap`
--
ALTER TABLE `snapshotMessageMap`
  ADD PRIMARY KEY (`snapshotId`);

--
-- Indexes for table `snapshotMessages`
--
ALTER TABLE `snapshotMessages`
  ADD KEY `senderId` (`senderId`);

--
-- Indexes for table `snapshotRecipients`
--
ALTER TABLE `snapshotRecipients`
  ADD KEY `recipientId` (`recipientId`);

--
-- Indexes for table `snapshots`
--
ALTER TABLE `snapshots`
  ADD KEY `snapshots_ibfk_1` (`creatorId`);

--
-- Indexes for table `specificYoutube`
--
ALTER TABLE `specificYoutube`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statSeasons`
--
ALTER TABLE `statSeasons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `seasonIndex` (`seasonName`),
  ADD KEY `startIndex` (`startDate`),
  ADD KEY `endIndex` (`endDate`);

--
-- Indexes for table `titanGiveaway`
--
ALTER TABLE `titanGiveaway`
  ADD KEY `titangiveaway_ibfk_1` (`accountId`);

--
-- Indexes for table `tournamentTeamInvites`
--
ALTER TABLE `tournamentTeamInvites`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `tournamentTeams`
--
ALTER TABLE `tournamentTeams`
  ADD KEY `tournamentteams_ibfk_1` (`accountId`);

--
-- Indexes for table `twofactor`
--
ALTER TABLE `twofactor`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `twofactor_history`
--
ALTER TABLE `twofactor_history`
  ADD KEY `accountId` (`accountId`);

--
-- Indexes for table `youtube`
--
ALTER TABLE `youtube`
  ADD KEY `accountId` (`accountId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountFriend`
--
ALTER TABLE `accountFriend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accountInventory`
--
ALTER TABLE `accountInventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accountPolls`
--
ALTER TABLE `accountPolls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accountRanks`
--
ALTER TABLE `accountRanks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accountThankTransactions`
--
ALTER TABLE `accountThankTransactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banwaveProcessed`
--
ALTER TABLE `banwaveProcessed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bonus`
--
ALTER TABLE `bonus`
  MODIFY `accountId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `botSpam`
--
ALTER TABLE `botSpam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `communities`
--
ALTER TABLE `communities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `giveaway`
--
ALTER TABLE `giveaway`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newNPCsNew`
--
ALTER TABLE `newNPCsNew`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `polls`
--
ALTER TABLE `polls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rankBenefits`
--
ALTER TABLE `rankBenefits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salesAnnouncements`
--
ALTER TABLE `salesAnnouncements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `snapshotMessageMap`
--
ALTER TABLE `snapshotMessageMap`
  MODIFY `snapshotId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accountCrowns`
--
ALTER TABLE `accountCrowns`
  ADD CONSTRAINT `accountcrowns_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `accountFavouriteNano`
--
ALTER TABLE `accountFavouriteNano`
  ADD CONSTRAINT `accountfavouritenano_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `accountGiveaway`
--
ALTER TABLE `accountGiveaway`
  ADD CONSTRAINT `accountgiveaway_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `accountgiveaway_ibfk_2` FOREIGN KEY (`giveawayId`) REFERENCES `giveaway` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accountInventory`
--
ALTER TABLE `accountInventory`
  ADD CONSTRAINT `accountinventory_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountinventory_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `items` (`id`);

--
-- Constraints for table `accountLevelReward`
--
ALTER TABLE `accountLevelReward`
  ADD CONSTRAINT `accountLevelRewardId` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accountMissions`
--
ALTER TABLE `accountMissions`
  ADD CONSTRAINT `accountmissions_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accountPolls`
--
ALTER TABLE `accountPolls`
  ADD CONSTRAINT `accountpolls_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountpolls_ibfk_2` FOREIGN KEY (`pollId`) REFERENCES `polls` (`id`);

--
-- Constraints for table `accountRanks`
--
ALTER TABLE `accountRanks`
  ADD CONSTRAINT `accountranks_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `accountStatsAllTime`
--
ALTER TABLE `accountStatsAllTime`
  ADD CONSTRAINT `accountstatsalltime_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsalltime_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`);

--
-- Constraints for table `accountStatsDaily`
--
ALTER TABLE `accountStatsDaily`
  ADD CONSTRAINT `accountstatsdaily_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsdaily_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`);

--
-- Constraints for table `accountStatsMonthly`
--
ALTER TABLE `accountStatsMonthly`
  ADD CONSTRAINT `accountstatsmonthly_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsmonthly_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`);

--
-- Constraints for table `accountStatsSeasonal`
--
ALTER TABLE `accountStatsSeasonal`
  ADD CONSTRAINT `accountstatsseasonal_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsseasonal_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`),
  ADD CONSTRAINT `accountstatsseasonal_ibfk_3` FOREIGN KEY (`seasonId`) REFERENCES `statSeasons` (`id`);

--
-- Constraints for table `accountStatsWeekly`
--
ALTER TABLE `accountStatsWeekly`
  ADD CONSTRAINT `accountstatsweekly_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsweekly_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`);

--
-- Constraints for table `accountStatsYearly`
--
ALTER TABLE `accountStatsYearly`
  ADD CONSTRAINT `accountstatsyearly_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `accountstatsyearly_ibfk_2` FOREIGN KEY (`statId`) REFERENCES `stats` (`id`);

--
-- Constraints for table `accountTasks`
--
ALTER TABLE `accountTasks`
  ADD CONSTRAINT `accounttasks_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accountTeamspeak`
--
ALTER TABLE `accountTeamspeak`
  ADD CONSTRAINT `accountteamspeak_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `accountTitle`
--
ALTER TABLE `accountTitle`
  ADD CONSTRAINT `accountTitle_account` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `accountWinStreak`
--
ALTER TABLE `accountWinStreak`
  ADD CONSTRAINT `accountwinstreak_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `aprilFoolsTreasure`
--
ALTER TABLE `aprilFoolsTreasure`
  ADD CONSTRAINT `aprilfoolsid` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `banwavePending`
--
ALTER TABLE `banwavePending`
  ADD CONSTRAINT `banwavepending_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `banwaveProcessed`
--
ALTER TABLE `banwaveProcessed`
  ADD CONSTRAINT `banwaveprocessed_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `bonus`
--
ALTER TABLE `bonus`
  ADD CONSTRAINT `bonus_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `clanBans`
--
ALTER TABLE `clanBans`
  ADD CONSTRAINT `clanbans_ibfk_1` FOREIGN KEY (`uuid`) REFERENCES `accounts` (`uuid`);

--
-- Constraints for table `clansGold`
--
ALTER TABLE `clansGold`
  ADD CONSTRAINT `clansgold_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `communityInvites`
--
ALTER TABLE `communityInvites`
  ADD CONSTRAINT `communityinvites_ibfk_1` FOREIGN KEY (`communityId`) REFERENCES `communities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `communityJoinRequests`
--
ALTER TABLE `communityJoinRequests`
  ADD CONSTRAINT `communityjoinrequests_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `communityjoinrequests_ibfk_2` FOREIGN KEY (`communityId`) REFERENCES `communities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `communityMembers`
--
ALTER TABLE `communityMembers`
  ADD CONSTRAINT `communitymembers_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `communitymembers_ibfk_2` FOREIGN KEY (`communityId`) REFERENCES `communities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customData`
--
ALTER TABLE `customData`
  ADD CONSTRAINT `customdata_ibfk_1` FOREIGN KEY (`account`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `eternalGiveaway`
--
ALTER TABLE `eternalGiveaway`
  ADD CONSTRAINT `eternalgiveaway_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `gwenPunishments`
--
ALTER TABLE `gwenPunishments`
  ADD CONSTRAINT `gwenPunishmentsaccountId` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mavericksMasterBuildersBuilds`
--
ALTER TABLE `mavericksMasterBuildersBuilds`
  ADD CONSTRAINT `mavericksmasterbuildersbuilds_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `powerPlayClaims`
--
ALTER TABLE `powerPlayClaims`
  ADD CONSTRAINT `powerplayclaims_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `powerPlaySubs`
--
ALTER TABLE `powerPlaySubs`
  ADD CONSTRAINT `powerplaysubs_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `preferences`
--
ALTER TABLE `preferences`
  ADD CONSTRAINT `preferences_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `rankBenefits`
--
ALTER TABLE `rankBenefits`
  ADD CONSTRAINT `rankbenefits_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `snapshotMessages`
--
ALTER TABLE `snapshotMessages`
  ADD CONSTRAINT `snapshotmessages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `snapshotRecipients`
--
ALTER TABLE `snapshotRecipients`
  ADD CONSTRAINT `snapshotrecipients_ibfk_1` FOREIGN KEY (`recipientId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `snapshots`
--
ALTER TABLE `snapshots`
  ADD CONSTRAINT `snapshots_ibfk_1` FOREIGN KEY (`creatorId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specificYoutube`
--
ALTER TABLE `specificYoutube`
  ADD CONSTRAINT `specificyoutube_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `titanGiveaway`
--
ALTER TABLE `titanGiveaway`
  ADD CONSTRAINT `titangiveaway_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tournamentTeamInvites`
--
ALTER TABLE `tournamentTeamInvites`
  ADD CONSTRAINT `tournamentteaminvites_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tournamentTeams`
--
ALTER TABLE `tournamentTeams`
  ADD CONSTRAINT `tournamentteams_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `twofactor`
--
ALTER TABLE `twofactor`
  ADD CONSTRAINT `twofactor_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `twofactor_history`
--
ALTER TABLE `twofactor_history`
  ADD CONSTRAINT `twofactor_history_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `youtube`
--
ALTER TABLE `youtube`
  ADD CONSTRAINT `youtube_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
