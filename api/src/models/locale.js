module.exports = function (sequelize, DataTypes) {
    const Locale = sequelize.define('Locale', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      languageAlias: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena todos los campos.'
          }
        }
      },
      entity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena todos los campos.'
          }
        }
      },
      entityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena todos los campos.'
          }
        }
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena todos los campos.'
          }
        }
      },
      value: {
        type: DataTypes.TEXT,
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
      tableName: 'locales',
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
          name: 'locales_languageAlias_entity_entityId_key_index',
          using: 'BTREE',
          fields: [
            { name: 'languageAlias' },
            { name: 'entity' },
            { name: 'entityKey' },
            { name: 'key' }
          ]
        }
      ]
    })
  
    Locale.associate = function (models) {
      Locale.hasMany(models.CartDetail, { as: 'CartDetail', foreignKey: 'localeId' })
      Locale.hasMany(models.ReturnDetail, { as: 'ReturnDetail', foreignKey: 'localeId' })
      Locale.hasMany(models.SaleDetail, { as: 'SaleDetail', foreignKey: 'localeId' })
    }
  
    return Locale
  }