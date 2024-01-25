module.exports = function (sequelize, DataTypes) {
  const ApiTracking = sequelize.define('ApiTracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
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
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    isRobot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo isRobot debe ser un valor booleano.');
          }
        }
      }
    },
    resource: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    resourceElement: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    httpCode: {
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
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    startTime: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isFloat: {
          msg: 'El campo startTime debe ser un número de punto flotante.'
        }
      }
    },
    endTime: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        },
        isFloat: {
          msg: 'El campo endTime debe ser un número de punto flotante.'
        }
      }
    },
    latencyMS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
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
    tableName: 'api_trackings',
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
        name: 'api_trackings_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' },
        ]
      },
      {
        name: 'api_trackings_fingerprintId_fk',
        using: 'BTREE',
        fields: [
          { name: 'fingerprintId' },
        ]
      }
    ]
  })

  ApiTracking.associate = function (models) {
    ApiTracking.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
    ApiTracking.belongsTo(models.Fingerprint, { as: 'fingerprint', foreignKey: 'fingerprintId' })
  }

  return ApiTracking
}