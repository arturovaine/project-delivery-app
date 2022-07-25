const { expect } = require('chai');
const admin = require('../../api/routes/customerRoutes');

describe('customerRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
