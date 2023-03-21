
import "./header.css"

import React from "react";
export default function Header(){

    return (
      <div className="body">
        <header>
          <nav>
            <ul className="nav-bar">
              <li className="logo">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdZsikR7-h5kIAUERF-5xp_YPnATOSOTDnA&usqp=CAU"
                    alt="logo"
                  />
                </a>
              </li>
              <input type="checkbox" id="check" />
              <span className="menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>

                <label for="check" className="close-menu">
                  <i  className="fas fa-times"></i>
                </label>
              </span>
              <label for="check" className="open-menu">
                <i  className="fas fa-bars"></i>
              </label>
            </ul>
          </nav>
        </header>
      </div>
    );
}