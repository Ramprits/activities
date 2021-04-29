import { ReactElement } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";

import IndexPage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import history from "./utils/history";
const App = (): ReactElement => {
  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <IndexPage />
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
