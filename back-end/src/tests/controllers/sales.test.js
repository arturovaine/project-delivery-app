const { expect } = require("chai");
const sinon = require("sinon");
const SalesController = require("../../api/controllers/ControllerSales");
const { User } = require("../../database/models");
const { Sale } = require("../../database/models");
const { SalesProducts } = require("../../database/models");

describe("SalesController", () => {
  describe("createSaleWithProducts", () => {
    before(() => {
      sinon.stub(User, "findOne").resolves({ id: 1 });
      sinon.stub(Sale, "create").resolves({ id: 1 });
      sinon.stub(SalesProducts, "create");
    });
    after(() => {
      User.findOne.restore();
      Sale.create.restore();
      SalesProducts.create.restore();
    });
    it("should create a sale with products", async () => {
      const request = {
        body: {
          customerEmail: "john@example.com",
          sellerId: 1,
          totalPrice: 100,
          deliveryAddress: "123 Main St",
          deliveryNumber: "12",
          products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
          ],
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(201);
          return response;
        },
        json: (data) => {
          expect(data).to.have.a.property("saleId");
          expect(data.saleId).to.equal(1);
        },
      };
      await SalesController.createSaleWithProducts(request, response);
    });
    it("should throw an error if user is not found", async () => {
      User.findOne.restore();
      sinon.stub(User, "findOne").throws(new Error("User not found"));
      const request = {
        body: {
          customerEmail: "john@example.com",
          sellerId: 1,
          totalPrice: 100,
          deliveryAddress: "123 Main St",
          deliveryNumber: "12",
          products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
          ],
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data).to.have.a.property("error");
          expect(data.error).to.equal("User not found");
        },
      };
      await SalesController.createSaleWithProducts(request, response);
    });
    it("should throw an error if sale is not created", async () => {
      User.findOne.restore();
      Sale.create.restore();
      sinon.stub(User, "findOne").resolves({ id: 1 });
      sinon.stub(Sale, "create").throws(new Error("Sale not created"));
      const request = {
        body: {
          customerEmail: "john@example.com",
          sellerId: 1,
          totalPrice: 100,
          deliveryAddress: "123 Main St",
          deliveryNumber: "12",
          products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
          ],
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data).to.have.a.property("error");
          expect(data.error).to.equal("Sale not created");
        },
      };
      await SalesController.createSaleWithProducts(request, response);
    });
    it("should throw an error if products are not created", async () => {
      User.findOne.restore();
      Sale.create.restore();
      SalesProducts.create.restore();
      sinon.stub(User, "findOne").resolves({ id: 1 });
      sinon.stub(Sale, "create").resolves({ id: 1 });
      sinon
        .stub(SalesProducts, "create")
        .throws(new Error("Products not created"));
      const request = {
        body: {
          customerEmail: "john@example.com",
          sellerId: 1,
          totalPrice: 100,
          deliveryAddress: "123 Main St",
          deliveryNumber: "12",
          products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
          ],
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data).to.have.a.property("error");
          expect(data.error).to.equal("Products not created");
        },
      };
      await SalesController.createSaleWithProducts(request, response);
    });
  });
  describe("findSaleAndProducts", () => {
    before(() => {
      sinon.stub(Sale, "findOne").resolves({ id: 1 });
      sinon.stub(SalesProducts, "findAll").resolves([{ id: 1 }]);
    });
    after(() => {
      Sale.findOne.restore();
      SalesProducts.findAll.restore();
    });
    it("should find a sale and its products", async () => {
      const request = {
        params: {
          id: 1,
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(200);
          return response;
        },
        json: (data) => {
          console.log(data);
        },
      };
      await SalesController.findSaleAndProducts(request, response);
    });
    it("should throw an error if sale is not found", async () => {
      Sale.findOne.restore();
      sinon.stub(Sale, "findOne").throws(new Error("Sale not found"));
      const request = {
        params: {
          id: 1,
        },
      };
      const response = {
        status: (code) => {
          expect(code).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data).to.have.a.property("error");
          expect(data.error).to.equal("Sale not found");
        },
      };
      await SalesController.findSaleAndProducts(request, response);
    });
  });
});
