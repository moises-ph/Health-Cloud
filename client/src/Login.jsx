import React, { useContext, useRef, useEffect } from "react";
import Nav from './components/paciente/Nav';
import { NavLink } from "react-router-dom";
import { Context, context_login } from "./context/Context";
import axios from "axios";

function Login() {
  const {token, setToken}= useContext(context_login);
  const num_documento = useRef();
  const password = useRef();

  const saveToken = (savedtoken) => {
    setToken(savedtoken);
  }

  const logVerify = (e)=>{
    e.preventDefault();
    let num = num_documento.current.value;
    let pass = password.current.value;

    axios.post('http://localhost:4000/login', {num_documento: num, password: pass})
      .then((res) => {
       saveToken(res.data.token);
      })
      .catch(err => console.log(err));
  }; 

  return (
    <Context>
      <Nav />
      <div className="flex justify-center h-screen w-full bg-[#171941]">
      <form onSubmit={logVerify} className="mt-6 portrait:flex portrait:flex-col h-2/4 w-2/5 bg-[#1f2251] flex flex-col justify-evenly items-center gap-8 rounded-xl">
        <h2 className=" text-slate-50 text-3xl">Login</h2>
        <input
          type="text"
          className="outline-none h-[15%] w-[80%] bg-transparent text-white border-2 border-solid rounded-md transition duration-500 ease-in-out  border-slate-700 focus:border-slate-500" 
          min="3"
          max="10"
          ref={num_documento}
          placeholder="Numero De Documento"
          required
        />
        <input
          type="password"
          className="outline-none h-[15%] w-[80%] bg-transparent text-white border-2 border-solid rounded-md transition duration-500 ease-in-out  border-slate-700 focus:border-slate-500"
          min="6"
          ref={password}
          required
          placeholder="Contraseña"
        />
        <button onClick={logVerify} className="h-[15%] w-[40%] bg-[#2280f7] rounded-3xl text-white hover:bg-[#2074e2]" >realizar</button>
      </form>
      </div>
    </Context>
  );
}

export default Login;
