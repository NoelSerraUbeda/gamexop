module.exports = function (sequelize, DataTypes) {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo visible debe ser un valor booleano.');
          }
        }
      }
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
    tableName: 'payment_methods',
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

  PaymentMethod.associate = function (models) {
    PaymentMethod.belongsToMany(models.Product, { through: models.SaleDetail, as: 'products', foreignKey: 'paymentMethodId' })
    
    PaymentMethod.hasMany(models.ReturnError, { as: 'returnError', foreignKey: 'paymentMethodId' })
    PaymentMethod.hasMany(models.Return, { as: 'return', foreignKey: 'paymentMethodId' })
    PaymentMethod.hasMany(models.SaleError, { as: 'saleError', foreignKey: 'paymentMethodId' })
    PaymentMethod.hasMany(models.Sale, { as: 'sale', foreignKey: 'paymentMethodId' })
  }

  return PaymentMethod
}