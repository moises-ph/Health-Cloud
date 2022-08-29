import React, { useState } from 'react'
import Nav from './Nav'

function Dashboard() {
  const [content,setContent]=useState(<h2>Contenido</h2>);
  return (
    <>
    <Nav setContent={setContent}/>
    <header>
      <button>Mirar Cuenta</button>
      <button>Cerrar Sesion</button>
      <button>Notificaciones</button>
    </header>
    <div>
      {content}
    </div>
    </>
  )
}

export default Dashboard