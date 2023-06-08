export default function Header(props) {
  const { setState } = props;

  const changeMode = (e) => {
    console.log(e.currentTarget.value);
    setState(e.currentTarget.value);
  };

  return (
    <header>
      <div>ブログのタイトル</div>
      <button className="btn_list" onClick={changeMode} value="articleList">
        閲覧画面
      </button>
      <button className="btn_post" onClick={changeMode} value="postArticle">
        投稿画面
      </button>
    </header>
  );
}
