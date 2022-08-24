import React from "react";
import Github from "../../Imgs/icono github.svg";
import Facebook from "../../Imgs/icono facebook.svg";
import Instagram from "../../Imgs/icono instagram.svg";
import Whatsapp from "../../Imgs/icono whatsapp.svg";

function Footer() {
  return (
    <>
      <footer>
        <a href="#">
          <img src={Facebook} alt="link to facebook page"></img>
        </a>
        <a href="#">
          <img src={Instagram} alt="link to instagram page"></img>
        </a>
        <a href="#">
          <img src={Whatsapp} alt="link to whatsapp account"></img>
        </a>
        <a href="https://github.com/moises-ph/Health-Cloud" target="blank">
          <img src={Github} alt="link to github repo"></img>
        </a>

        <p>Todos los derechos reservados por Vitaly's Now 2022.</p>
      </footer>
    </>
  );
}

export default Footer;
