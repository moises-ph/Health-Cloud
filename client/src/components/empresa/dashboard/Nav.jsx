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
      <nav className="w-full flex flex-col justify-center col-span-2">
        <div className="flex flex-col gap-6">
          <button onClick={setRegistrar}>Registrar Clientes</button>
          <button onClick={setCrearHC}>Crear Historias Clinicas</button>
          <button onClick={setBorrarCuentas}>Borrar cuentas</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
