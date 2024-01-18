'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prices', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      taxId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      basePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      current: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
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
    await queryInterface.dropTable('prices')
  }
}
