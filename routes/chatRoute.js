const chatController = require("../controllers/chatController.js");
const chatSchema = require("../schemas/chatSchema.js");
const fastify = require("fastify")({ logger: false });


const chatRoutePlugin = (fastify, _, done) => {
    fastify.route({
        method: 'POST',
        url: '/chat/:pluginName',
        handler: chatController.getShadowMutes,
        schema: { body: chatSchema.antiSpamSchema.body }
    });
    fastify.route({
        method: 'POST',
        url: '/content/item/moderate',
        handler: chatController.filterMessage,
        schema: { body: chatSchema.chatFilterSchema.body }
    });
    done();
};
module.exports = chatRoutePlugin;