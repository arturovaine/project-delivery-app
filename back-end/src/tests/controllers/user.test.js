const { expect } = require("chai");
const sinon = require("sinon");
const UserController = require("../../api/controllers/ControllerUsers");
const md5 = require("md5");
const { User } = require("../../database/models");

describe("UserController", () => {
  describe("create", () => {
    before(() => {
      sinon.stub(User, "create").resolves({
        id: 1,
        name: "John",
        email: "johndoe@example.com",
        password: md5("123456"),
        role: "admin",
      });
      sinon.stub(User, "findOne");
    });
    after(() => {
      User.create.restore();
      User.findOne.restore();
    });
    it("should register a user", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(201);
          return response;
        },
        json: (data) => {
          expect(data).to.have.property("name");
          expect(data).to.have.property("email");
          expect(data).to.have.property("role");
          expect(data).to.have.property("token");
        },
        end: () => {},
      };
      await UserController.createUser(
        {
          body: {
            name: "John",
            email: "johndoe@example.com",
            password: "123456",
          },
        },
        response
      );
    });
    it("should send an error if user already exists", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").resolves({
        id: 1,
        name: "John",
        email: "johndoe@example.com",
        password: md5("123456"),
        role: "admin",
      });
      const response = {
        status: (status) => {
          expect(status).to.equal(409);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("User already exists");
        },
      };
      await UserController.createUser(
        {
          body: {
            name: "John",
            email: "johndoe@example.com",
            password: "123456",
          },
        },
        response
      );
    });
    it("should send an error if something went wrong", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").rejects(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
        },
      };
      await UserController.createUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
          },
        },
        response
      );
    });
  });

  describe("login", () => {
    before(() => {
      sinon.stub(User, "findOne").resolves({
        id: 1,
        name: "John",
        email: "johndoe@example.com",
        password: md5("123456"),
        role: "admin",
      });
    });
    after(() => {
      User.findOne.restore();
    });
    it("should login a user", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(200);
          return {
            json: response.json,
            end: response.end,
          };
        },
        json: (data) => {
          expect(data).to.have.property("name");
          expect(data).to.have.property("email");
          expect(data).to.have.property("role");
          expect(data).to.have.property("token");
        },
        end: () => {},
      };
      await UserController.login(
        {
          body: {
            email: "johndoe@example.com",
            password: "123456",
          },
        },
        response
      );
    });
    it("should send an error if user does not exist", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").resolves(null);
      const response = {
        status: (status) => {
          expect(status).to.equal(404);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("User does not exist");
        },
      };
      await UserController.login(
        {
          body: {
            email: "johndoe@example.com",
            password: "123456",
          },
        },
        response
      );
    });
    it("should send an error if something went wrong", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").rejects(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
        },
      };
      await UserController.login(
        {
          body: {
            email: "john@example.com",
            password: "123456",
          },
        },
        response
      );
    });
  });

  describe("getAllUsers", () => {
    before(() => {
      sinon.stub(User, "findAll").resolves([
        {
          id: 1,
          name: "John",
          email: "john@example.com",
          password: md5("123456"),
          role: "admin",
        },
        {
          id: 2,
          name: "Jane",
          email: "jane@example.com",
          password: md5("123456"),
          role: "user",
        },
      ]);
    });
    after(() => {
      User.findAll.restore();
    });
    it("should get all users", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(200);
          return {
            json: response.json,
            end: response.end,
          };
        },
        json: (data) => {
          expect(data).to.be.an("array");
          expect(data[0]).to.have.property("name");
          expect(data[0]).to.have.property("email");
          expect(data[0]).to.have.property("role");
          expect(data[0]).to.have.property("id");
          expect(data[1]).to.have.property("name");
          expect(data[1]).to.have.property("email");
          expect(data[1]).to.have.property("role");
          expect(data[1]).to.have.property("id");
        },
      };
      await UserController.getAllUsers({}, response);
    });
    it("should send an error if no users exist", async () => {
      User.findAll.restore();
      sinon.stub(User, "findAll").resolves(null);
      const response = {
        status: (status) => {
          expect(status).to.equal(404);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("User do not exist");
        },
      };
      await UserController.getAllUsers({}, response);
    });

    it("should send an error if something went wrong", async () => {
      User.findAll.restore();
      sinon.stub(User, "findAll").rejects(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("Error to find registered users");
        },
      };
      await UserController.getAllUsers({}, response);
    });
  });

  describe("adminCreateUser", () => {
    before(() => {
      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(User, "create").resolves({
        id: 1,
        name: "John",
        email: "john@example.com",
        password: md5("123456"),
        role: "admin",
      });
    });
    after(() => {
      User.findOne.restore();
      User.create.restore();
    });
    it("should create a user", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(201);
          return {
            json: response.json,
            end: response.end,
          };
        },
        json: (data) => {
          expect(data).to.have.property("name");
          expect(data).to.have.property("email");
          expect(data).to.have.property("role");
          expect(data).to.have.property("token");
        },
      };
      await UserController.adminCreateUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
            role: "admin",
          },
        },
        response
      );
    });
    it("should send an error if user already exists", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").resolves({
        id: 1,
        name: "John",
        email: "john@example.com",
        password: md5("123456"),
        role: "admin",
      });
      const response = {
        status: (status) => {
          expect(status).to.equal(409);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("User already exists");
        },
      };
      await UserController.adminCreateUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
            role: "admin",
          },
        },
        response
      );
    });
    it("should send an error if something went wrong", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").rejects(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
        },
      };
      await UserController.adminCreateUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
            role: "admin",
          },
        },
        response
      );
    });
  });

  describe("adminDeleteUser", () => {
    before(() => {
      sinon.stub(User, "findOne").resolves({
        id: 1,
        name: "John",
        email: "john@example.com",
        password: md5("123456"),
        role: "admin",
      });
      sinon.stub(User, "destroy").resolves(1);
    });
    after(() => {
      User.findOne.restore();
      User.destroy.restore();
    });
    it("should delete a user", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(201);
          return {
            json: response.json,
            end: response.end,
          };
        },
        json: (data) => {
          expect(data).to.have.property("name");
          expect(data).to.have.property("email");
        },
      };
      await UserController.adminDeleteUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
          },
        },
        response
      );
    });
    it("should send an error if user does not exist", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").resolves(null);
      const response = {
        status: (status) => {
          expect(status).to.equal(409);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("User does not exist");
        },
      };
      await UserController.adminDeleteUser(
        {
          body: {
            name: "John",
            email: "john@exaple.com",
            password: "123456",
          },
        },
        response
      );
    });

    it("should send an error if something went wrong", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").rejects(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
        },
      };
      await UserController.adminDeleteUser(
        {
          body: {
            name: "John",
            email: "john@example.com",
            password: "123456",
          },
        },
        response
      );
    });
  });
});
