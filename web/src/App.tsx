import { ReactElement } from "react";
import { Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import history from "./utils/history";

import IndexPage from "./pages/Home";
import LoginPage from "./pages/Login";
import ActivityPage from "./pages/Activities";
import RegisterPage from "./pages/Register";

const App = (): ReactElement => {
  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/home" component={IndexPage}></Route>
          <Route exact path="/activities" component={ActivityPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </HashRouter>
    </Router>
  );
};
export default App;
