import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel/Carousel";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <Nav />
      <Carousel />
      <main>
        <p>
          Vitaly's Now es una empresa enfocado al mejoramiento de la
          comunicacion entre pacientes y empresas de salud, de manera que los
          procesos que estas ultimas hacen para brindar servicios a los
          pacientes sean hechos de manera rapida y eficaz para ofrecer el mejor
          servicio posible.
        </p>
      <NavLink to="/empresa">Pagina de empresa</NavLink>  
      </main>
    </>
  );
}

export default Index;
