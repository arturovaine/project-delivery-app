module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product', {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      url_image: {
        type: DataTypes.STRING,
        field: 'urlImage'
      }
    },
    { timestamps: false },
  );

  return Product;
};
