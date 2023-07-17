function AntiSpamResponseToken () {
    this.isShadowMuted = false
}

let response = {
    content: {
        parts: []
    }
}

function ChatFilterResponseToken () {
    this.content = {}
    this.content.parts = []
}

module.exports = { AntiSpamResponseToken, ChatFilterResponseToken }