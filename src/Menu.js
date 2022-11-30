import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Pag 1 </Link>{" "}
          </li>
          <li>
            <Link to="/usuarios">Clientes</Link>
          </li>
          <li>
            <Link to="/sobre"> Pag 3 </Link>
          </li>
          <li>
            <Link to="/pessoas"> Pessoas </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
