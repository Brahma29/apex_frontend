import React from "react";
import "./home.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
