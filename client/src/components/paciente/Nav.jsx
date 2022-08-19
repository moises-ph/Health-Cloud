import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <h1>Vitaly's Now</h1>
        <div>  
          <NavLink to="/login">Iniciar Sesion</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
