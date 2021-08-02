import "./Join.scss";

const Join = ({ history }) => {
  window.onload = () => {
    const pwBox = document.querySelector("#pw");
    const eye = document.querySelector(".fa-eye");
    eye.addEventListener("click", () => {
      pwBox.classList.toggle("active");
      if (pwBox.classList.contains("active")) {
        pwBox.type = "text";
      } else {
        pwBox.type = "password";
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입");
  };

  return (
    <div className="joinPage">
      <header>
        <img
          src="https://www.ut.ac.kr/images/common/svisual_bg_7.jpg"
          alt="headerimg"
        />
        {/* <strong>Korea National University of Transportation</strong> */}
      </header>
      <div className="insertJoin">
        <h2 className="joinText">회원가입</h2>
        <form className="joinForm" onSubmit={onSubmit} autoComplete="off">
          <label htmlFor="id" className="text">
            아이디
          </label>
          <input
            type="text"
            id="id"
            autoFocus
            minLength="7"
            placeholder="학번을 입력해주세요. 예)1234567"
          />
          <p className="exception_id">아이디는 학번을 입력해주세요.</p>
          <label htmlFor="pw" className="text">
            비밀번호
          </label>
          <input
            type="password"
            id="pw"
            placeholder="비밀번호를 입력해주세요"
          />
          <i className="fas fa-eye"></i>
          <label htmlFor="name" className="text">
            이름
          </label>
          <input
            type="text"
            id="name"
            minLength="7"
            placeholder="이름을 입력해주세요."
          />
          <label htmlFor="email" className="text">
            이메일
          </label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요. ex)hong@naver.com"
          />
          <button onClick={() => history.push("/")}>돌아가기</button>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
