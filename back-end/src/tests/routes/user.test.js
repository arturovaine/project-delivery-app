const { expect } = require('chai');
const admin = require('../../api/routes/userRoutes');

describe('userRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
