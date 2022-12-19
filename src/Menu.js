import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import imgLogo from "./img/logo.png";


export default function Menu() {
  return (
    <header class="header" role="banner">
    <div class="container">
      <nav><ul>
      <li>
            <Link to="/">
              <img src={imgLogo} alt="Farejador" className="logo" />{" "}
            </Link>{" "}
          </li>

          <li>
            <Link to="/sobre"> Sobre </Link>
          </li>
          <li>
            <Link to="/pessoas"> Entrar </Link>
          </li>
        </ul></nav>
    </div>
  </header>
  );
}
