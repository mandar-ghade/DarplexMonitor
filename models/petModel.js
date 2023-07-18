module.exports = (sequelize, DataTypes, playerAccounts) => {
    const AccountPet = sequelize.define(
        'accountpet',
        {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            accountId: {
                type: DataTypes.INTEGER(11),
                references: {
                    model: playerAccounts.Account,
                    key: 'id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            },
            petType: {
                type: DataTypes.STRING(32)
            },
            petName: {
                type: DataTypes.STRING(32)
            }
        },
        { timestamps: false }
    );
    playerAccounts.Account.hasOne(AccountPet, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    AccountPet.belongsTo(playerAccounts.Account);
    return { AccountPet };
};