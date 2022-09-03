import React, { useRef } from "react";
import axios from "axios";
import Nav from "./Nav";

function SolicitarRegistro() {
  const error = useRef();
  const num_documento = useRef();
  const name = useRef();
  const lastname = useRef();
  const age = useRef();
  const gender = useRef();
  const email = useRef();
  const password = useRef();
  const user_type = useRef();
  const doc_type = useRef();

  const guardar = () => {
    if (
      num_documento.current.value === "" ||
      name.current.value === "" ||
      lastname.current.value === "" ||
      age.current.value === "" ||
      gender.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      user_type.current.value === "" ||
      doc_type.current.value === ""
    ) {
      error.current.innerHTML = "Todos los campos tienen que estar llenos";
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
        console.log(res);
      })
      .then(() => {
        error.current.innerHTML = "usuario registrado exitosamente";
      })
      .catch((err) => {
        console.log(err);
        error.current.innerHTML = "datos ya existentes ";
      });
  };
  return (
    <>
      <Nav />
      <div className="w-[100%] h-[120vh] flex justify-center bg-[#171941] portrait:p-3">
        <div className="portrait:flex portrait:flex-col portrait:items-start bg-[#1f2251] portrait:p-2 portrait:shadow-2xl portrait:rounded-2xl portrait:gap-2 portrait:w-[90%] mt-3 rounded-2xl flex flex-col items-center w-[40%] gap-4 mb-5">
          <h2 className="mt-11 text-slate-50 text-3xl">Registro</h2>
          <select
            ref={doc_type}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option value="" className="bg-[#1f2251] text-white ">
              Tipo de documento:
            </option>
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
            ref={num_documento}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="text"
            placeholder="Nombres"
            ref={name}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="text"
            placeholder="Apellidos"
            ref={lastname}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="number"
            placeholder="Edad"
            ref={age}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <select
            ref={gender}
            className="bg-[#1f2251] text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option value="" className="bg-[#1f2251] text-white">
              Genero
            </option>
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
          <select
            ref={user_type}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          >
            <option value="" className="bg-[#1f2251] text-white ">
              Tipo de usuario
            </option>
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
            ref={email}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            ref={password}
            className="bg-transparent text-white outline-none rounded-md border-2 border-solid portrait:w-full w-[80%] h-[15%] mt-6 transition duration-500 ease-in-out border-slate-700 focus:border-slate-500"
          />
          <div ref={error} className="bg-transparent text-white"></div>
          <div className="portrait:w-full portrait:flex portrait:justify-center w-full flex justify-center mb-6">
            <button
              onClick={guardar}
              className="bg-transparent text-white bg-[#2280f7] portrait:w-3/5 h-9 rounded-3xl hover:bg-[#2074e2] w-[40%]"
            >
              Solicitar Registro
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolicitarRegistro;