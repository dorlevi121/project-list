import React from "react";
import navbarStyle from "../navbar/navbar.module.scss";
import { NavLink } from "react-router-dom";

export default function SignOutLinks() {
  return (
    <div className={navbarStyle.Links}>
     <ul>
          <li>
            <NavLink to="/signup">sign up</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        </ul>
    </div>
  );
}
