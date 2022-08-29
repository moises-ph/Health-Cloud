import React from 'react'
import DatosPersonales from "./DatosPersonales"
import EliminarCuentas from "./EliminarCuentas"
import MirarDocumentos from "./MirarDocumentos"
import RegistrarCuentas from "./RegistrarCuentas"
import RegistrarPacientes from "./RegistrarPacientes"

function Nav({setContent}) {
    const cambia_DatosPersonales = () =>{
        setContent(DatosPersonales)
    }
    const cambia_EliminarCuenta = () =>{
        setContent(EliminarCuentas)
    }
    const cambia_MirarDocumentos = () =>{
        setContent(MirarDocumentos)
    }
    const cambia_RegistrarCuentas = () =>{
        setContent(RegistrarCuentas)
    }
    const cambia_RegistrarPaciente = () =>{
        setContent(RegistrarPacientes)
    }
  return (
    <>
    <nav>
        <button onClick={cambia_DatosPersonales}>Datos Personales</button>
        <button onClick={cambia_EliminarCuenta}>Eliminar cuentas</button>
        <button onClick={cambia_MirarDocumentos}>Mirar Documentos</button>
        <button onClick={cambia_RegistrarCuentas}>Registrar Cuentas</button>
        <button onClick={cambia_RegistrarPaciente}>Registrar Paciente</button>
    </nav>
    </>
  )
}

export default Nav