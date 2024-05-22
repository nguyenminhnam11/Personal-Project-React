import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import clock from "../../assets/images/clock.png";
import stopwatch from "../../assets/images/stopwatch.png";
import timers from "../../assets/images/timers.png";
import alarm from "../../assets/images/alarm.png";

function Navbar(props) {
  const styleLink = {
    textDecoration: "none",
  };

  return (
    <div className="navbar">
      <ul className="list-menu">
        <Link to={"/"} style={styleLink}>
          <li>
            <img src={clock} alt="icon-app" />
            <p>Clock</p>
          </li>
        </Link>
        <Link to={"/alarm"} style={styleLink}>
          <li>
            <img src={alarm} alt="icon-app" />
            <p>Alarm</p>
          </li>
        </Link>
        <Link to={"/stopwatch"} style={styleLink}>
          <li>
            <img src={stopwatch} alt="icon-app" />
            <p>Stopwatch</p>
          </li>
        </Link>
        <Link to={"/timers"} style={styleLink}>
          <li>
            <img src={timers} alt="icon-app" />
            <p>Timers</p>
          </li>
        </Link>
        
      </ul>
    </div>
  );
}

export default Navbar;
