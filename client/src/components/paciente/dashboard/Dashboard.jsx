import React, {useState} from 'react'
import Navigation from './Navigation'
import DatosPerson from './DatosPerson'

function Dashboard() {
  const [content, setContent] = useState(<h3>Contenido</h3>);
  return (
    <>
      <Navigation setContent={setContent} />
      <header>
        <span>icono</span>
        <button>Cerrar Sesion</button>
        <button>icono ajustes</button>
        <button>icono notificaciones</button>
      </header>
      <div>{content}</div>
    </>
  )
}

export default Dashboard