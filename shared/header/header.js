import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styles } from "./header.css";

export const Header = ({ children }) => {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="/shared/Images/logo.png"
            alt="game icon logo"
          />
        </Link>

        <div className="title">
          <Link to="/">
            <h1>GamesGeek</h1>
          </Link>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
