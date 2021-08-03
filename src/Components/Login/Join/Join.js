import { useRef, useState } from "react";
import "./Join.scss";

const depart = {
  융합기술대학: [
    "기계자동자항공공학부",
    "기계공학전공",
    "자동차공학전공",
    "항공기계설계전공",
    "전기공학전공",
    "전자공학과",
    "의료IT공학전공",
    "컴퓨터학부",
    "컴퓨터공학전공",
    "소프트웨어전공",
    "AI로봇공학과",
    "바이오메디컬융합학과",
  ],
  공과대학: [
    "건설환경도시교통공학부",
    "사회기반공학전공",
    "환경공학전공",
    "도시교통공학전공",
    "응용화학에너지공합부",
    "화공생물공학전공",
    "에너지소재공학전공",
    "나노화학소재공학전공",
    "산업경영안전공학부",
    "산업경영공학전공",
    "안전공학전공",
    "건축학부",
    "건축공학전공",
    "건축학전공",
    "디자인학부",
    "산업디자인전공",
    "커뮤니케이션디자인전공",
  ],
  인문사회대학: [
    "글로벌어문학부",
    "영어영문학전공",
    "비즈니스영어전공",
    "중국어전공",
    "한국어문학전공",
    "행정학부",
    "행정학전공",
    "행정정보학전공",
    "경영통상복지학부",
    "경영학전공",
    "융합경영전공",
    "국제통상전공",
    "사회복지학전공",
    "음악학과",
    "스포츠학부",
    "스포츠의학전공",
    "스포츠산업학전공",
    "항공서비스학과",
    "항공운항학과",
    "유아교육학과",
    "미디어컨텐츠학과",
  ],
};

const Join = ({ history }) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    department: "",
    club: "",
  });
  const { id, pw, name, email, department, club } = inputs;

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
    console.log({ inputs });
    const idReg = /\d{7}/;
    if (!idReg.test(id)) {
      alert("아이디가 잘못되었습니다.");
    }
  };

  // console.log(depart);

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
            maxLength="7"
            required
            className="input"
            placeholder="예) 1234567"
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
            required
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
            required
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
            required
            className="input"
            placeholder="예) hong@naver.com"
            value={email}
            onChange={onChange}
          />
          <label htmlFor="department" className="text">
            학과
          </label>
          <select
            name="department"
            id="department"
            className="input"
            required
            value={department}
            onChange={onChange}
          ></select>
          <label htmlFor="club" className="text">
            동아리
          </label>
          <select
            name="club"
            id="club"
            className="input"
            required
            value={club}
            onChange={onChange}
          ></select>
          <button type="submit" className="submitBtn">
            회원가입
          </button>
        </form>
        {/* <button onClick={() => history.push("/")}>돌아가기</button> */}
      </div>
    </div>
  );
};

export default Join;
