import React from 'react'
import Navigation from './Navigation'

function Dashboard() {
  return (
    <>
      <Navigation />
      <header>
        <span>icono</span>
        <button>Cerrar Sesion</button>
        <button>icono ajustes</button>
        <button>icono notificaciones</button>
      </header>
    </>
  )
}

export default Dashboard