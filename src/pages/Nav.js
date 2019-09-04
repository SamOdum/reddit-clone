import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/r">Home</Link>
        </li>
        <li>
          <Link to="/UserPage">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
