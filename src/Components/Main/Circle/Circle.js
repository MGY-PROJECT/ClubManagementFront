import ".Circle.scss";

const Circle = ({ circle_name, circle_img }) => {
  return (
    <div className="circle_wrapper">
      <div className="circle">
        <div className="circle_name">{circle_name}</div>
        <div className="circle_img" style="z-index: -1;">
          <img src={circle_img} alt={circle_name} />
        </div>
      </div>
    </div>
  );
};

export default Circle;
