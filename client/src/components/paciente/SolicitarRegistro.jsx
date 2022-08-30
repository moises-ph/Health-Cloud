import React from 'react'

function SolicitarRegistro() {
  return (
    <>
    <form action="post">
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

    </form>
    </>
  )
}

export default SolicitarRegistro