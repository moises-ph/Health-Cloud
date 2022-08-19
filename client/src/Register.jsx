import React from "react";

function Regiter() {
  return (
    <>
      <form action="post">
        <h2 className=" text-xl">Resgitro</h2>
        <select>
          <option value="">Tipo de documento</option>
          <option value="C.C">C.C</option>
          <option value="Carnet diplomatico">Carnet diplomatico</option>
          <option value="Certificado nacido vivo">
            Certificado nacido vivo
          </option>
          <option value="Cedula de extranjeria">Cedula de extranjeria</option>
          <option value="Nit">Nit</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Permiso especial de permanencia">
            Permiso especial de permanencia
          </option>
          <option value="Permiso de proteccion personal">
            Permiso de proteccion personal
          </option>
          <option value="Registro civil">Registro civil</option>
          <option value="Salvoconducto">Salvoconducto</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
        </select>
        <input type="number" placeholder="Numero de documento" />
        <input type="text" placeholder="Nombres" />
        <input type="text" placeholder="Apellidos" />
        <input type="number" placeholder="Edad" />
        <select>
          <option value="">Genero</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <select>
          <option value="">Tipo de usuario</option>
          <option value="Empleado">Empleado</option>
          <option value="Paciente">Paciente</option>
          <option value="Adminitrador">Administrador</option>
        </select>
      </form>
    </>
  );
}

export default Regiter;
