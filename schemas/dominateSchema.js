const DominateSkillsSchema = {
    body: {
        type: "array",
        items: {
            type: "object",
            properties: {
                SkillId: { type: "integer" },
                Name: { type: "string" },
                Level: { type: "integer" },
                SalesPackage: {
                    type: "object",
                    properties: {
                        Gems: { type: "integer" },
                        Free: { type: "boolean" },
                    },
                },
            },
        }
    }
};
module.exports = { DominateSkillsSchema };