import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import "./Main.scss";
import Section from "./Section/Section";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Aside />
      <Section />
    </div>
  );
};

export default Main;
