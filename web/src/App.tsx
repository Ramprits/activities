import { ReactElement } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";
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
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/activities">
            <ActivityPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </HashRouter>
    </Router>
  );
};
export default App;
