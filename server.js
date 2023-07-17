const fastify = require("fastify")({
    logger: false,
});

const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = new Sequelize('account', 'root', 'password', {
    dialect: 'mysql'
  }
);
  
  
//Accounts
fastify.register(require("@fastify/mysql"), {
    promise: true,
    connectionString: "mysql://root:password@localhost/account",
});


accounts.sync().then(() => {
  console.log("Synced successfully!")
}).catch(() => {
  console.log("Error syncing table and model!")
});


const start = async () => {
    try {
      await fastify.listen({ port: 1000 });
    } catch (err) {
      fastify.log.error(err);
    }
    sequelize.authenticate().then(() => {
      console.log("Sequelize connection successful!");
    }).catch((err) => {
      console.log("Error in sequelize connection!")
    })
  };
start();