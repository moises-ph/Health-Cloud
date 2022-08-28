import React from "react";
import RegistrarPaciente from "./RegistrarPaciente";
import CrearHC from "./CrearHC";
import BorrarCuentas from "./BorrarCuentas";

function Nav({ setContent }) {
  const setRegistrar = () => {
    setContent(RegistrarPaciente);
  };
  const setCrearHC = () => {
    setContent(CrearHC);
  };
  const setBorrarCuentas = () => {
    setContent(BorrarCuentas);
  };
  return (
    <>
      <nav>
        <div>
          <button onClick={setRegistrar}>Registrar Clientes</button>
          <button onClick={setCrearHC}>Crear Historias Clinicas</button>
          <button onClick={setBorrarCuentas}>Borrar cuentas</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
