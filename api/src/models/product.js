module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
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
          msg: 'Por favor, rellena el campo "name".'
        }
      }
    },
    featured: {
      type: DataTypes.BOOLEAN,
      validate: {
        isValidBoolean(value) {
          if (value !== undefined && typeof value !== 'boolean') {
            throw new Error('El campo featured debe ser un valor booleano.');
          }
        }
      }
    },
    visible: {
      type: DataTypes.BOOLEAN,
      validate: {
        isValidBoolean(value) {
          if (value !== undefined && typeof value !== 'boolean') {
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
    tableName: 'products',
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

  Product.associate = function (models) {
    Product.belongsToMany(models.ProductCategory, { through: models.ProductCategoryRelation, as: 'categories', foreignKey: 'productId' })

    Product.hasMany(models.CartDetail, { as: 'cartDetail', foreignKey: 'productId' })
    Product.hasMany(models.Price, { as: 'price', foreignKey: 'productId' })
    Product.hasMany(models.ReturnDetail, { as: 'returnDetail', foreignKey: 'productId' })
    Product.hasMany(models.SaleDetail, { as: 'saleDetails', foreignKey: 'productId' })
  }

  return Product
}