import React from "react";
import "./root.css";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
