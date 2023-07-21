const playerController = require("../controllers/playerController.js");
const playerSchema = require("../schemas/playerSchemas.js");
const fastify = require("fastify")({ logger: false });


const playerRoutePlugin = (fastify, _, done) => {
    fastify.route({
        method: 'POST',
        url: '/Login',
        handler: playerController.login,
        schema: { body: playerSchema.loginSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/GetAccountByUUID',
        handler: playerController.login,
        schema: { body: playerSchema.alternateLoginSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/GetAccount',
        handler: playerController.login,
        schema: { body: playerSchema.alternateLoginSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/SaveCustomBuild',
        handler: playerController.saveCustomBuild,
        schema: { body: playerSchema.clientClassSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/GemReward',
        handler: playerController.gemReward,
        schema: { body: playerSchema.rewardSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/CoinReward',
        handler: playerController.coinReward,
        schema: { body: playerSchema.rewardSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/GetPunishClient',
        handler: playerController.getPunishClient,
        schema: { body: playerSchema.punishClientSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/GetMatches',
        handler: playerController.getMatches,
        schema: { body: playerSchema.getMatchesSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/Punish',
        handler: playerController.punish,
        schema: { body: playerSchema.punishSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/RemovePunishment',
        handler: playerController.removePunishment,
        schema: { body: playerSchema.removePunishmentSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/PurchaseUnknownSalesPackage',
        handler: playerController.purchaseUnknownSalesPackage,
        schema: { body: playerSchema.unknownSalesPackageSchema.body }
    });
    done();
};
module.exports = playerRoutePlugin;