const dominateController = require("../controllers/dominateController.js");
const dominateSchema = require("../schemas/dominateSchema.js");
const fastify = require("fastify")({ logger: false });

const dominateRoutePlugin = (fastify, _, done) => {
    fastify.route({
        method: 'POST',
        url: '/GetSkills',
        handler: dominateController.getSkills,
        schema: { body: dominateSchema.DominateSkillsSchema.body }
    });
    done();
};
module.exports = dominateRoutePlugin;