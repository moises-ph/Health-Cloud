import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel/Carousel";
import Listas from "./Listas";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Index() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="106"
            version="1.1"
          >
            <path
              d="M 58,17 C 52,7 42,0 30,0 C 13,0 0,13 0,30 C 0,63 18,68 58,106 C 98,68 116,63 116,30 C 116,13 103,0 86,0 C 74,0 64,7 58,17 z"
              fill="#ff0707"
            />
          </svg>
          <p>
            Vitaly's Now es una empresa enfocado al mejoramiento de la
            comunicacion entre pacientes y empresas de salud, de manera que los
            procesos que estas ultimas hacen para brindar servicios a los
            pacientes sean hechos de manera rapida y eficaz para ofrecer el
            mejor servicio posible.
          </p>
        </section>
        <section>
          <Carousel />
        </section>
        <section className="grid place-items-center">
          <Listas />
        </section>
        <section>
          <div>
            {/*imagen*/}
            <h3>Mision:</h3>
            <p>
              Poder crear una solucion rapida y eficiente para los empresas del
              sector de la salud en Colombia, las cuales todavia manejen sus
              archivos y sus procesos de forma manual, para que pueden brindar
              un servicio mas optimizado a los pacientes
            </p>
          </div>
          <div>
            {/*imagen*/}
            <h3>Vision:</h3>
            <p>
              Expandir la empresa para que brinde soporte en todos departamentos
              de colombia, ofreciendo apoyo a todas las empresas que no hayan
              actualizado sus procesos a los formatos actuales
            </p>
          </div>
        </section>
      </main>
      <label>
        Formas parte de una empresa del sector salud buscando usar nuestros
        servicios, ingresa aqui:{" "}
      </label>
      <NavLink to="/empresa">Pagina de empresa</NavLink>
      <Footer />
    </>
  );
}

export default Index;
