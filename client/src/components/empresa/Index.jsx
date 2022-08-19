import React from "react";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <h1>Vitaly's Now</h1>
      <NavLink to="/">Pagina de paciente</NavLink>
      <p>
        Vitaly's Now es una empresa enfocada al mejoramiento del rendimiento de
        las empresas del sector salud, en las cuales manejan sus archivos y sus
        documentos de forma manual, lo cual evita que sus procesos se hagan de
        forma optima y eficiente, ayudaremos hacer eso mucho más rápido de una
        manera amigable y muy intuitiva
      </p>
    </>
  );
}

export default Index;
