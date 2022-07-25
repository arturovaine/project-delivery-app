const { expect } = require('chai');
const admin = require('../../api/routes/salesRoutes');

describe('salesRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
