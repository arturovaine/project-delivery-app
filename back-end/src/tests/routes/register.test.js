const { expect } = require('chai');
const admin = require('../../api/routes/registerRoutes');

describe('registerRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
