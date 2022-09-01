import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Login() {

  const num_documento = useRef();
  const password = useRef();

  const logVerify = (e)=>{
    e.preventDefault();
    let num = num_documento.current.value;
    let pass = password.current.value;

    axios.post('/login', {num_documento: num, password: pass})
      .then((res) => console.log(res)).catch(err => console.log(err));
  }; 

  return (
    <>
      <form onSubmit={logVerify}>
        <input
          type="text"
          className="outline-none bg-slate-500 mx-3 rounded-md text-slate-50"
          min="3"
          max="10"
          ref={num_documento}
          required
        />
        <input
          type="password"
          className="outline-none bg-slate-500 rounded-md text-slate-50"
          min="6"
          ref={password}
          required
        />
        <button>realizar</button>
      </form>
      <NavLink to="/">Ir al home</NavLink>
    </>
  );
}

export default Login;
