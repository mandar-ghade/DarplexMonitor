const db = require("../models");
const AccountPet = db.accountPets.AccountPet;
const PetToken = require("../tokens/petToken.js");

const retrieveAllPets = async (id) => {
    let accountPets = await AccountPet.findAll({
        where: {
            accountId: id
        }
    })
    return accountPets.map((pet) => {
        token = new PetToken()
        token.PetName = pet.petName,
        token.PetType = pet.petType
        return token
    })
}

const createPet = async (accountId, petType, petName) => {
    return await AccountPet.create({
        accountId: accountId,
        petType: petType,
        petName: petName
    })
}

const updateActivePet = async (accountId, petType, petName) => {
    return await AccountPet.update(
    {
        petName: petName
    }, 
    {
        where: {
            accountId: accountId,
            petType: petType
        }
    });
}

const getAccountPetsByType = async (accountId, petType) => {
    return await AccountPet.findAll({
        where: {
            accountId: accountId,
            petType: petType
        }
    });
}

const addPet = async (request, _) => {
    const accountId = request.body.AccountId;
    const petType = request.body.PetType;
    const petName = request.body.PetName;
    await createPet(accountId, petType, petName)
    return []
}

const updatePet = async (request, _) => {
    const accountId = request.body.AccountId;
    const petType = request.body.PetType;
    const petName = request.body.PetName;
    const activePet = await getAccountPetsByType(accountId, petType)
    if(activePet.length == 0) {
        await createPet(accountId, petType, petName);
    } else {
        await updateActivePet(accountId, petType, petName);
    }
    return []
}

module.exports = {
    addPet,
    updatePet,
    retrieveAllPets
}