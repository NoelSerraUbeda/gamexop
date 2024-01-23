module.exports = function (sequelize, DataTypes) {
  const CustomerTracking = sequelize.define('CustomerTracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
    },
    fingerprintId: {
      type: DataTypes.INTEGER,
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
    },
    localeSeoSlugId: {
      type: DataTypes.INTEGER,
    },
    eventTime: {
      type: DataTypes.DOUBLE
    },
    eventName: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    event: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'customer_tracking',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  CustomerTracking.associate = function (models) {

  }

  return CustomerTracking
}