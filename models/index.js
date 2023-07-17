const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        logging: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
        }
    },
)

sequelize.authenticate()
.then(() => {
    console.log("Sequelize connected")
}).catch((err) => {
    console.log("Error: " + err)
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.playerAccounts = require("./playerModel.js")(sequelize, DataTypes)
db.chat = require("./chatModel.js")(sequelize, DataTypes, db.playerAccounts)
db.accountPets = require("./petModel")(sequelize, DataTypes, db.playerAccounts)
db.boosters = require("./boosterModel")(sequelize, DataTypes, db.playerAccounts)
db.sequelize.sync({ force: false })
.then(() => {
    console.log("Resync completed.")
});
module.exports = db