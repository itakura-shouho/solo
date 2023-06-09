const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");

// chaiにchai-httpをインストールする
chai.use(chaiHttp);

//テストコード
describe("APItest", () => {
  it("should return status 200", (done) => {
    chai
      .request("http://localhost:8000")
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
