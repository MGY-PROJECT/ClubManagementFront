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
  보건생명대학: [
    "간호학과",
    "식품생명학부",
    "식품공학전공",
    "식품영양학전공",
    "생명공학전공",
    "물리치료학과",
    "응급구조학과",
    "유아특수교육학과",
    "IT응용융합학과",
  ],
  철도대학: [
    "철도경영.물류.데이터사이언스학부",
    "철도경영물류학전공",
    "데이터사이언스전공",
    "철도공학부",
    "철도운전시스템전공",
    "철도차량시스템전공",
    "철도인프라시스템공학전공",
    "철도전기전자전공",
  ],
};

const clubs = {
  충주: {
    체육: [
      "카카",
      "오투",
      "행콕",
      "퍼펙트",
      "위키드",
      "산악부",
      "열정",
      "스플릿",
      "국원검우회",
      "하이런",
      "best5",
      "보통사람들",
    ],
    음악: ["피날레", "바이탈싸인", "포세이돈", "소리담", "신문고", "식스라인"],
    봉사: ["폴리스", "Youth JC", "LEO", "KNUT해봉연합", "러빙프렌즈"],
    종교: ["CCC", "방주짓는사람들"],
    학술: ["에가오", "유니피스"],
    문예: ["사랑방극예술연구회", "셔터스네이크"],
  },
  증평: {
    체육: ["버저비터", "GO유도"],
    봉사: ["절주"],
    종교: ["PAX"],
  },
  의왕: {
    체육: ["스윙스"],
    음악: ["APEX"],
    학술: ["1067"],
  },
};

const Join = () => {
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
    // 비밀번호 영문 숫자 외 다른게 들어오지 않도록 regex
    // 년도 -> 나이 정규표현식을 써서
  };

  const college = (depart) => {
    const col = [];
    col.push(
      <option value="선택" key="default">
        선택
      </option>
    );
    for (const d of Object.keys(depart)) {
      col.push(
        <optgroup label={d} key={d}>
          {depart[d].map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
        </optgroup>
      );
    }
    return col;
  };

  const clubfnc = (clubs) => {
    const col = [];
    col.push(
      <option value="선택" key="default">
        선택
      </option>
    );
    for (const c of Object.keys(clubs)) {
      for (const cc of Object.keys(clubs[c])) {
        col.push(
          <optgroup label={`${c} - ${cc}`} key={`${c} - ${cc}`}>
            {clubs[c][cc].map((ccc) => (
              <option value={ccc} key={ccc}>
                {ccc}
              </option>
            ))}
          </optgroup>
        );
      }
    }
    return col;
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
          >
            {college(depart)}
          </select>
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
          >
            {clubfnc(clubs)}
          </select>
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
