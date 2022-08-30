import React from 'react'

function DatosPersonales() {
  return (
    <>
    <h2>Datos Personales</h2>
    <form action="post"> 
    <h2 className=''>Registro</h2>
    <select>
      <option value="">Tipo de documento:</option>
      <option value="C.C">C.C</option>
      <option value="Pasaporte">Pasaporte</option>
      <option value="Permiso especial de permanencia">
            Permiso especial de permanencia
      </option>
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
    <input type="text" placeholder="Departamento" />
    <label>Ingrese ciudad de residencia:</label>
    <input type="text" placeholder="ciudad" />
    <label>Ingrese su Direccion:</label>
    <input type="text" placeholder="Direccion" />
    <label>Ingrese su estado civil:</label>
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
    <label>Ingrese su fecha de nacimiento:</label>
    <input type="date" />
    <select>
      <option value="">Grupo sanguineo:</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
    </select>
    </form>
    </>
  )
}

export default DatosPersonales