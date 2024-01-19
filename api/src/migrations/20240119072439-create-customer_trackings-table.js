'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      fingerprint: {
        allowNull: false,
        type: Sequelize.STRING
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
      path: {
        allowNull: false,
        type: Sequelize.STRING
      },
      eventTime: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      eventName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      event: {
        allowNull: false,
        type: Sequelize.JSON
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_trackings')
  }
}
