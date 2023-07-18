const loginSchema = {
    body: {
        type: "object",
        properties: {
            Name: { type: "string" },
            Uuid: { type: "string" },
        },
    }
};
const punishSchema = {
    body: {
        type: "object",
        properties: {
            Target: { type: "string" },
            Category: { type: "string" },
            Sentence: { type: "string" },
            Reason: { type: "string" },
            Duration: { type: "integer" },
            Admin: { type: "string" },
            Severity: { type: "integer" },
        },
    },
};
const removePunishmentSchema = {
    body: {
        type: "object",
        properties: {
            PunishmentId: { type: "integer" },
            Target: { type: "string" },
            Reason: { type: "string" },
            Admin: { type: "string" },
        },
    }
};
const rewardSchema = {
    body: {
        type: "object",
        properties: {
            Source: { type: "string" },
            Name: { type: "string" },
            Amount: { type: "integer" },
        },
    },
};
const getMatchesSchema = {
    body: {
        type: "string",
    }
};
const punishClientSchema = getMatchesSchema;
const unknownSalesPackageSchema = {
    body: {
        type: "object",
        properties: {
            AccountName: { type: "string" },
            SalesPackageName: { type: "string" },
            CoinPurchase: { type: "string" },
            Cost: { type: "integer" },
            Premium: { type: "boolean" },
        },
    },
};
const clientClassSchema = {
    body: {
        type: "object",
        properties: {
            CustomBuildId: { type: "integer" },
            PlayerName: { type: "string" },
            Name: { type: "string" },
            Active: { type: "boolean" },
            CustomBuildNumber: { type: "integer" },
            PvpClass: { type: "string" },
            SwordSkill: { type: "string" },
            SwordSkillLevel: { type: "integer" },
            AxeSkill: { type: "string" },
            AxeSkillLevel: { type: "integer" },
            BowSkill: { type: "string" },
            BowSkillLevel: { type: "integer" },
            ClassPassiveASkill: { type: "string" },
            ClassPassiveASkillLevel: { type: "integer" },
            ClassPassiveBSkill: { type: "string" },
            ClassPassiveBSkillLevel: { type: "integer" },
            GlobalPassiveSkill: { type: "string" },
            GlobalPassiveSkillLevel: { type: "integer" },
            Slots: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        Name: { type: "string" },
                        Material: { type: "string" },
                        Amount: { type: "integer" }
                    },
            }
            },
            SkillTokens: { type: "integer" },
            ItemTokens: { type: "integer" }
        }
    }
};
module.exports = {
    loginSchema,
    clientClassSchema,
    rewardSchema,
    punishClientSchema,
    getMatchesSchema,
    punishSchema,
    removePunishmentSchema,
    unknownSalesPackageSchema
};