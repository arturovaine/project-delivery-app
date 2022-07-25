const { expect } = require('chai');
const admin = require('../../api/routes/productRoutes');

describe('productRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
