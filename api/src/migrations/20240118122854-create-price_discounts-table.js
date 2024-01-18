'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prices_discounts', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      priceId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      percentage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      multiplier: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      current: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      startsAt: {
        type: Sequelize.DATE
      },
      endsAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('prices_discounts')
  }
}
