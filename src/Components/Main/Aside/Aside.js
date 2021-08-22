import "./Aside.scss";

const Aside = () => {
  return (
    <aside>
      <div className="campus_list">
        <div className="chungu">
          <button>
            충주 캠퍼스
            <span className="material_icons">
              <i class="fas fa-check"></i>
            </span>
          </button>
          <ul className="chungu_list">
            <li className="sport_li">체육</li>
            <li className="music_li">음악</li>
            <li className="volunteer_li">봉사</li>
            <li className="religion_li">종교</li>
            <li className="academic_li">학술</li>
            <li className="literature_li">문예</li>
          </ul>
        </div>
        <div className="jeungpyeong">
          <button>
            증평 캠퍼스
            <span className="material_icons">
              <i class="fas fa-check"></i>
            </span>
          </button>
          <ul className="jeungpyeong_list">
            <li className="sport_li">체육</li>
            <li className="voluteer_li">봉사</li>
            <li className="religion_li">종교</li>
          </ul>
        </div>
        <div className="Uiwang">
          <button>
            의왕 캠퍼스
            <span className="material_icons">
              <i class="fas fa-check"></i>
            </span>
          </button>
          <ul className="Uiwang_list">
            <li className="sport_li">체육</li>
            <li className="music_li">음악</li>
            <li className="academic_li">학술</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
