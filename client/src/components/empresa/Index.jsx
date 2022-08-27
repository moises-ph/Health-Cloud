import React from "react";
import Footer from "../paciente/Footer";
import Carousel from "../paciente/Carousel/Carousel";
import pacientes from "../../Imgs/pacientes.svg";
import screen from "../../Imgs/screen.svg";
import comunication from "../../Imgs/comunication.svg";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <header>
        <nav>
          <h1>Vitaly's Now</h1>
        </nav>
      </header>
      <Carousel />
      <main>
        <section>
          <p>
            Vitaly's Now es una empresa enfocada al mejoramiento del rendimiento
            de las empresas del sector salud, en las cuales manejan sus archivos
            y sus documentos de forma manual, lo cual evita que sus procesos se
            hagan de forma optima y eficiente, ayudaremos hacer eso mucho más
            rápido de una manera amigable y muy intuitiva
          </p>
        </section>
        <section>
          <div>
            <img src={pacientes} alt="" />
            <h3>Seguridad</h3>
            <ul>
              <li>Manejo de informacion segura</li>
              <li>Conexiones estables y privadas</li>
            </ul>
          </div>
          <div>
            <img src={screen} alt="" />
            <h3>Para el sector salud</h3>
            <ul>
              <li>
                {" "}
                Manejo optimo y seguro de documentos y archivos del sector salud
              </li>
              <li> Facilidad para crear y compartir archivos privados </li>
            </ul>
          </div>
          <div>
            <img src={comunication} alt="" />
            <h3>Tecnologias</h3>
            <ul>
              <li>Hecho con las ultimas tecnologias</li>
              <li>Optimizado para ser rapido y confiable</li>
            </ul>
          </div>
        </section>
      </main>
      <label>Eres un paciente busacando ingresar a la pagina? ingresa aqui: </label>
      <NavLink to="/">Pagina de paciente</NavLink>
      <Footer />
    </>
  );
}

export default Index;
