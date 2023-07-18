const addBoosterSchema = {
    body: {
        type: 'object',
        properties: {
          accountId: {type: 'integer'},
          uuid: {type: 'string'},
          playerName: {type: 'string'},
          duration: {type: 'number'},
        },
    }
};
module.exports = { addBoosterSchema };