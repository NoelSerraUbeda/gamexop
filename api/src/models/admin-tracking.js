module.exports = function (sequelize, DataTypes) {
  const AdminTracking = sequelize.define('AdminTracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
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
        },
        isInt: {
          msg: 'El campo order debe ser un número entero.'
        }
      }
    },
    action: {
      type: DataTypes.STRING,
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
    tableName: 'admin_trackings',
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
        name: 'admin_trackings_userId_fk',
        using: 'BTREE',
        fields: [
          { name: 'userId' },
        ]
      },
      {
        name: 'admin_trackings_entity_entityId_index',
        using: 'BTREE',
        fields: [
          { name: 'entity' },
          { name: 'entityId' },
        ]
      }
    ]
  })

  AdminTracking.associate = function (models) {
    AdminTracking.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  }

  return AdminTracking
}