import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <header className="bg-orange-600 flex flex-row">
        <NavBar></NavBar>
      </header>

      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
