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
    
    </form>
    </>
  )
}

export default SolicitarRegistro