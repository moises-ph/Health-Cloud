import React from "react";
import pacientes from "../../Imgs/pacientes.svg";
import screen from '../../Imgs/screen.svg'
import comunication from "../../Imgs/comunication.svg";

function Listas() {
  const content = [
    {
      imagen: comunication,
      titulo: "Comunicacion",
      li1: "Manejo rapido de ingresos y solicitudes al personal de la empresa de salud",
      li2: "Chat para servicio al cliente para consultas o resolucion de problemas",
    },
    {
      imagen: screen,
      titulo: "Seguridad",
      li1: "Manejo seguro de los archivos privados de cada paciente",
      li2: "Seguridad en la creacion, actualizacion y eliminacion de documentos",
    },
    {
      imagen: pacientes,
      titulo: "Rapidez",
      li1: "Optimizacion de tiempo en los procesos necesarios para dar un buen servicio al paciente",
      li2: "Manejo digital de archivos para que la atencion al paciente sea rapida y eficaz",
    },
  ];
  return (
    <>
      <div className="w-full place-items-center grid grid-cols-3 mb-10 portrait:flex portrait:flex-col portrait:justify-center portrait:gap-4">
        {content.map((list) => {
          return (
            <div key={list.titulo} className="flex flex-col items-center w-3/5 border-solid border-2 border-neutral-400 rounded-lg p-4 bg-slate-200 portrait:w-[80vw]">
              <img src={list.imagen} className="w-28 h-auto mb-3" alt="icono de muestra de Vytali's Now"/>
              <h3 className="text-xl mb-2 font-extrabold">{list.titulo}</h3>
              <ul>
                <li className="text-justify text-slate-500 mb-2">- {list.li1}</li>
                <li className="text-justify text-slate-500">- {list.li2}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listas;
