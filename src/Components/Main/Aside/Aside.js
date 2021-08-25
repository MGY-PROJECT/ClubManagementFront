import "./Aside.scss";

const Aside = () => {
  return (
    <aside>
      <div className="campus_list">
        <div className="campus">
          <button>
            충주 캠퍼스
            <i className="fas fa-check"></i>
          </button>
          <ul>
            <li>체육</li>
            <li>음악</li>
            <li>봉사</li>
            <li>종교</li>
            <li>학술</li>
            <li>문예</li>
          </ul>
        </div>
        <div className="campus">
          <button>
            증평 캠퍼스
            <i className="fas fa-check"></i>
          </button>
          <ul>
            <li>체육</li>
            <li>음악</li>
            <li>봉사</li>
            <li>종교</li>
            <li>학술</li>
            <li>문예</li>
          </ul>
        </div>
        <div className="campus">
          <button>
            의왕 캠퍼스
            <i className="fas fa-check"></i>
          </button>
          <ul>
            <li>체육</li>
            <li>음악</li>
            <li>봉사</li>
            <li>종교</li>
            <li>학술</li>
            <li>문예</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
