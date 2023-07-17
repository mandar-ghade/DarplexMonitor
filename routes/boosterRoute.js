const boosterController = require("../controllers/boosterController.js")
const boosterSchema = require("../schemas/boosterSchema.js")
const fastify = require("fastify")({
    logger: false,
});

const boosterRoutePlugin = function (fastify, _, done) {
    fastify.route({
        method: 'POST',
        url: '/:boosterGroup',
        handler: boosterController.addBooster,
        schema: {
            body: boosterSchema.addBoosterSchema.body
        }
    });
    fastify.route({
        method: 'GET',
        url: '/:boosterGroup',
        handler: boosterController.getBoostersByGroup
    });
    fastify.route({
        method: 'GET',
        url: '/',
        handler: boosterController.getAllBoosters
    });
    
    done()
}

module.exports = boosterRoutePlugin;