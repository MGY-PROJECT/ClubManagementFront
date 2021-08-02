import { useState } from "react";
import { store } from "../..";
import "./Login.scss";

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    // axios
    store.dispatch({ type: "login" });
    localStorage.setItem("id", id);
    console.log(store.getState());
    console.log(localStorage.getItem("id"));
  };

  return (
    <div className="login_page">
      <div className="background">
        <div className="pageDescription">
          <p>한국교통대학교</p>
          <p>중앙 동아리 사이트</p>
        </div>
      </div>
      <form className="login_form" onSubmit={onSubmit}>
        <div>
          <h1>로그인</h1>
          <input
            type="text"
            className="id"
            placeholder="학번"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            type="password"
            className="pw"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></input>
          <div>
            <button type="submit" className="loginBtn">
              로그인
            </button>
          </div>
          <p onClick={() => history.push("/find_pw")} className="p">
            비밀번호 찾기
          </p>
          <p onClick={() => history.push("/join")} className="p">
            회원가입
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
