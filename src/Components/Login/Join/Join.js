import { useRef, useState } from "react";
import "./Join.scss";

const Join = ({ history }) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    department: "",
  });
  const { id, pw, name, email, department } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const inputPw = useRef(null);
  const eye = useRef(null);

  const onClickEye = () => {
    inputPw.current.type =
      inputPw.current.type === "password" ? "type" : "password";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입");
  };

  return (
    <div className="joinPage">
      <div className="insertJoin">
        <h2 className="joinText">회원가입</h2>
        <form className="joinForm" onSubmit={onSubmit} autoComplete="off">
          <label htmlFor="id" className="text">
            학번
          </label>
          <input
            type="text"
            name="id"
            id="id"
            autoFocus
            minLength="7"
            className="input"
            placeholder="예)1234567"
            value={id}
            onChange={onChange}
          />

          <label htmlFor="pw" className="text">
            비밀번호
          </label>
          <input
            type="password"
            name="pw"
            ref={inputPw}
            id="pw"
            className="input"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={onChange}
          />
          <i className="fas fa-eye" ref={eye} onClick={onClickEye}></i>
          <label htmlFor="name" className="text">
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={onChange}
          />
          <label htmlFor="email" className="text">
            이메일
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="예)hong@naver.com"
            value={email}
            onChange={onChange}
          />
          <label htmlFor="department" className="text">
            학과
          </label>
          <input
            type="text"
            name="department"
            id="department"
            className="input"
            placeholder="예)소프트웨어학과"
            value={department}
            onChange={onChange}
          />

          <button type="submit">회원가입</button>
        </form>
        <button onClick={() => history.push("/")}>돌아가기</button>
      </div>
    </div>
  );
};

export default Join;
