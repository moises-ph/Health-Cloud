import React, { useRef } from "react";
import axios from "axios";

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
    fetch("http://localhost:4000/register", {
      method: "POST",
      body:{
        num_documento: Number(num_documento.current.value),
        name: name.current.value,
        lastname: lastname.current.value,
        age: age.current.value,
        gender: gender.current.value,
        email: email.current.value,
        password: password.current.value,
        user_type: user_type.current.value,
        doc_type: doc_type.current.value,
      },
    });
  };

  /*const solicitarRegistro = (
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
      .post(
        "register",
        {
          num_documento: num_documento.current.value,
          name: name.current.value,
          lastname: lastname.current.value,
          age: age.current.value,
          gender: gender.current.value,
          email: email.current.value,
          password: password.current.value,
          user_type: user_type.current.value,
          doc_type: doc_type.current.value,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };*/
  return (
    <>
      <select ref={doc_type}>
        <option value="">Tipo de documento:</option>
        <option value="C.C">C.C</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Permiso especial de permanencia">
          Permiso especial de permanencia
        </option>
      </select>
      <input
        type="number"
        placeholder="Numero de documento"
        ref={num_documento}
      />
      <input type="text" placeholder="Nombres" ref={name} />
      <input type="text" placeholder="Apellidos" ref={lastname} />
      <input type="number" placeholder="Edad" ref={age} />
      <select ref={gender}>
        <option value="">Genero</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>
      <select ref={user_type}>
        <option value="">Tipo de usuario</option>
        <option value="paciente">paciente</option>
        <option value="empleado">empleado</option>
        <option value="administrador">administrador</option>
      </select>
      <input type="email" placeholder="Email" ref={email} />
      <input type="password" placeholder="Contraseña" ref={password} />
      <div ref={error}></div>
      <button onClick={guardar}>Solicitar Registro</button>
    </>
  );
}

export default SolicitarRegistro;
