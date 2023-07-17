module.exports = (sequelize, DataTypes, playerAccounts) => {
    const ShadowMute = sequelize.define('shadowmute', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: playerAccounts.Account,
                key: 'id'
            }
        },
        server: {
            type: DataTypes.STRING(255)
        },
        isShadowMuted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    }, {
        timestamps: false
    })
    playerAccounts.Account.hasOne(ShadowMute, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    ShadowMute.belongsTo(playerAccounts.Account);
    return {
        ShadowMute
    }
}