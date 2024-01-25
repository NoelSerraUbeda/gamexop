module.exports = function (sequelize, DataTypes) {
    const Menu = sequelize.define('Menu', {
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
      tableName: 'menus',
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
  
    Menu.associate = function (models) {
      Menu.belongsToMany(models.LocaleSeo, { through: models.MenuItem, as: 'localeSeos', foreignKey: 'menuId' })
      Menu.belongsToMany(models.LocaleSeoSlug, { through: models.MenuItem, as: 'localeSeoSlugs', foreignKey: 'menuId' })
      
      Menu.hasMany(models.MenuItem, { as: 'menu', foreignKey: 'menuItemId' })
    }
  
    return Menu
  }