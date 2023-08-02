const playerToken = require("../tokens/playerTokens.js");
const petController = require("./petController.js");
const logger = require("../logging.js");
const {
    getIdByName,
    getAccountByName,
    getAccountByUuid,
    updateOldUsername,
    returnAllPunishments,
    userBuildExists,
    updateBuild,
    createBuild,
    updateSlots,
    returnAllCustomBuilds,
    returnRank,
    updateGems,
    updateCoins,
    doPunish,
    doRemovePunishment,
    doPurchaseUnknownSalesPackage,
    validUuid,
    getNameByUuid
} = require("../DataManager.js");

const login = async req => {
    const settings = {
        startBars: true,
        endBars: false,
        route: 'PlayerAccount - Login',
        logRoute: true
    };
    logger.log(settings);
    settings.startBars = false;
    settings.logRoute = false;
    let uuid;
    if ((!req.body.Uuid && !req.body.Name)) {
        uuid = req.body;
    } else if (!req.body.Name) {
        uuid = req.body.Uuid;
    }
    let name;
    let accountInfo;
    if (!uuid) {
        name = req.body.Name;
        accountInfo = await getAccountByName(name);
    } else {
        accountInfo = await getAccountByUuid(uuid);
    }
    let token = new playerToken.LoginToken();
    if (accountInfo.length === 0) {
        logger.log(settings, 'Unknown login');
        (uuid) ? logger.log(settings, `UUID: ${uuid}`) : logger.log(settings, `Name: ${name}`);
        settings.endBars = true;
        const notFound = (uuid) ? 'UUID' : 'name';
        logger.log(settings, `${notFound} could not be found.`);
        if (await validUuid(uuid) && uuid) {
            token.Name = await getNameByUuid(uuid);
        } else if (uuid) token.Name = '';
        return token;
    };
    if (!name) name = accountInfo[0].name;
    logger.log(settings, 'Known login');
    (uuid) ? logger.log(settings, `UUID: ${uuid}`) : logger.log(settings, `Name: ${name}`);
    settings.endBars = true;
    logger.log(settings, `Data has been retrieved.`);
    const id = accountInfo[0].id;
    const dbName = accountInfo[0].name;
    const gems = accountInfo[0].gems;
    const coins = accountInfo[0].coins;
    token.AccountId = id;
    token.Name = dbName;
    if (name !== dbName) {
        await updateOldUsername(name, uuid);
        token.Name = name;
    }
    token.Punishments = await returnAllPunishments(id);
    token.Rank = await returnRank(id);
    token.DonorToken.Gems = gems;
    token.DonorToken.Coins = coins;
    let petInfo = await petController.retrieveAllPets(id);
    token.DonorToken.Pets = petInfo;
    token.DonorToken.PetNameTagCount = petInfo.length;
    token.DonorToken.CustomBuilds = await returnAllCustomBuilds(id);
    console.log(token);
    return token;
}

const saveCustomBuild = async req => {
    const { PlayerName, Name, CustomBuildNumber, PvpClass, Slots, ...additionalParams } = req.body;
    const accountId = await getIdByName(PlayerName);
    const settings = {
        startBars: true,
        endBars: false,
        route: 'PlayerAccount - SaveCustomBuild',
        logRoute: true
    };
    logger.log(settings);
    settings.startBars = false;
    settings.logRoute = false;
    logger.log(settings, `User: ${PlayerName}`);
    logger.log(settings, `ID: ${accountId}`);
    logger.log(settings, `Class: ${PvpClass}`);
    logger.log(settings, `${Name}`);
    if (await userBuildExists(accountId, Name, PvpClass)) {
        if (CustomBuildNumber !== 0) additionalParams.CustomBuildNumber = CustomBuildNumber;
        logger.log(settings, 'Awaiting build update...');
        await updateBuild(accountId, Name, PvpClass, additionalParams);
        logger.log(settings, 'Build updated!');
    } else {
        logger.log(settings, 'Awaiting build creation...');
        await createBuild(accountId, { Name, CustomBuildNumber, PvpClass, ...additionalParams });
        logger.log(settings, 'Build created!');
    }
    logger.log(settings, 'Awaiting slot updates...');
    await updateSlots(accountId, Name, PvpClass, Slots);
    settings.endBars = true;
    logger.log(settings, 'Slots updated');
}

const gemReward = async req => {
    const name = req.body.Name;
    const amount = req.body.Amount;
    const accountInfo = await getAccountByName(name);
    await updateGems(name, accountInfo[0].gems + amount);
    return "True";
}

const coinReward = async req => {
    const name = req.body.Name;
    const amount = req.body.Amount;
    const accountInfo = await getAccountByName(name);
    await updateCoins(name, accountInfo[0].coins + amount);
    return "True";
}

const getPunishClient = async req => {
    const name = req.body;
    const id = await getIdByName(name);
    return {
        Name: name,
        Punishments: await returnAllPunishments(id)
    };
}

const getMatches = async req => {
    const name = req.body;
    if (!await getIdByName(name)) return [];
    return `[${name}]`;
}


const punish = async req => {
    const { Target, Category, Sentence, Reason, Duration, Admin, Severity } = req.body;
    const accountId = await getIdByName(Target);
    if (!accountId) return "AccountDoesNotExist";
    const insertParams = {
        accountId,
        target: Target,
        category: Category,
        sentence: Sentence,
        reason: Reason,
        duration: Duration,
        admin: Admin,
        severity: Severity
    };
    await doPunish(insertParams);
    return "Punished";
}


const removePunishment = async req => {
    const { Target, Reason, Admin } = req.body;
    const accountId = await getIdByName(Target);
    await doRemovePunishment(accountId, Reason, Admin);
    return "PunishmentRemoved";
}


const purchaseUnknownSalesPackage = async req => {
    const { AccountName, Cost, CoinPurchase } = req.body;
    const accountInfo = await getAccountByName(AccountName);
    let currency = accountInfo[0].gems;
    if (CoinPurchase) currency = accountInfo[0].coins;
    if (currency < Cost) return "InsufficientFunds";
    const newBalance = currency - Cost
    await doPurchaseUnknownSalesPackage(AccountName, newBalance, CoinPurchase);
    return "Success";
}



module.exports = {
    login,
    saveCustomBuild,
    gemReward,
    coinReward,
    getPunishClient,
    getMatches,
    punish,
    removePunishment,
    purchaseUnknownSalesPackage
}