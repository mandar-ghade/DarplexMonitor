const db = require("../models");
const AccountPet = db.accountPets.AccountPet;
const PetToken = require("../tokens/petToken.js");

const retrieveAllPets = async id => {
    let accountPets = await AccountPet.findAll({
        where: { accountId: id }
    });
    if (accountPets.length == 0) return [];
    return accountPets.map(pet => {
        token = new PetToken();
        token.PetName = pet.petName;
        token.PetType = pet.petType;
        return token;
    });
};

const createPet = async (accountId, petType, petName) => {
    return await AccountPet.create({
        accountId, petType, petName
    });
};

const updateActivePet = async (accountId, petType, petName) => {
    return await AccountPet.update(
        { petName: petName }, 
        { where: { accountId, petType } }
    );
};

const getAccountPetsByType = async (accountId, petType) => {
    return await AccountPet.findAll({
        where: { accountId, petType }
    });
};

const addPet = async req => {
    const accountId = req.body.AccountId;
    const petType = req.body.PetType;
    const petName = req.body.PetName;
    await createPet(accountId, petType, petName);
    return [];
};

const updatePet = async req => {
    const accountId = req.body.AccountId;
    const petType = req.body.PetType;
    const petName = req.body.PetName;
    const activePet = await getAccountPetsByType(accountId, petType);
    if (activePet.length == 0) {
        await createPet(accountId, petType, petName);
    } else {
        await updateActivePet(accountId, petType, petName);
    }
    return [];
};

module.exports = { addPet, updatePet, retrieveAllPets };