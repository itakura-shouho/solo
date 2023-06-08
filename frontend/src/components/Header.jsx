import "./styles/Header.css";

export default function Header(props) {
  const { setState } = props;

  const changeMode = (e) => {
    console.log(e.currentTarget.value);
    setState(e.currentTarget.value);
  };

  return (
    <header className="blogHeader">
      <div className="blogTitle">ブログのタイトル</div>
      <button
        className="headerButton btnList"
        onClick={changeMode}
        value="articleList"
      >
        閲覧画面
      </button>
      <button
        className="headerButton btnPost"
        onClick={changeMode}
        value="postArticle"
      >
        投稿画面
      </button>
    </header>
  );
}
