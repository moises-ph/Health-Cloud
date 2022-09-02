import React, { useContext, useRef } from "react";
import Nav from './components/paciente/Nav';
import { NavLink } from "react-router-dom";
import { Context } from "./context/Context";
import axios from "axios";

function Login() {
  const num_documento = useRef();
  const password = useRef();

  const logVerify = (e)=>{
    e.preventDefault();
    let num = num_documento.current.value;
    let pass = password.current.value;

    axios.post('http://localhost:4000/login', {num_documento: num, password: pass})
      .then((res) => console.log(res)).catch(err => console.log(err));
  }; 

  return (
    <>
      <Nav />
      <form onSubmit={logVerify} className="mt-6 portrait:flex portrait:flex-col">
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
        <button onClick={logVerify}>realizar</button>
      </form>
      <NavLink to="/">Ir al home</NavLink>
    </>
  );
}

export default Login;
