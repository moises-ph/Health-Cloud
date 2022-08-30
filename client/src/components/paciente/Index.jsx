import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel/Carousel";
import Listas from "./Listas";
import hearth from "../../Imgs/hearth.svg"
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Index() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="portrait:mb-24 portrait:flex portrait:flex-col portrait:justify-evenly">
        <section className="flex flex-row justify-around my-9 portrait:flex portrait:flex-col items-center">
          <img src={hearth} alt="heath svg" className="h-[25vh] w-auto"/>
          <p className="w-1/4 text-2xl portrait:w-[90vw] portrait:text-justify ">
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
        <section className="grid place-items-center mb-[5%] portrait:mb-[60%]">
          <Listas />
        </section>
        <section className="flex p-10 items-center mb-[10%] justify-center h-[38vh] px-48 portrait:flex portrait:flex-col portrait:w-[100vw] portrait:p-0 portrait:mb-[60%]">
          <div className="flex flex-col items-center w-11/12 bg-gradient-to-r from-slate-200 to-slate-100 h-fit-content m-16 shadow-xl pt-3 portrait:w-[90vw]">
            {/*imagen*/}
            <h3 className="text-4xl font-bold">Mision:</h3>
            <p className=" w-3/5 text-2xl text-justify portrait:w-[85vw]">
              Poder crear una solucion rapida y eficiente para los empresas del
              sector de la salud en Colombia, las cuales todavia manejen sus
              archivos y sus procesos de forma manual, para que pueden brindar
              un servicio mas optimizado a los pacientes
            </p>
          </div>
          <div className="flex flex-col items-center w-11/12 bg-gradient-to-r from-slate-200 to-slate-100 h-fit-content shadow-xl pt-3 portrait:w-[90vw]">
            {/*imagen*/}
            <h3 className="text-4xl font-bold">Vision:</h3>
            <p className="w-3/5 text-2xl text-justify mt-4 portrait:w-[85vw]">
              Expandir la empresa para que brinde soporte en todos departamentos
              de colombia, ofreciendo apoyo a todas las empresas que no hayan
              actualizado sus procesos a los formatos actuales
            </p>
          </div>
        </section>
      </main>
      <NavLink to="/paciente/SolicitarRegistro" >Solicitar Registro</NavLink>
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
