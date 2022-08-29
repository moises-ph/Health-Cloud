import React from "react";
import Footer from "../paciente/Footer";
import Carousel from "../paciente/Carousel/Carousel";
import { NavLink } from "react-router-dom";
import Listas from "./Listas";

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
          <Listas />
        </section>
      </main>
      <label>Eres un paciente busacando ingresar a la pagina? ingresa aqui: </label>
      <NavLink to="/">Pagina de paciente</NavLink>
      <Footer />
    </>
  );
}

export default Index;
