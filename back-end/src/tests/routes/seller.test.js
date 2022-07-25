const { expect } = require('chai');
const admin = require('../../api/routes/sellerRoutes');

describe('sellerRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
