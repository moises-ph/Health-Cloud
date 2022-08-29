import React from 'react'
import pacientes from "../../Imgs/pacientes.svg";
import screen from "../../Imgs/screen.svg";
import comunication from "../../Imgs/comunication.svg";

function Listas() {
    const Arreglo = [
        {
            imagen: pacientes,
            title: "Seguridad",
            li1: "Manejo de informacion segura",
            li2: "Conexiones estables y privadas"

        },
        {
            imagen: screen,
            title: "Para el sector salud",
            li1: "Manejo optimo y seguro de documentos y archivos del sector salud",
            li2: "Facilidad para crear y compartir archivos privados"
        },
        {
            imagen: comunication,
            title: "Tecnologias",
            li1: "Hecho con las ultimas tecnologias",
            li2: "Optimizado para ser rapido y confiable"
        }]

    return (
        <>
            <div>
                {Arreglo.map(objetos => {
                    return (<div>
                        <img src={objetos.imagen} alt="" />
                        <h3>{objetos.title}</h3>
                        <ul>
                            <li>{objetos.li1}</li>
                            <li>{objetos.li2}</li>
                        </ul>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Listas