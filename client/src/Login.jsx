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
      <div className="flex justify-center h-screen w-screen bg-[#171941]">
      <form onSubmit={logVerify} className="mt-6 portrait:flex portrait:flex-col h-2/5 w-2/5 bg-[#1f2251] flex flex-col justify-center items-center gap-8 rounded-xl">
        <input
          type="text"
          className="outline-none h-[15%] w-[80%] bg-transparent text-white border-2 border-solid rounded-md border-slate-700" 
          min="3"
          max="10"
          ref={num_documento}
          placeholder="Numero De Documento"
          required
        />
        <input
          type="password"
          className="outline-none h-[15%] w-[80%] bg-transparent text-white border-2 border-solid rounded-md border-slate-700"
          min="6"
          ref={password}
          required
          placeholder="Contraseña"
        />
        <button onClick={logVerify} className="h-[15%] w-[40%] bg-[#2280f7] rounded-3xl text-white hover:bg-[#2074e2]" >realizar</button>
      </form>
      </div>
    </>
  );
}

export default Login;
