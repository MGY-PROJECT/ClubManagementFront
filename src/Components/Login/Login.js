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
        <p>
          한국교통대학교
          <br /> 중앙 동아리 사이트
        </p>
      </div>
      <div className="login">
        <form className="login_form" onSubmit={onSubmit} autoComplete="off">
          <h1>로그인</h1>
          <input
            type="text"
            className="id"
            placeholder="학번을 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            type="password"
            className="pw"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></input>
          <div className="find_join">
            <p onClick={() => history.push("/join")} className="p">
              회원가입
            </p>
            <p onClick={() => history.push("/find_pw")} className="p">
              비밀번호 찾기
            </p>
          </div>
          <button type="submit" className="loginBtn">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
