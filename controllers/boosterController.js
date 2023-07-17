const {
    addBoosterToDb,
    returnAllBoosters,
    returnBoostersInGroup,
    returnNewBoosterStartTime
} = require("../DataManager.js")

const addBooster = async (request) => {
    const { accountId, uuid, playerName, duration } = request.body;
    const boosterGroup = request.params.boosterGroup;
    const startTime = await returnNewBoosterStartTime(boosterGroup);
    const params = {
        accountId,
        boosterGroup,
        activatorUUID: uuid,
        activatorName: playerName,
        startTime,
        duration
    }
    await addBoosterToDb(params)
    return {
        success: true,
        startTime: new Date(startTime).toISOString()
    }
}

const getBoostersByGroup = async (request) => {
    const boosterGroup = request.params.boosterGroup;
    return await returnBoostersInGroup(boosterGroup);
}

const getAllBoosters = async () => {
    return await returnAllBoosters();
}

module.exports = {
    addBooster,
    getBoostersByGroup,
    getAllBoosters
}