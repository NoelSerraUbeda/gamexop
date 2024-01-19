'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menu_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'menus',
          key: 'id'
        }
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      localeSeoSlugId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      parent: {
        type: Sequelize.INTEGER
      },
      customUrl: {
        type: Sequelize.STRING
      },
      private: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      orden: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.addIndex('menu_items', ['menuId'], {
      name: 'menu_items_menuId_fk'
    })

    await queryInterface.addIndex('menu_items', ['localeSeoId'], {
      name: 'menu_items_localeSeoId_fk'
    })

    await queryInterface.addIndex('menu_items', ['localeSeoSlugId'], {
      name: 'menu_items_localeSeoSlugId_fk'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menu_items')
  }
}
