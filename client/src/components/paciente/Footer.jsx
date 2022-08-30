import React from "react";
import Github from "../../Imgs/icono github.svg";
import Facebook from "../../Imgs/icono facebook.svg";
import Instagram from "../../Imgs/icono instagram.svg";
import Whatsapp from "../../Imgs/icono whatsapp.svg";
import Twitter from "../../Imgs/icono twitter.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex items-center w-11/12 justify-center">
          <a href="/" target="blank">
            <img src={Facebook} className="h-8 w-auto" alt="link to facebook page"></img>
          </a>
          <a href="https://www.instagram.com/vitalysnowofficial/" target="blank">
            <img src={Instagram} className="h-8 w-auto" alt="link to instagram page"></img>
          </a>
          <a href="/">
            <img src={Whatsapp} className="h-8 w-auto" alt="link to whatsapp account"></img>
          </a>
          <a href="https://github.com/moises-ph/Health-Cloud" target="blank">
            <img src={Github} className="h-8 w-auto" alt="link to github repo"></img>
          </a>
          <a href="https://twitter.com/Vitalys_Now" target="blank">
            <img src={Twitter} className="h-8 w-auto" alt="link to twitter page"></img>
          </a>
        </div>
        <p>Todos los derechos reservados por Vitaly's Now 2022.</p>
      </footer>
    </>
  );
}

export default Footer;
