import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <h2>ARTISAN SCHEDULER</h2>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/plumber">Plumber</Link>
          </li>
          <li>
            <Link to="/painter">Painter</Link>
          </li>
          <li>
            <Link to="/mason">Mason</Link>
          </li>
          <li>
            <Link to="/electrician">Electrician</Link>
          </li>
          <li>
            <Link to="/addartisan">Add Artisan</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
