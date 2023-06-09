import { useForm } from "react-hook-form";
import "./styles/PostArticle.css";

const defaultValues = {
  title: "",
  textBody: "",
};

export default function PostArticle(props) {
  const { setState } = props;
  const URL="https://itakura-shouho-solo.onrender.com"
  // 初期化
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  // フォーム送信ボタンを押された時の処理
  const onSubmit = (data) => {
    console.log(data);
    const registTitle = data.title;
    const registTextBody = data.textBody;
    const registDate = new Date();
    const method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };
    const register = { registTitle, registTextBody, registDate };
    const body = JSON.stringify(register);
    console.log(body);
    // fetch("http://localhost:8000/", { method, headers, body })
    fetch(URL + "/", { method, headers, body })
      .then((res) => {
        if (res.status === 200) console.log(`${body}が登録できました！`);
      })
      .catch((res) => console.error(`${body}が登録できませんでした！`));

    reset(""); // フォームに入力した値をリセット
    setState("articleList");
  };

  return (
    <>
      <div className="pageTitle">今は投稿画面</div>
      <form className="postForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", {
            type: "text",
            maxLength: { value: 10, message: "10文字以内にしてください" },
            required: "タイトルは必須入力です",
          })}
          name="title"
          placeholder="タイトルを入力してください"
          className="inputField"
        />
        <p className="errorMessage">{errors.title?.message}</p>
        <br />
        <input
          {...register("textBody", {
            type: "text",
            maxLength: { value: 300, message: "300文字以内にしてください" },
          })}
          name="textBody"
          placeholder="本文を入力してください"
          className="inputField"
        />
        <p className="errorMessage">{errors.textBody?.message}</p>
        <input type="submit" className="submitButton" value="投稿する" />
      </form>
    </>
  );
}
