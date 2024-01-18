'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      localeId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      priceId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      priceDiscountId: {
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
      taxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      quantity: {
        allowNull: false,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_details')
  }
}
