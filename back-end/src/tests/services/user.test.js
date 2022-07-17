const {expect} = require('chai');
const md5 = require('md5');
const sinon = require('sinon');
const UserService = require('../../api/services/ServiceUsers');
const { User } = require('../../database/models');

describe('UserService', () => {
  describe('create', () => {
    before(() => {
      sinon.stub(User, 'create').resolves({
        id: 1,
        name: 'John',
        email: 'johndoe@example.com',
        password: md5('123456'),
        role: 'admin',
      })
      sinon.stub(User, 'findOne');
    });
    after(() => {
      User.create.restore();
      User.findOne.restore();
    });
    it('should register a user', async () => {
      const user = await UserService.create('John', 'johndoe@example.com', '123456');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');
      expect(user).to.have.property('role');
      expect(user).to.have.property('id');
      expect(user).to.have.property('password');
    });
    it('should throw an error if user already exists', async () => {
      User.findOne.restore();
      sinon.stub(User, 'findOne').resolves({
        id: 1,
        name: 'John',
        email: 'johndoe@example.com',
        password: md5('123456'),
        role: 'admin',
      })
      try {
        await UserService.create('John', 'johndoe@example.com', '123456');
      } catch (error) {
        expect(error.message).to.equal('User already exists');
      }
    });
  });

  describe('login', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves({
        id: 1,
        name: 'John',
        email: 'johndoe@example.com',
        password: md5('123456'),
        role: 'admin',
      })
    });
    it('should login a user', async () => {
      const user = await UserService.login('johndoe@example', '123456');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');
      expect(user).to.have.property('role');
      expect(user).to.have.property('token');
    });
    it('should throw an error if user does not exist', async () => {
      User.findOne.restore();
      sinon.stub(User, 'findOne').resolves(null);
      try {
        await UserService.login('johndoe@example', '123456');
      } catch (error) {
        expect(error.message).to.equal('User does not exist');
      }
    });
  });
});
