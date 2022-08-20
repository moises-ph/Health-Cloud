import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <form>
        <input
          type="text"
          className="outline-none bg-slate-500 mx-3 rounded-md text-slate-50"
          min="3"
        />
        <input
          type="password"
          className="outline-none bg-slate-500 rounded-md text-slate-50"
          min="8"
        />
        <button>realizar</button>
      </form>
      <NavLink to="/">Ir al home</NavLink>
    </>
  );
}

export default Login;
