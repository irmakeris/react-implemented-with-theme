import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import "./componentCSSs/nav.css";

function Navi() {
  return (
    <nav className="navbar py-3 fixed-top" id="navbar">
      <div className="row">
        <div className="col-xs-3">
          <Link className="navtex ml-2" to="/">
            <FontAwesomeIcon
              icon={faImdb}
              size="3x"
              className="mr-2 text-light"
            />
          </Link>
        </div>
        <div className="col-xs-7">
          <h3 className="ml-2 mt-1">
            <Link className="navtext text-light font-weight-bold" to="/">
              IMDB MOVIE SEARCH
            </Link>
          </h3>
        </div>
      </div>
    </nav>
  );
}

export default Navi;
