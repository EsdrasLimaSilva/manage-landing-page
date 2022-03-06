import React, { useEffect } from "react";
import logo from "../../../images/logo.svg";
import hamb from "../../../images/icon-hamburger.svg";
import "../../styles/header.scss";

const Header = function () {
  function toggleMenu() {
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#cover-close-menu").classList.toggle("hidden");
    document.body.classList.toggle("over-hidden");
  }

  //show menu
  useEffect(() => {
    document.querySelector("#open-menu").addEventListener("click", () => {
      document.querySelector("#open-menu").style.display = "none";
      toggleMenu();
    });
  }, []);

  //hide menu
  useEffect(() => {
    document.querySelector("#close-menu-btn").addEventListener("click", () => {
      document.querySelector("#open-menu").style.display = "block";
      toggleMenu();
    });
    document
      .querySelector("#cover-close-menu")
      .addEventListener("click", () => {
        document.querySelector("#open-menu").style.display = "block";
        toggleMenu();
      });
  }, []);

  return (
    <header>
      <div id="cover-close-menu" className="hidden"></div>
      <svg id="logo">
        <use href={`${logo}#logo`} />
      </svg>
      <button id="open-menu">
        <svg>
          <use href={`${hamb}#hamburger`} />
        </svg>
      </button>
      <nav id="menu" className="hidden">
        <button id="close-menu-btn">x</button>
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Produt</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
