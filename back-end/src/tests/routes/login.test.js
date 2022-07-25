const { expect } = require('chai');
const admin = require('../../api/routes/loginRoutes');

describe('loginRoutes', () => {
  it('should be defined', () => {
    expect(admin).to.be.a('function');
  });
});
