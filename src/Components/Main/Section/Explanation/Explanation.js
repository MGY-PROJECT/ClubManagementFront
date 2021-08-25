import "./Explanation.scss";

const Explanation = () => {
  return (
    <div className="explanation">
      <div className="enrollment block">
        <i className="fas fa-user"></i>
        <div className="text">
          <h2>동아리 등록</h2>
          <div className="sub">
            총 동아리 연합회에서 동아리 등록 신청서를 교부받아 총 동아리
            연합회에 등록
          </div>
          <div className="sub">
            등록 서류 : 동아리 등록 신청서, 회원명부, 회칙, 사업계획서,
            발기취기문, 동아리서약서, 타 동아리 대표자 10인 이상의 추진서,
            회원의 입회원서 사본
          </div>
        </div>
      </div>
      <div className="call block">
        <i className="fas fa-phone"></i>
        <div className="text">
          <h2>연락처</h2>
          <b>동아리 연합회 사무실</b> TEL : 043-841-5550, 5551
        </div>
      </div>
    </div>
  );
};

export default Explanation;
