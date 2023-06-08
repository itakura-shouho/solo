import { useForm } from "react-hook-form";

const defaultValues = {
  title: "",
  textBody: "",
};

export default function PostArticle() {
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
    const register = { registTitle, registTextBody, registDate };
    const body = JSON.stringify(register);
    fetch("http://localhost:8000/", { method, body })
      .then((res) => {
        if (res.status === 200) console.log(`${body}が登録できました！`);
      })
      .catch((res) => console.error(`${body}が登録できませんでした！`));

    reset(""); // フォームに入力した値をリセット
  };

  return (
    <>
      <div>今は投稿画面</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>タイトル:</label> */}
        <input
          {...register("title", {
            type: "text",
            maxLength: { value: 10, message: "10文字以内にしてください" },
            required: "タイトルは必須入力です",
          })}
          name="title"
          placeholder="タイトルを入力してください"
        ></input>
        <p>{errors.title?.message}</p> {/* エラー表示 */}
        <br></br>
        {/* <label>内容:</label> */}
        <input
          {...register("textBody", {
            type: "text",
            maxLength: { value: 300, message: "300文字以内にしてください" },
          })}
          name="textBody"
          placeholder="本文を入力してください"
        ></input>
        <p>{errors.body?.message}</p> {/* エラー表示 */}
        <input type="submit" />
      </form>
    </>
  );
}
