import axios from "axios";
import { useRef, useState } from "react";
import "./Join.scss";

const depart = [
  "기계자동자항공공학부",
  "기계공학전공",
  "자동차공학전공",
  "항공기계설계전공",
  "전자전기공학부",
  "전기공학전공",
  "전자공학과",
  "컴퓨터학부",
  "컴퓨터공학전공",
  "소프트웨어전공",
  "의료IT공학전공",
  "AI로봇공학과",
  "바이오메디컬융합학과",
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
  "간호학과",
  "식품생명학부",
  "식품공학전공",
  "식품영양학전공",
  "생명공학전공",
  "물리치료학과",
  "응급구조학과",
  "유아특수교육학과",
  "IT응용융합학과",
  "철도경영.물류.데이터사이언스학부",
  "철도경영물류학전공",
  "데이터사이언스전공",
  "철도공학부",
  "철도운전시스템전공",
  "철도차량시스템전공",
  "철도인프라시스템공학전공",
  "철도전기전자전공",
  "스마트전기에너지공학과",
  "건설환경융합공학과",
  "안전융합공학과",
  "스포츠복지학과",
  "스마트철도교통공학과",
  "복지경영학과",
  "교양학부",
  "자유전공학부",
  "창의융합학부",
];

const Join = ({ history }) => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    department: "",
    // circle: "",
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

  const college = (depart) => {
    const col = [];
    col.push(
      <option value="default" key="default" defaultValue>
        선택
      </option>
    );
    depart.map((d) =>
      col.push(
        <option value={depart.indexOf(d)} key={d}>
          {d}
        </option>
      )
    );
    return col;
  };

  const join = async () => {
    console.log(inputs);
    // try {
    //   await axios.post("http://localhost:5000/join", {
    //     inputs,
    //   });
    //   history.push("/login");
    // } catch (e) {
    //   console.error(e);
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const idReg = /\d{7}/;
    // const nameReg = /^[가-힣]+$/;
    // if (!idReg.test(id)) {
    //   alert("아이디가 잘못되었습니다.");
    //   return;
    // }
    // if (!nameReg.test(name)) {
    //   alert("이름이 잘못되었습니다.");
    //   return;
    // }
    // if (!department || department === "선택") {
    //   alert("학과를 선택해주세요.");
    //   return;
    // }

    // 비밀번호 영문 숫자 외 다른게 들어오지 않도록 regex
    // 년도 -> 나이 정규표현식을 써서
    join();
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
            maxLength="7"
            // required
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
            // required
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
            // required
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
            // required
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
            // required
            value={department}
            onChange={onChange}
          >
            {college(depart)}
          </select>
          <button type="submit" className="submitBtn">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
