const { expect } = require("chai");
const sinon = require("sinon");
const ControllerSeller = require("../../api/controllers/ControllerSeller");
const { User } = require("../../database/models");

describe("ControllerSeller", () => {
  describe("findAllSellers", () => {
    before(()=>{
      sinon.stub(User, "findAll").resolves([{
        id: 1,
        name: "John",
        email: "john@example.com",
      }]);
    });
    after(()=>{
      User.findAll.restore();
    });
    it("should return all sellers", async () => {
      const res = {
        status: (code) => {
          expect(code).to.equal(200);
          return res;
        },
        json: (data) => {
          expect(data).to.deep.equal([{
            id: 1,
            name: "John",
            email: "john@example.com",
          }]);
        },
      };
      await ControllerSeller.findAllSellers({}, res);
    });
    it('should return an error if something went wrong', async () => {
      User.findAll.restore();
      sinon.stub(User, "findAll").rejects(new Error("Something went wrong"));
      const res = {
        status: (code) => {
          expect(code).to.equal(500);
          return res;
        },
        send: (data) => {
          expect(data).to.deep.equal({ error: "Something went wrong with seller list" });
        }
      };
      await ControllerSeller.findAllSellers({}, res);
    });
  });
});
