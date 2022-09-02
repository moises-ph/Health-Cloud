import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex bg-gradient-to-r w-[100%] from-slate-900 to-slate-800 text-white justify-between portrait:w-screen">
        <h1 className="text-2xl pl-3">Vitaly's Now</h1>
        <div className="flex justify-evenly items-center w-3/4 portrait:w-2/4">
          <NavLink to="/" className="">Home</NavLink> 
          <NavLink to="/login" className="portrait:hidden">Iniciar Sesion</NavLink>
          <NavLink to="/contactenos" className="portrait:hidden ">Contactenos</NavLink>
          <NavLink to="/nosotros" className="portrait:hidden ">Nosotros</NavLink>
          <NavLink to="/servicios" className="portrait:hidden ">Servicios</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
