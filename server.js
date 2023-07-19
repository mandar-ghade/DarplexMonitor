const app = require("fastify")({ logger: false });
const dbConfig = require('./config/dbConfig.js');
const playerRoute = require("./routes/playerRoute.js")
const petRoute = require("./routes/petRoute.js")
const boosterRoute = require("./routes/boosterRoute.js")
const chatRoute = require("./routes/chatRoute.js")
const dominateRoute = require("./routes/dominateRoute")


app.register(playerRoute, { prefix: '/PlayerAccount' });
app.register(chatRoute)
app.register(petRoute, { prefix: '/Pets' })
app.register(boosterRoute, { prefix: '/booster' })
app.register(dominateRoute, { prefix: '/Dominate' })
const start = async () => {
  try {
    console.log("Starting...")
    await app.listen({ port: dbConfig.WEBSERVER_PORT });
    console.log(`Server listening on port ${dbConfig.WEBSERVER_PORT}`);
  } catch (err) {
    app.log.error(err);
  }
};
start();