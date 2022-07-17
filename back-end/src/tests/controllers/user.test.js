const { expect } = require("chai");
const sinon = require("sinon");
const UserController = require("../../api/controllers/ControllerUsers");
const CustomErrors = require("../../api/errors/customErrors");
const UserService = require("../../api/services/ServiceUsers");

describe("UserController", () => {
  describe("create", () => {
    before(() => {
      sinon.stub(UserService, "create").resolves({
        id: 1,
        name: "John",
        email: "johndoe@example.com",
        password: "123456",
        role: "admin",
      });
      sinon.stub(UserService, "login").resolves({
        name: "John",
        email: "johndoe@example.com",
        role: "admin",
        token: "token",
      });
    });
    after(() => {
      UserService.create.restore();
      UserService.login.restore();
    });
    it("should register a user", async () => {
      const response = {
        status: (status) => {
          expect(status).to.equal(201);
          return {
            send: response.send,
            end: response.end,
          };
        },
        send: (data) => {
          expect(data).to.have.property("name");
          expect(data).to.have.property("email");
          expect(data).to.have.property("role");
          expect(data).to.have.property("id");
          expect(data).to.have.property("password");
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
      UserService.create.restore();
      sinon
        .stub(UserService, "create")
        .throws(new CustomErrors(400, "User already exists"));
      const response = {
        status: (status) => {
          expect(status).to.equal(400);
          return {
            send: response.send,
          };
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
      UserService.create.restore();
      sinon
        .stub(UserService, "create")
        .throws(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return {
            send: response.send,
          };
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
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
  });

  describe("login", () => {
    before(() => {
      sinon.stub(UserService, "login").resolves({
        name: "John",
        email: "johndoe@example.com",
        role: "admin",
        token: "token",
      });
    });
    after(() => {
      UserService.login.restore();
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
      UserService.login.restore();
      sinon
        .stub(UserService, "login")
        .throws(new CustomErrors(400, "User does not exist"));
      const response = {
        status: (status) => {
          expect(status).to.equal(400);
          return {
            send: response.send,
          };
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
      UserService.login.restore();
      sinon
        .stub(UserService, "login")
        .throws(new Error("Something went wrong"));
      const response = {
        status: (status) => {
          expect(status).to.equal(500);
          return {
            send: response.send,
          };
        },
        send: (data) => {
          expect(data.error).to.equal("Something went wrong");
        }
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
  });
});
