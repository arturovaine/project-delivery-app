const { expect } = require('chai');
const admin = require('../../api/routes/ordersRoutes');

describe('ordersRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
