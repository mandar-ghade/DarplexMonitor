module.exports = (sequelize, DataTypes, playerAccounts) => {
    const Booster = sequelize.define('booster', {
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
        boosterGroup: {
            type: DataTypes.STRING(255)
        },
        activatorUUID: {
            type: DataTypes.STRING(255)
        },
        activatorName: {
            type: DataTypes.STRING(255)
        },
        startTime: {
            type: DataTypes.BIGINT(20)
        },
        duration: {
            type: DataTypes.INTEGER(11)
        }
    }, 
    {
        timestamps: false
    })

    playerAccounts.Account.hasOne(Booster, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Booster.belongsTo(playerAccounts.Account);
    return {
        Booster
    }
}