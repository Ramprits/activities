import React, { ReactElement } from "react";

import SignIn from "../components/sign-in/SignIn";

const Login = (): ReactElement => {
  return (
    <React.Fragment>
      <SignIn content={null} />
    </React.Fragment>
  );
};

export default Login;
