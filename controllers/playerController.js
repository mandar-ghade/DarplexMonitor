const db = require("../models")
const Account = db.playerAccounts

const getAccountByUuid = async (req, res) => {
    return await Account.findAll({
        where: {
            uuid: req.body.uuid
        }
    });
}

const loginByUuid = async (req, res) => {
    const accountInfo = await getAccountByUuid(req.body.Uuid);
}

module.exports = {
    getAccountByUuid,
    loginByUuid
}