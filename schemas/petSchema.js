const petSchema = {
    body: {
        type: "object",
        properties: {
            AccountId: {type: "integer"},
            PetName: {type: "string"},
            PetType: {type: "string"}
        }
    }
};
module.exports = petSchema;