module.exports = function (sequelize, DataTypes) {
  const MenuItem = sequelize.define('MenuItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena todos los campos.'
        }
      }
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
    },
    localeSeoSlugId: {
      type: DataTypes.INTEGER,
    },
    parent: {
      type: DataTypes.INTEGER
    },
    name: {
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
    customUrl: {
      type: DataTypes.STRING
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isValidBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('El campo private debe ser un valor booleano.');
          }
        }
      }
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
    tableName: 'menu_items',
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
        name: 'menu_items_menuId_fk',
        using: 'BTREE',
        fields: [
          { name: 'menuId' },
        ]
      },
      {
        name: 'menu_items_localeSeoId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoId' },
        ]
      },
      {
        name: 'menu_items_localeSeoSlugId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoSlugId' },
        ]
      },
    ]
  })

  MenuItem.associate = function (models) {
    MenuItem.belongsTo(models.Menu, { as: 'menu', foreignKey: 'menuId' })
    MenuItem.belongsTo(models.LocaleSeo, { as: 'localeSeo', foreignKey: 'localeSeoId' })
    MenuItem.belongsTo(models.LocaleSeoSlug, { as: 'localeSeoSlug', foreignKey: 'localeSeoSlugId' })
  }

  return MenuItem
}