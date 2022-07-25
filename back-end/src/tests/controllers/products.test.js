const { expect } = require("chai");
const sinon = require("sinon");
const ControllerProduct = require('../../api/controllers/ControllerProducts');
const { Product } = require('../../database/models');

describe('ControllerProducts', () => {
  describe('allProducts', () => {
    before(() => {
      sinon.stub(Product, 'findAll').resolves([{ id: 1, name: 'Product 1' }]);
    })
    after(() => {
      Product.findAll.restore();
    });
    it('should return all products', async () => {
      const request = {};
      const response = {
        status: (code) => {
          expect(code).to.equal(200);
          return response;
        },
        json: (data) => {
          expect(data).to.be.an('array');
          expect(data).to.have.lengthOf(1);
          expect(data[0]).to.have.property('id');
          expect(data[0]).to.have.property('name');
        }
      };
      await ControllerProduct.allProducts(request, response);
    });
    it("should return an error if something went wrong", async () => {
      Product.findAll.rejects(new Error('Something went wrong'));
      const request = {};
      const response = {
        status: (code) => {
          expect(code).to.equal(500);
          return response;
        },
        send: (data) => {
          expect(data).to.be.an('object');
          expect(data).to.have.property('error');
          expect(data.error).to.equal('Products are unavailable');
        }
      };
      await ControllerProduct.allProducts(request, response);
    });
  });
});
