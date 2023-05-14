import Footer from "@comp/FooterSection/Footer";
import React from "react";
import Navbar from "../components/Navigation/Navbar";

const Layout2 = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout2;
