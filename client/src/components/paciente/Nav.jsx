import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex ">
        <h1>Vitaly's Now</h1>
        <div>
          <NavLink to="/login">Iniciar Sesion</NavLink>
          <NavLink to="/contactenos">Contactenos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
