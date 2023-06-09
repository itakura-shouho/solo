const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");

// chaiにchai-httpをインストールする
chai.use(chaiHttp);

//テストコード
describe("APItest", () => {
  it("should return status 200", (done) => {
    chai
      // .request("http://localhost:8000")
      .request("https://itakura-shouho-solo.onrender.com")
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
