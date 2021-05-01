import React, { ReactElement } from "react";
import VerticalNav4 from "../components/vertical-navs/VerticalNav";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";

const HomePage = (): ReactElement => {
  return (
    <React.Fragment>
      <VerticalNav4
        content={null}
        bucketMain={[<Header key="header" />, <Footer key="footer" />]}
      />
    </React.Fragment>
  );
};
export default HomePage;
