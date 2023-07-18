function ClientClassToken () {
    this.CustomBuildId = 0;
    this.PlayerName = "";
    this.Name = "";
    this.Active = true;
    this.CustomBuildNumber = 0;
    this.PvpClass = "";
    this.SwordSkill = "";
    this.SwordSkillLevel = 0;
    this.AxeSkill = "";
    this.AxeSkillLevel = 0;
    this.BowSkill = "";
    this.BowSkillLevel = 0;
    this.ClassPassiveASkill = "";
    this.ClassPassiveASkillLevel = 0;
    this.ClassPassiveBSkill = "";
    this.ClassPassiveBSkillLevel = 0;
    this.GlobalPassiveSkill = "";
    this.GlobalPassiveSkillLevel = 0;
    this.Slots = [];
    this.SkillTokens = 0;
    this.ItemTokens = 0;
};


function DonorToken () {
    this.DonorToken = {
        Gems: 2500,
        Coins: 2500,
        SalesPackages: [],
        UnknownSalesPackages: [],
        CustomBuilds: [],
        Transactions: [],
        CoinRewards: [],
        Pets: [],
        PetNameTagCount: 0,
    }
};


function LoginToken () {
    this.LastLogin = Date.now();
    this.Rank = "PLAYER";
    this.DonorToken = new DonorToken().DonorToken;
    this.Time = 0
    this.Punishments = []
};


module.exports = {
    LoginToken,
    DonorToken,
    ClientClassToken
};