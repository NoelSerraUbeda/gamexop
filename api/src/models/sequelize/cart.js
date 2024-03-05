module.exports = function (sequelize, DataTypes) {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isUUID: {
          msg: 'El campo no cumple las reglas de formato'
        }
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    fingerprintId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'El campo order debe ser un número entero.'
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
    tableName: 'carts',
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
      },
      {
        name: 'cart_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' },
        ]
      },
      {
        name: 'cart_fingerprintId_fk',
        using: 'BTREE',
        fields: [
          { name: 'fingerprintId' },
        ]
      }
    ]
  })

  Cart.associate = function (models) {
    Cart.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
    Cart.belongsTo(models.Fingerprint, { as: 'fingerprint', foreignKey: 'fingerprintId' })

    Cart.belongsToMany(models.Product, { through: models.CartDetail, as: 'products', foreignKey: 'cartId' })

    Cart.hasMany(models.CartDetail, { as: 'cartDetail', foreignKey: 'cartId' })
    Cart.hasMany(models.SaleError, { as: 'saleError', foreignKey: 'cartId' })

    Cart.hasOne(models.Sale, { as: 'sale', foreignKey: 'cartId' })
  }

  return Cart
}