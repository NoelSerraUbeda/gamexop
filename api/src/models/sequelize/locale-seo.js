module.exports = function (sequelize, DataTypes) {
  const LocaleSeo = sequelize.define('LocaleSeo', {
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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    description: {
      type: DataTypes.STRING
    },
    redirection: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo redirection debe ser un valor booleano.');
          }
        }
      }
    },
    menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, 
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo menu debe ser un valor booleano.');
          }
        }
      }
    },
    changeFrequency: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.DECIMAL
    },
    sitemap: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo sitemap debe ser un valor booleano.');
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
    tableName: 'locale_seos',
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

  LocaleSeo.associate = function (models) {
    LocaleSeo.hasMany(models.CustomerTracking, { as: 'customerTracking', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.LocaleSeoSlugRedirect, { as: 'localeSeoSlugRedirect', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.LocaleSeoSlug, { as: 'localeSeoSlug', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.MenuItem, { as: 'menuItem', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.PageTracking, { as: 'pageTracking', foreignKey: 'localeSeoId' })
    
  }

  return LocaleSeo
}