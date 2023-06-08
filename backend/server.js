const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());

app.use(express.static("./静的ファイルのフォルダ"));
// app.use(bodyParser.json()); // JSONを解析するミドルウェアを追加
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("req", req);
//   res.send("返すもの");
// });

app.post("/", (req, res) => {
  const obj = req.body;
  //   console.log(req);
  console.log("obj", obj);
  console.log("textBody", obj.textBody);
  res.send("返すもの");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
