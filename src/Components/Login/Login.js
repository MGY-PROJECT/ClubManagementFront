import axios from "axios";
import { useRef, useState } from "react";
import { store } from "../..";
import "./Login.scss";

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const inputPw = useRef(null);
  const eye = useRef(null);

  const onClickEye = () => {
    inputPw.current.type =
      inputPw.current.type === "password" ? "type" : "password";
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        id,
        pw,
      });
      if (res.data) {
        sessionStorage.setItem("user", res.data);
        store.dispatch({ type: "login" });
      } else {
        setId("");
        setPw("");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const idRegex = /\d{7}/;
    if (idRegex.test(id)) {
      login();
    }
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
        <h1>로그인</h1>
        <form className="login_form" onSubmit={onSubmit} autoComplete="off">
          <input
            type="text"
            className="id"
            placeholder="학번을 입력해주세요"
            autoFocus
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <div className="pw_wrapper">
            <input
              type="password"
              className="pw"
              placeholder="비밀번호를 입력해주세요"
              required
              ref={inputPw}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            ></input>
            <i className="fas fa-eye" ref={eye} onClick={onClickEye}></i>
          </div>
          <div className="find_join">
            <p onClick={() => history.push("/join")} className="p">
              회원가입
            </p>
            <p onClick={() => alert("제작중...")} className="p">
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
