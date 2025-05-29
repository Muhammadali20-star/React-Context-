import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css"

const Header = () => {
  
  return (
    <header className="p-6 bg-blue-950 text-white">
      <div className="container mx-auto flex justify-between">
      <Link className={"header-link"} to={"/"}>MyApp</Link>
      <nav className="flex gap-8">
      <NavLink className={"header-link"} to={"/"}>Home</NavLink>
      <NavLink className={"header-link"} to={"/about"}>Heart</NavLink>
      </nav>
      </div>
    </header>
  );
};

export default React.memo(Header)
