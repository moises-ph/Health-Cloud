import React, { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function SolicitarRegistro() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const num_documento = useRef();
  const name = useRef();
  const lastname = useRef();
  const age = useRef();
  const gender = useRef();
  const email = useRef();
  const password = useRef();
  const user_type = useRef();
  const doc_type = useRef();
  const $ = (param) => {
    return param.current.value;
  };

  const ani = (message, icon) => {
    MySwal.fire({
      title: <p>{message}</p>,
      icon: icon,
    });
  };

  const RedireccionarLogin = () => {
    window.setTimeout(() => {
      navigate("/login", { replace: true });
      window.clearTimeout();
    }, 1000);
  };

  const ValidarRegistro = () => {
    if ($(num_documento).length < 7 || $(num_documento).length > 10) {
      ani(
        "Error numero de documento debe tener entre 7 y 10 caracteres",
        "error"
      );
    } else if ($(name).length < 3) {
      ani("Nombre no debe ser menor a 3 caracteres", "error");
    } else if ($(lastname).length < 3) {
      ani("Apellido no debe ser menor a 3 caracteres", "error");
    } else if ($(age) < 1 || $(age) > 120) {
      ani("Ingrese una edad real", "error");
    } else if ($(email).length < 8) {
      ani("Email no debe ser menor a 8 caracteres", "error");
    } else if ($(password).length < 6) {
      ani("Password no debe ser menor a 6 caracteres", "error");
    } else {
      solicitarRegistro(
        num_documento,
        name,
        lastname,
        age,
        gender,
        email,
        password,
        user_type,
        doc_type
      );
    }
  };
  const solicitarRegistro = (
    num_documento,
    name,
    lastname,
    age,
    gender,
    email,
    password,
    user_type,
    doc_type
  ) => {
    axios
      .post("/register", {
        num_documento: num_documento.current.value,
        name: name.current.value,
        lastname: lastname.current.value,
        age: age.current.value,
        gender: gender.current.value,
        email: email.current.value,
        password: password.current.value,
        user_type: user_type.current.value,
        doc_type: doc_type.current.value,
      })
      .then((res) => {
        ani("Usuario Registrado Exitosamente", "success");
        RedireccionarLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Nav />
      <div className="w-[100%] h-[120vh] flex justify-center bg-[#171941] portrait:p-3">
        <form className="portrait:flex portrait:flex-col portrait:items-center bg-[#1f2251] portrait:p-2 portrait:shadow-2xl portrait:rounded-2xl portrait:gap-2 portrait:w-[90%] mt-3 rounded-2xl flex flex-col items-center w-[40%] gap-4 mb-5">
          <h2 className="mt-11 text-slate-50 text-3xl">Registro</h2>
          <label
            htmlFor="Tipo de documento"
            className="text-slate-50 text-lg w-[80%] text-start"
          >
            Tipo de documento:
          </label>
          <select
            ref={doc_type}
            name="Tipo de documento"
            required
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option className="bg-[#1f2251] text-white "></option>
            <option value="C.C" className="bg-[#1f2251] text-white ">
              C.C
            </option>
            <option value="Pasaporte" className="bg-[#1f2251] text-white ">
              Pasaporte
            </option>
            <option
              value="Permiso especial de permanencia"
              className="bg-[#1f2251] text-white "
            >
              Permiso especial de permanencia
            </option>
          </select>
          <input
            type="number"
            placeholder="Numero de documento"
            required
            ref={num_documento}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="text"
            placeholder="Nombres"
            required
            pattern="[a-zA-Z]++"
            maxLength={20}
            ref={name}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="text"
            placeholder="Apellidos"
            pattern="[A-Za-z]++"
            maxLength={20}
            required
            ref={lastname}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="number"
            placeholder="Edad"
            required
            ref={age}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <label
            htmlFor="genero"
            className="text-slate-50 text-lg w-[80%] text-start"
          >
            Genero:
          </label>
          <select
            ref={gender}
            required
            name="genero"
            className="bg-[#1f2251] text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option className="bg-[#1f2251] text-white"></option>
            <option value="Masculino" className="bg-[#1f2251] text-white ">
              Masculino
            </option>
            <option value="Femenino" className="bg-[#1f2251] text-white ">
              Femenino
            </option>
            <option value="Otro" className="bg-[#1f2251] text-white ">
              Otro
            </option>
          </select>
          <label
            htmlFor="tipo_usuario"
            className="text-slate-50 text-lg w-[80%] text-start"
          >
            Tipo de usuario:
          </label>
          <select
            ref={user_type}
            required
            name="tipo_usuario"
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option className="bg-[#1f2251] text-white "></option>
            <option value="paciente" className="bg-[#1f2251] text-white ">
              paciente
            </option>
            <option value="empleado" className="bg-[#1f2251] text-white ">
              empleado
            </option>
            <option
              value="administrador"
              className="bg-[#1f2251] text-white  outline-none"
            >
              administrador
            </option>
          </select>
          <input
            type="email"
            placeholder="Email"
            required
            ref={email}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            ref={password}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          
          <div className="portrait:w-full portrait:flex portrait:justify-center w-full flex justify-center mb-6">
            <button
              onClick={ValidarRegistro}
              className="bg-transparent text-white bg-[#2280f7] portrait:w-3/5 h-9 rounded-3xl hover:bg-[#2074e2] w-[40%]"
            >
              Solicitar Registro
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SolicitarRegistro;
