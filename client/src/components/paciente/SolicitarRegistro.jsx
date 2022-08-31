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
      <div className="w-screen h-screen bg-[#171941] portrait:p-3">
        <div className="portrait:flex portrait:flex-col portrait:items-start bg-[#1f2251] portrait:p-2 portrait:shadow-2xl portrait:rounded-2xl portrait:gap-5">
          <select
            ref={doc_type}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          >
            <option value="" className="bg-transparent text-white">
              Tipo de documento:
            </option>
            <option value="C.C" className="bg-transparent text-white">
              C.C
            </option>
            <option value="Pasaporte" className="bg-transparent text-white">
              Pasaporte
            </option>
            <option
              value="Permiso especial de permanencia"
              className="bg-transparent text-white"
            >
              Permiso especial de permanencia
            </option>
          </select>
          <input
            type="number"
            placeholder="Numero de documento"
            ref={num_documento}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <input
            type="text"
            placeholder="Nombres"
            ref={name}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <input
            type="text"
            placeholder="Apellidos"
            ref={lastname}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <input
            type="number"
            placeholder="Edad"
            ref={age}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <select
            ref={gender}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          >
            <option value="" className="bg-transparent text-white">
              Genero
            </option>
            <option value="Masculino" className="bg-transparent text-white">
              Masculino
            </option>
            <option value="Femenino" className="bg-transparent text-white">
              Femenino
            </option>
            <option value="Otro" className="bg-transparent text-white">
              Otro
            </option>
          </select>
          <select
            ref={user_type}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          >
            <option value="" className="bg-transparent text-white">
              Tipo de usuario
            </option>
            <option value="paciente" className="bg-transparent text-white">
              paciente
            </option>
            <option value="empleado" className="bg-transparent text-white">
              empleado
            </option>
            <option
              value="administrador"
              className="bg-transparent text-white outline-none"
            >
              administrador
            </option>
          </select>
          <input
            type="email"
            placeholder="Email"
            ref={email}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <input
            type="password"
            placeholder="Contraseña"
            ref={password}
            className="bg-transparent text-white outline-none rounded-md border-slate-700 border-2 border-solid portrait:w-11/12"
          />
          <div ref={error} className="bg-transparent text-white"></div>
          <div className="portrait:w-full portrait:flex portrait:justify-center">
            <button
              onClick={guardar}
              className="bg-transparent text-white bg-[#2280f7] portrait:w-3/5 h-9 rounded-3xl hover:bg-[#2074e2]"
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
