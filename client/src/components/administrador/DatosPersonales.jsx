import React from 'react'

function DatosPersonales() {
  return (
    <>
    <h2>Datos Personales</h2>
    <form action="post"> 
    <h2 className=''>Registro</h2>
    <select>
      <option value="">Tipo de documento</option>
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
    </form>
    </>
  )
}

export default DatosPersonales