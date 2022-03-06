import React from "react";
import { render } from "react-dom";
import "../styles/index.scss";
import "core-js/stable";

//components
import Header from "./components/header";
import Illustration from "./components/illustration";
import Introduction from "./components/introduction";
import AboutManage from "./components/diff-section";
import Slider from "./components/cases";
import SimpSec from "./components/simplify-section";
import Footer from "./components/footer";

const App = function () {
  return (
    <>
      <Header />
      <Illustration />
      <Introduction />
      <AboutManage />
      <Slider />
      <SimpSec />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector("#root"));
