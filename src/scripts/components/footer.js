import React, { useEffect } from "react";
import "../../styles/footer.scss";
//icons
import logo from "../../../images/logo.svg";
import face from "../../../images/icon-facebook.svg";
import yout from "../../../images/icon-youtube.svg";
import twit from "../../../images/icon-twitter.svg";
import pint from "../../../images/icon-pinterest.svg";
import insta from "../../../images/icon-instagram.svg";

const FrontendMent = function () {
  return (
    <div id="front-ment">
      <p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .
        <br />
        Coded by Esdras Silva.
      </p>
    </div>
  );
};

const Footer = () => {
  useEffect(() => {
    document.querySelector("#form").addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("oi meu chapa");
    });
  }, []);

  return (
    <footer className="attribution">
      <form id="form">
        <input
          type="email"
          name="update-email"
          id="update-email"
          placeholder="updates in your inbox..."
          required
        />
        <button type="submit">GO</button>
      </form>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Carrers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div>
        <a href="#">
          <svg>
            <use href={`${face}#facebook`} />
          </svg>
        </a>
        <a href="#">
          <svg>
            <use href={`${yout}#youtube`} />
          </svg>
        </a>
        <a href="#">
          <svg>
            <use href={`${twit}#twitter`} />
          </svg>
        </a>
        <a href="#">
          <svg>
            <use href={`${pint}#pinterest`} />
          </svg>
        </a>
        <a href="#">
          <svg>
            <use href={`${insta}#instagram`} />
          </svg>
        </a>
      </div>
      <svg id="logo">
        <use href={`${logo}#logo`} />
      </svg>
      <p id="copy">&copy; Copyright 2020. All Rights Reserved</p>
      <FrontendMent />
    </footer>
  );
};

export default Footer;
