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
    const port = dbConfig.WEBSERVER_PORT;
    await app.listen({ port });
    console.log('╔═══════════════════════════ DARPLEX MONITOR ═══════════════════════════╗');
    console.log('║                                                                       ║');
    console.log('║                             VERSION 1.0                               ║');
    console.log('║                                                                       ║');
    console.log(`║                        LISTENING ON PORT ${port}                         ║`);
    console.log('║                                                                       ║');
    console.log('╚═══════════════════════════════════════════════════════════════════════╝');
  } catch (err) {
    app.log.error(err);
  }
};
start();