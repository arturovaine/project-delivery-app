const { expect } = require('chai');
const admin = require('../../api/routes/adminRoutes');

describe('adminRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
