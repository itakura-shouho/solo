import React, { useState } from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import PostArticle from "./PostArticle";
import Footer from "./Footer";
import "./styles/App.css";

export function App() {
  const [state, setState] = useState("articleList");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Header className="App-header" state={state} setState={setState} />

      {state === "articleList" ? (
        <ArticleList
          className="App-articleList"
          state={state}
          setState={setState}
          list={list}
          setList={setList}
        />
      ) : state === "articleDetail" ? (
        <articleDetail className="App-articleDateil" />
      ) : (
        <PostArticle className="App-postArticle" setState={setState} />
      )}

      <Footer className="App-footer" />
    </div>
  );
}

export default App;
