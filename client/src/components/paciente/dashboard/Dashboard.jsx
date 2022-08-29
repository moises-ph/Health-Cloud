import React, { useState } from "react";
import Navigation from "./Navigation";

function Dashboard() {
  const [content, setContent] = useState(<h3>Contenido</h3>);
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen items-start">
        <Navigation setContent={setContent} />
        <div className="col-span-10">
          <header className="flex flex-row w-4/5 items-center justify-end gap-4">
            <span>icono</span>
            <button>Cerrar Sesion</button>
            <button>icono ajustes</button>
            <button>icono notificaciones</button>
          </header>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
