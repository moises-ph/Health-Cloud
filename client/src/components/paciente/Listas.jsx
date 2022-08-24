import React from "react";
import pacientes from "../../Imgs/Pacientes.png";
import monitor from "../../Imgs/Monitor.png";
import relaciones from "../../Imgs/Relaciones.png";

function Listas() {
  const content = [
    {
      imagen: relaciones,
      titulo: "Comunicacion",
      li1: "Manejo rapido de ingresos y solicitudes al personal de la empresa de salud",
      li2: "Chat para servicio al cliente para consultas o resolucion de problemas",
    },
    {
      imagen: monitor,
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
      <div className="w-4/5 grid grid-cols-3 gap-3">
        {content.map((list) => {
          return (
            <div key={list.titulo} className="flex flex-col items-center">
              <img src={list.imagen} className="w-10 h-auto" alt="icono de muestra de Vytali's Now"/>
              <h3 className="text-xl">{list.titulo}</h3>
              <ul>
                <li>{list.li1}</li>
                <li>{list.li2}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listas;
