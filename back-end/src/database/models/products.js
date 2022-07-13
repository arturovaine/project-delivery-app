'use strict';
import db from '.';
// import { Sequelize, DataTypes } from 'sequelize';

export const ProductModel = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
      field: 'url_image',
    }
  }, {
    sequelize: db,
    modelName: 'products',
    timestamps: false,
    underscored: true,
  });

  return Product;
}

 