module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true
        },
        uuid: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        name: {
          type: DataTypes.STRING(40),
          allowNull: true
        },
        gems: {
          type: DataTypes.INTEGER(11),
          allowNull: true,
        },
        coins: {
          type: DataTypes.INTEGER(11),
        },
        lastLogin: {
          type: DataTypes.STRING,
          allowNull: true
        },
        totalPlayTime: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
    const AccountRank = sequelize.define('accountrank', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11)
        },
        rankIdentifier: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        primaryGroup: {
            type: DataTypes.INTEGER(1),
            defaultValue: 1,
            allowNull: true
        }
    });
    const AccountPunishment = sequelize.define('accountpunishment', {
        id: {
            type: DataTypes.INTEGER(11),
            primary: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11)
        },
        category: {
            type: DataTypes.STRING(255)
        },
        sentence: {
            type: DataTypes.STRING(255)
        },
        reason: {
            type: DataTypes.STRING(255)
        },
        time: {
            type: DataTypes.DATE
        },
        duration: {
            type: DataTypes.DOUBLE
        },
        admin: {
            type: DataTypes.STRING(255)
        },
        severity: {
            type: DataTypes.INTEGER(11)
        },
        Removed: {
            type: DataTypes.INTEGER(1),
            defaultValue: 0,
            allowNull: false
        },
        RemovedReason: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        RemovedAdmin: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    });
    return {
        Account,
        AccountRank,
        AccountPunishment
    }
}