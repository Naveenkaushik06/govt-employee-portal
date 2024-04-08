// import React from "react";

import logo from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/Home.png";
import logo1 from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/Attendance.jpeg";
import logo2 from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/assessment1.png";
import logo3 from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/monitor_system.png";
import logo4 from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/report.png";
import logo5 from "/home/naveen/Desktop/govt-employee-portal/src/assets/img/user.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const obj = [
    { url: logo, name: "Home", path: "/" },
    { url: logo1, name: "Attendance", path: "/attendance" },
    { url: logo2, name: "Daily Assessment", path: "/dailyassessment" },
    { url: logo3, name: "Monitor System", path: "/monitorsystem" },
    { url: logo4, name: "Report", path: "/report" },
    { url: logo5, name: "User", path: "/user" },
  ];
  return (
    <div>
      <div className="flex-row">
        {obj.map((e, index) => (
          <div className="navbar" key={index}>
            <ul className="unol">
              <li>
                <NavLink to={e.path}>
                  <img src={e.url} alt={e.name} />
                  <div className="name">
                    <span>{e.name}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NavBar;
