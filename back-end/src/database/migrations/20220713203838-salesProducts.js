'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('salesProducts', { 
      sale_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'sales'
          },
          key: 'id',
        }
      },
      product_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id',
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};
