const { getIdByName, isShadowMuted, filterMessages } = require("../DataManager.js");
const { AntiSpamResponseToken, ChatFilterResponseToken } = require("../tokens/chatToken.js");


const getShadowMutes = async req => {
    const server = req.params.pluginName;
    const playerName = req.body._playerName;
    const accountId = await getIdByName(playerName);
    if (!accountId) return null;
    let token = new AntiSpamResponseToken();
    const shadowMuted = await isShadowMuted(accountId, server);
    token.isShadowMuted = shadowMuted;
    return token;
}

const filterMessage = async req => {
    const messages = req.body.content.parts;
    return await filterMessages(messages);
}


module.exports = {
    getShadowMutes,
    filterMessage
}