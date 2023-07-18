const antiSpamSchema = {
    body: {
        type: 'object',
        properties: {
            _playerName: {type: 'string'},
            _uuid: {type: 'string'},
            _region: {type: 'string'},
            _server: {type: 'string'},
            _time: {type: 'integer'}
        }
    }
};
const chatFilterSchema = {
    body: {
        type: 'object',
        properties: {
            content: {
                type: 'object',
                properties: {
                    parts: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                content: {type: 'string'}
                            }
                        }
                    }
                }
            }
        }
    }
};
module.exports = { antiSpamSchema, chatFilterSchema };