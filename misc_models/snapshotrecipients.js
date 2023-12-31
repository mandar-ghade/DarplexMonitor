const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snapshotrecipients', {
    messageId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'snapshotmessages',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'accounts',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }, {
    sequelize,
    tableName: 'snapshotrecipients',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "messageId" },
          { name: "recipientId" },
        ]
      },
      {
        name: "reportMessageRecipients_accounts_id_fk",
        using: "BTREE",
        fields: [
          { name: "recipientId" },
        ]
      },
    ]
  });
};
