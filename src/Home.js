import React from "react";
import { Outlet } from "react-router";
import "./style/App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen container ">
      <nav className="flex flex-row justify-between bg-gray-400 items-center px-32">
        <h2>Company</h2>

        <ul className="flex flex-row gap-4 h-20 items-center ">
          <li>
            <Link className=" text-xl" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>

      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
