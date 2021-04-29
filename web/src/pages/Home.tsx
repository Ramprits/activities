/* eslint-disable react/jsx-key */
import React, { ReactElement } from "react";

import VerticalNav4 from "../components/vertical-navs/VerticalNav";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";

const HomePage = (): ReactElement => {
  return (
    <React.Fragment>
      <VerticalNav4
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120",
          },
          "brand-small": {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "32",
          },
          link1: "Dashboard",
          link2: "Product",
          link4: "Contact",
        }}
        bucketMain={[<Header key="header" />, <Footer key="footer" />]}
      />
    </React.Fragment>
  );
};
export default HomePage;
