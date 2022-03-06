import React from "react";
import illus from "../../../images/illustration-intro.png";
import "../../styles/illustration.scss";

const Illustration = function () {
  return (
    <section id="illustration">
      <img src={illus} alt="illustration dashboard" />
    </section>
  );
};

export default Illustration;
