import React from 'react'
import {NavLink} from 'react-router-dom'

function Error() {
  return (
    <>
        <h1>Error 404</h1>
        <h3>Pagina no encontrada</h3>
        <NavLink to='/'>Ir al Home</NavLink> 
    </>
  )
}

export default Error;