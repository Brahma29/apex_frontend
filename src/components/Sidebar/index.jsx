import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Add Scenario",
    link: "/scenarios/add",
  },
  {
    name: "All Scenarios",
    link: "/scenarios",
  },
  {
    name: "Add Vehicle",
    link: "/vehicles/add",
  },
];

const Sidebar = () => {
  const navLinkClasses = ({ isActive }) => (isActive ? "link active" : "link");

  return (
    <div className="sidebar">
      {links.map((each, i) => (
        <NavLink key={i} className={navLinkClasses} to={each.link}>
          {each.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
