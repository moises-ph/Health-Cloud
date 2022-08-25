import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (

    /*#39406E
    #1F233C*/ 
    <>
      <nav className="flex bg-gradient-to-r from-slate-900 to-slate-800 text-white justify-between">
        <h1 className="text-2xl pl-3">Vitaly's Now</h1>
        <div className="flex justify-evenly items-center w-3/4">
          <NavLink to="/login" className="after:scale-x-0 after:h-{5} after:w-full after:absolute after:bg-amber-50 after:left-0 after:bottom-0 after:origin-left after:transition-transform hover:after:scale-x-100">Iniciar Sesion</NavLink>
          <NavLink to="/contactenos">Contactenos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
        </div>

      </nav>
    </>
  );
}

export default Nav;
