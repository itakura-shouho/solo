import React, { useEffect } from "react";
import "./styles/ArticleList.css";

export default function ArticleList(props) {
  const { state, list, setList } = props;
  const URL = "https://itakura-shouho-solo.onrender.com";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createList = async () => {
    // await fetch("http://localhost:8000/")
    await fetch(URL + "/")
      .then((res) => res.json())
      .then((res) => {
        const newArray = res.map((obj) => {
          return (
            <div className="articleList" key={obj.id}>
              <div className="articleBlock" key={obj.id}>
                <div className="articleId">id: {obj.id}</div>
                <div className="articleTitle">内容: {obj.title}</div>
                <div className="articleDate">登録日時: {obj.registDate}</div>
              </div>
            </div>
          );
        });
        setList(newArray);
      });
  };

  useEffect(() => {
    createList();
  }, [createList, state]);

  return (
    <div className="articles">
      <div className="pageTitle">今は閲覧画面</div>
      <div className="listContainer">{list}</div>
    </div>
  );
}
