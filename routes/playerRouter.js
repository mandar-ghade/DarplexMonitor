const playerController = require("../controllers/playerController.js")
const fastify = require("fastify")({
    logger: false,
});
fastify.post('/PlayerAccount/Login', playerController.loginByUuid)