function AntiSpamResponseToken () {
    this.isShadowMuted = false;
};


function ChatFilterResponseToken () {
    this.content = {};
    this.content.parts = [];
};


module.exports = { AntiSpamResponseToken, ChatFilterResponseToken };