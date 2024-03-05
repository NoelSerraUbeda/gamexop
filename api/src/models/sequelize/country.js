module.exports = function (sequelize, DataTypes) {
    const Country = sequelize.define('Country', {
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
            msg: 'Por favor, rellena el campo "Nombre".'
          },
          is: {
            args: /^[a-z0-9\sáéíóúüñÁÉÍÓÚÜÑ]+$/i,
            msg: 'Por favor, rellena el campo "Nombre" con un nombre válido, sin caracteres especiales.'
          }
        }
      },
      iso2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena todos los campos.'
          }
        }   
      },
      iso3: {
        type: DataTypes.STRING,
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
              throw new Error('El campo debe ser un valor booleano.');
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
      tableName: 'countries',
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
  
    Country.associate = function (models) {
      Country.hasMany(models.City, { as: 'city', foreignKey: 'countryId' })
      Country.hasMany(models.Customer, { as: 'Customer', foreignKey: 'countryId' })
      Country.hasMany(models.DialCode, { as: 'dialCode', foreignKey: 'countryId' })
      Country.hasMany(models.Tax, { as: 'tax', foreignKey: 'countryId' })
    }
  
    return Country
  }