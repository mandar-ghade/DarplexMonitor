const petController = require("../controllers/petController.js");
const petSchema = require("../schemas/petSchema.js");
const fastify = require("fastify")({
    logger: false,
});

const petRoutePlugin = function (fastify, _, done) {
    fastify.route({
        method: 'POST',
        url: '/UpdatePet',
        handler: petController.updatePet,
        schema: {
            body: petSchema.body
        }
    });
    fastify.route({
        method: 'POST',
        url: '/AddPet',
        handler: petController.addPet,
        schema: {
            body: petSchema.body
        }
    });
    done();
}

module.exports = petRoutePlugin