const {
    getModifiedSkills
} = require("../DataManager.js")

const getSkills = async (request) => {
    const skills = request.body;
    return await getModifiedSkills(skills)
}

module.exports = { getSkills }