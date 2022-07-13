'use strict';
import db from '.';
// import { Sequelize, DataTypes } from 'sequelize';

export const SalesProductsModel = (sequelize, DataTypes) => {

  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'sales'
        },
        key: 'id',
      },
      field: 'sale_id',
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'products'
        },
        key: 'id',
      },
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize: db,
    modelName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sale, {
      foreignKey: 'saleId',
      as: 'sale',
    });
    SalesProducts.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
    });
    
  }

  return SalesProducts;
}

 