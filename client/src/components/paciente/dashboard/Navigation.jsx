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
      <nav className="w-1/5 flex flex-col justify-center ">
        <div className="w-1/5 flex flex-col justify-center ">
          <button onClick={setHC}>Solicitar ver historias clinicas</button>
          <button onClick={setServicio}>Servicio al Cliente</button>
          <button onClick={setDatos}>Datos</button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
