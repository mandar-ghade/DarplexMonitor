const { getIdByName, isShadowMuted, filterMessages } = require("../DataManager.js")
const { AntiSpamResponseToken, ChatFilterResponseToken } = require("../tokens/chatToken.js")


const getShadowMutes = async (request) => {
    const server = request.params.pluginName;
    const playerName = request.body._playerName;
    const accountId = await getIdByName(playerName);
    if(!accountId) {
        return null
    }
    let token = new AntiSpamResponseToken();
    const shadowMuted = await isShadowMuted(accountId, server);
    if(shadowMuted) {
        token.isShadowMuted = true;
    } else {
        token.isShadowMuted = false;
    }
    return token;
}

const filterMessage = async (request) => {
    const messages = request.body.content.parts;
    return await filterMessages(messages);
}


module.exports = {
    getShadowMutes,
    filterMessage
}