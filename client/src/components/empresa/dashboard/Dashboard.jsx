import React, {useState} from 'react'
import Nav from './Nav'

function Dashboard() {
  const [content, setContent] = useState(<h3>Contenido</h3>)
  return (
    <>
      <Nav setContent={setContent} />
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