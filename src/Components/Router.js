import { Route, Switch } from "react-router-dom";
import FindPw from "./Login/FindPW/FindPw";
import Join from "./Login/Join/Join";
import Login from "./Login/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/find_pw" component={FindPw} />
      <Route exact path="/join" component={Join} />
    </Switch>
  );
};

export default Router;
