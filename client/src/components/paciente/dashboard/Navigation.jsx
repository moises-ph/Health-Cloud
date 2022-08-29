import React from "react";
import DatosPerson from "./DatosPerson";
import ServicioCliente from "./ServicioCliente";
import SolicitudHC from "./SolicitudHC";

function Navigation({setContent}) {
  const setDatos = () => {
    setContent(DatosPerson)
  }
  const setServicio = () => {
    setContent(ServicioCliente)
  }
  const setHC = () => {
    setContent(SolicitudHC)
  }
  return (
    <>
      <nav className="w-full flex flex-col justify-center col-span-2">
        <div className="flex flex-col gap-6 ">
          <button onClick={setHC}>Solicitar ver historias clinicas</button>
          <button onClick={setServicio}>Servicio al Cliente</button>
          <button onClick={setDatos}>Datos</button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
