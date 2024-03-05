module.exports = function (sequelize, DataTypes) {
  const CartDetail = sequelize.define('CartDetail', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    localeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    priceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    priceDiscountId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    taxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    basePrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    taxPrice: {
      type: DataTypes.DECIMAL(6, 2)
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
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
    tableName: 'cart_details',
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
        name: 'cart_details_cartId_fk',
        using: 'BTREE',
        fields: [
          { name: 'cartId' },
        ]
      },
      {
        name: 'cart_details_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' },
        ]
      },
      {
        name: 'cart_details_localeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeId' },
        ]
      },
      {
        name: 'cart_details_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' },
        ]
      },
      {
        name: 'cart_details_priceDiscountId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceDiscount' },
        ]
      },
      {
        name: 'cart_details_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' },
        ]
      },
    ]
  })

  CartDetail.associate = function (models) {
    CartDetail.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' })
    CartDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
    CartDetail.belongsTo(models.Locale, { as: 'locale', foreignKey: 'localeId' })
    CartDetail.belongsTo(models.Price, { as: 'price', foreignKey: 'priceId' })
    CartDetail.belongsTo(models.PriceDiscount, { as: 'priceDiscount', foreignKey: 'priceDiscountId' })
    CartDetail.belongsTo(models.Tax, { as: 'tax', foreignKey: 'taxId' })
  }

  return CartDetail
}