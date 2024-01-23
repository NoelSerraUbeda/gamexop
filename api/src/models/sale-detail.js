module.exports = function (sequelize, DataTypes) {
  const SaleDetails = sequelize.define('SaleDetails', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    localeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceDiscountId: {
      type: DataTypes.INTEGER,
    },
    taxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    basePrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    taxPrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
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
    tableName: 'sale_details',
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
        name: 'sale_details_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' },
        ]
      },
      {
        name: 'sale_details_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' },
        ]
      },
      {
        name: 'sale_details_localeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeId' },
        ]
      },
      {
        name: 'sale_details_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' },
        ]
      },
      {
        name: 'sale_details_priceDiscountId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceDiscountId' },
        ]
      },
      {
        name: 'sale_details_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' },
        ]
      }
    ]
  })

  SaleDetails.associate = function (models) {
    SaleDetails.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' })
    SaleDetails.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
    SaleDetails.belongsTo(models.Locale, { as: 'locale', foreignKey: 'localetId' })
    SaleDetails.belongsTo(models.Price, { as: 'price', foreignKey: 'pricetId' })
    SaleDetails.belongsTo(models.PriceDiscount, { as: 'priceDiscount', foreignKey: 'priceDiscountId' })
    SaleDetails.belongsTo(models.Tax, { as: 'tax', foreignKey: 'taxtId' })
  }

  return SaleDetails
}