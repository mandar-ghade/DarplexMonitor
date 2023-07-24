const playerToken = require("../tokens/playerTokens.js");
const petController = require("./petController.js");
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
    let uuid;
    if((!req.body.Uuid && !req.body.Name)) {
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
        if (await validUuid(uuid) && uuid) {
            token.Name = await getNameByUuid(uuid);
        }
        return token;
    };
    if(!name) name = accountInfo[0].name;
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
    return token;
}

const saveCustomBuild = async req => {
    const { PlayerName, Name, CustomBuildNumber, PvpClass, Slots, ...additionalParams } = req.body;
    const accountId = await getIdByName(PlayerName);
    if (await userBuildExists(accountId, Name, PvpClass)) {
        if (CustomBuildNumber !== 0) additionalParams.CustomBuildNumber = CustomBuildNumber;
        await updateBuild(accountId, Name, PvpClass, additionalParams);
    } else {
        await createBuild(accountId, { Name, CustomBuildNumber, PvpClass, ...additionalParams });
    }
    await updateSlots(accountId, Name, PvpClass, Slots);
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
    if(!await getIdByName(name)) return [];
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
    const { AccountName, Cost } = req.body;
    const accountInfo = await getAccountByName(AccountName);
    const coins = accountInfo[0].coins;
    if (coins < Cost) return "InsufficientFunds";
    await doPurchaseUnknownSalesPackage(AccountName, coins - Cost);
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