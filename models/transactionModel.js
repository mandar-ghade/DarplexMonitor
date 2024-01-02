module.exports = (sequelize, DataTypes, playerAccounts) => {
    const Transaction = sequelize.define(
        'transaction',
        {
            accountId: {
                type: DataTypes.INTEGER(11),
                references: {
                    model: playerAccounts.Account,
                    key: 'id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            },
            date: {
                type: DataTypes.BIGINT(20)
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            gems: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            coins: { 
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        }, { timestamps: false }
    );
    Transaction.removeAttribute('id');
    playerAccounts.Account.hasOne(Transaction, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Transaction.belongsTo(playerAccounts.Account);
    return { Transaction }
}