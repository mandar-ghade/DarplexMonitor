const {
    getModifiedSkills
} = require("../DataManager.js");

const getSkills = async req => {
    const skills = req.body;
    return await getModifiedSkills(skills);
}

module.exports = { getSkills };