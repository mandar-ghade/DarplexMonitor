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
      }, 
      {
        timestamps: false
    }
    );
    const AccountRank = sequelize.define('accountrank', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: Account,
                key: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        },
        rankIdentifier: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        primaryGroup: {
            type: DataTypes.INTEGER(1),
            defaultValue: 1,
            allowNull: true
        }, 
    }, {
        timestamps: false
    });
    const AccountPunishment = sequelize.define('accountpunishment', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: Account,
                key: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
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
    }, {
        timestamps: false
    });
    const CustomBuild = sequelize.define('custombuild', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: Account,
                key: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        },
        Name: {
            type: DataTypes.STRING(255)
        },
        Active: {
            type: DataTypes.INTEGER(1)
        },
        CustomBuildNumber: {
            type: DataTypes.INTEGER(11)
        },
        PvpClass: {
            type: DataTypes.STRING(255)
        },
        SwordSkill: {
            type: DataTypes.STRING(255)
        },
        SwordSkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        AxeSkill: {
            type: DataTypes.STRING(255)
        },
        AxeSkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        BowSkill: {
            type: DataTypes.STRING(255)
        },
        BowSkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        ClassPassiveASkill: {
            type: DataTypes.STRING(255)
        },
        ClassPassiveASkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        ClassPassiveBSkill: {
            type: DataTypes.STRING(255)
        },
        ClassPassiveBSkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        GlobalPassiveSkill: {
            type: DataTypes.STRING(255)
        },
        GlobalPassiveSkillLevel: {
            type: DataTypes.INTEGER(11)
        },
        SkillTokens: {
            type: DataTypes.INTEGER(11)
        },
        ItemTokens: {
            type: DataTypes.INTEGER(11)
        }
    },
    {
        timestamps: false
    });
    const CustomBuildSlot = sequelize.define('custombuildslot', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        accountId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: Account,
                key: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        },
        BuildName: {
            type: DataTypes.STRING(255)
        },
        PvpClass: {
            type: DataTypes.STRING(255)
        },
        SlotId: {
            type: DataTypes.INTEGER(11)
        },
        Name: {
            type: DataTypes.STRING(255),
            defaultValue: ""
        },
        Material: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        Amount: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        }
    },
    {
        timestamps: false
    });
    Account.hasOne(AccountRank, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Account.hasOne(AccountPunishment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Account.hasOne(CustomBuild, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Account.hasOne(CustomBuildSlot, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    AccountRank.belongsTo(Account);
    AccountPunishment.belongsTo(Account);
    CustomBuild.belongsTo(Account);
    CustomBuildSlot.belongsTo(Account);
    return {
        Account,
        AccountRank,
        AccountPunishment,
        CustomBuild,
        CustomBuildSlot
    }
}