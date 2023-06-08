const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);
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

app.post("/", async (req, res) => {
  const obj = req.body;
  console.log("obj", obj);
  console.log("textBody", obj.registTextBody);

  try {
    console.log("tryの中");
    await knex("articles").insert({
      title: obj.registTitle,
      textBody: obj.registTextBody,
      registDate: obj.registDate,
    });
    const result = await knex.select("*").from("articles");
    res.status(200).json(result);
  } catch (e) {
    console.error("Error", e);
    res.status(500);
  }
});

app.get("/", async (req, res) => {
  const db = await knex.select("*").from("articles");
  res.status(200).json(db);
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
