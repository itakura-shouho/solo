const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const environment = process.env.NODE_ENV || "development";
const environment = process.env.DATABASE_URL ? "production" : "development";
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.static("./静的ファイルのフォルダ"));
app.use(express.json());

//投稿記事をpsqlへINSERTする
app.post("/", async (req, res) => {
  const obj = req.body;
  console.log("obj", obj);
  // console.log("textBody", obj.registTextBody);

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

//投稿記事の一覧用API
app.get("/", async (req, res) => {
  const db = await knex.select("*").from("articles");
  res.status(200).json(db);
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
