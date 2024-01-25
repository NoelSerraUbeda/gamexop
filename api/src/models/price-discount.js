module.exports = function (sequelize, DataTypes) {
  const PriceDiscount = sequelize.define('PriceDiscount', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    priceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    percentage: {
      type: DataTypes.DECIMAL
    },
    multiplier: {
      type: DataTypes.DECIMAL
    },
    current: {
      type: DataTypes.BOOLEAN,
      validate: {
        isValidBoolean(value) {
          if (value !== undefined && typeof value !== 'boolean') {
            throw new Error('El campo current debe ser un valor booleano.');
          }
        }
      }
    },
    startsAt: {
      type: DataTypes.DATE
    },
    endsAt: {
      type: DataTypes.DATE
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
    tableName: 'price_discounts',
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
        name: 'price_discounts_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' },
        ]
      }
    ]
  })

  PriceDiscount.associate = function (models) {
    PriceDiscount.belongsTo(models.Price, { as: 'price', foreignKey: 'priceId' })

    PriceDiscount.hasMany(models.ReturnDetail, { as: 'returnDetail', foreignKey: 'priceDiscountId' })
    PriceDiscount.hasMany(models.SaleDetails, { as: 'saleDetails', foreignKey: 'priceDiscountId' })
    PriceDiscount.hasMany(models.CartDetail, { as: 'cartDetail', foreignKey: 'priceDiscountId' })
  }

  return PriceDiscount
}