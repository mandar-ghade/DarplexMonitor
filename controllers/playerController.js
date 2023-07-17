const playerToken = require("../tokens/playerTokens.js")
const petController = require("./petController.js")
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
    doPurchaseUnknownSalesPackage
} = require("../DataManager.js");

const login = async (request) => {
    const name = request.body.Name;
    const uuid = request.body.Uuid;
    let accountInfo;
    if (!uuid) {
        accountInfo = await getAccountByName(name);
    } else {
        accountInfo = await getAccountByUuid(uuid);
    }
    let token = new playerToken.LoginToken();
    if(accountInfo.length == 0) {
        return token;
    }
    const id = accountInfo[0].id;
    const dbName = accountInfo[0].name;
    const gems = accountInfo[0].gems;
    const coins = accountInfo[0].coins;
    token.AccountId = id;
    token.Name = dbName;
    if(name != dbName) {
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
    token.DonorToken.CustomBuilds = await returnAllCustomBuilds(id)
    return token;
}

const saveCustomBuild = async (request) => {
    const { PlayerName, Name, Active, CustomBuildNumber, PvpClass, SwordSkill, SwordSkillLevel, AxeSkill, AxeSkillLevel, BowSkill, BowSkillLevel, ClassPassiveASkill, ClassPassiveASkillLevel, ClassPassiveBSkill, ClassPassiveBSkillLevel, GlobalPassiveSkill, GlobalPassiveSkillLevel, Slots, SkillTokens, ItemTokens } = request.body;
    const accountId = await getIdByName(PlayerName);
    const additionalParams = { Active, CustomBuildNumber, SwordSkill, SwordSkillLevel, AxeSkill, AxeSkillLevel, BowSkill, BowSkillLevel, ClassPassiveASkill, ClassPassiveASkillLevel, ClassPassiveBSkill, ClassPassiveBSkillLevel, GlobalPassiveSkill, GlobalPassiveSkillLevel, SkillTokens, ItemTokens};
    if(await userBuildExists(accountId, Name, PvpClass)) {
        await updateBuild(accountId, Name, PvpClass, additionalParams);
    } else {
        const createParams = { Name, Active, CustomBuildNumber, PvpClass, SwordSkill, SwordSkillLevel, AxeSkill, AxeSkillLevel, BowSkill, BowSkillLevel, ClassPassiveASkill, ClassPassiveASkillLevel, ClassPassiveBSkill, ClassPassiveBSkillLevel, GlobalPassiveSkill, GlobalPassiveSkillLevel, SkillTokens, ItemTokens };
        await createBuild(accountId, createParams);
    }
    await updateSlots(accountId, Name, PvpClass, Slots);
}

const gemReward = async (request) => {
    const name = request.body.Name;
    const amount = request.body.Amount;
    const accountInfo = await getAccountByName(name);
    await updateGems(name, accountInfo[0].gems + amount);
    return "Success"
}

const coinReward = async (request) => {
    const name = request.body.Name;
    const amount = request.body.Amount;
    const accountInfo = await getAccountByName(name);
    await updateCoins(name, accountInfo[0].coins + amount);
    return "Success"
}

const getPunishClient = async (request) => {
    const name = request.body
    const id = await getIdByName(name)
    return {
        Name: name,
        Punishments: await returnAllPunishments(id)
    }
}

const getMatches = async (request) => {
    const name = request.body
    if(!await getIdByName(name)) return [];
    return `[${name}]`
}


const punish = async (request) => {
    const { Target, Category, Sentence, Reason, Duration, Admin, Severity } = request.body;
    const accountId = await getIdByName(Target);
    if(!accountId) {
        return "AccountDoesNotExist"
    }
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
    await doPunish(insertParams)
    return "Punished"
}


const removePunishment = async (request) => {
    const { Target, Reason, Admin } = request.body;
    const accountId = await getIdByName(Target);
    console.log(accountId)
    await doRemovePunishment(accountId, Reason, Admin);
    return "PunishmentRemoved";
}


const purchaseUnknownSalesPackage = async (request) => {
    const { AccountName, Cost } = request.body;
    const accountInfo = await getAccountByName(AccountName);
    const coins = accountInfo[0].coins;
    if(coins < Cost) {
        return "InsufficientFunds"
    }
    await doPurchaseUnknownSalesPackage(AccountName, coins - Cost);
    return "Success"
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