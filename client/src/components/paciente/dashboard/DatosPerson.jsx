import React from "react";

function DatosPerson() {
  return (
    <>
      <h2>Datos Personales</h2>
      <form action="post">
        <h2 className=" text-xl">Resgitro</h2>
        <select>
          <option value="">Tipo de documento</option>
          <option value="C.C">C.C</option>
          <option value="Carnet diplomatico">Carnet diplomatico</option>
          <option value="Certificado de nacimiento">
            Certificado de nacimiento
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
        <label>Ingrese su altura en centimetros</label>
        <input type="number" placeholder="altura" />
        <label>Ingrese su peso en kilogramos</label>
        <input type="number" placeholder="Peso" />
        <label>Ingrese el departamento</label>
        <input type="text" placeholder="Departamento" />
        <label>Ingrese ciudad de residencia</label>
        <input type="text" placeholder="ciudad" />
        <label>Ingrese su Direccion</label>
        <input type="text" placeholder="Direccion" />
        <label>Ingrese su estado civil</label>
        <select>
          <option value="">Estado Civil</option>
          <option value="Soltero">Soltero</option>
          <option value="casado">casado</option>
          <option value="divorciado">divorciado</option>
          <option value="separacion en proceso judicial">
            separacion en proceso judicial
          </option>
          <option value="viudo">viudo</option>
          <option value="concubinato">concubinato</option>
        </select>
        <label>Ingrese su fecha de nacimiento</label>
        <input type="date" />
        <label>Ingrese su ocupacion</label>
        <input type="text" placeholder="Ocupacion" />
        <label>Ingrse su grupo sanguineo</label>
        <select>
          <option value="">Grupo sanguineo</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <label>Ingrese sus alergias</label>
        <input type="text" placeholder="Alergios" />
        <label>Ingrese sus enfermedades</label>
        <input type="text" placeholder="enfermedades" />
        <label>Ingrese cirugias previas</label>
        <input type="text" placeholder="Cirugias" />
      </form>
    </>
  );
}

export default DatosPerson;
