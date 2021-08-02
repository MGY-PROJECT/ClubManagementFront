import { useState } from "react";
import { Link } from "react-router-dom";
import "./FindPw.scss";

const FindPw = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="formMail">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        ></input>
        <button type="submit">전송</button>
      </form>
      <p>이메일 확인 후 인증번호를 입력해주세요.</p>
      <Link to="/">
        <button>로그인 창으로 가기</button>
      </Link>
    </div>
  );
};

export default FindPw;
