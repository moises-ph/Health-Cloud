import React from 'react'
import Github from "../../Imgs/icono github.svg"
import Facebook from "../../Imgs/icono facebook.svg"
import Instagram from "../../Imgs/icono instagram.svg"
import Whatsapp from "../../Imgs/icono whatsapp.svg"
import {NavLink} from "react-router-dom"
function Footer() {
  return (
    <>
    <footer>       
    <a href="#"><img src={Facebook}></img></a>
    <a href="#"><img src={Instagram}></img></a>
    <a href="#"><img src={Whatsapp}></img></a>
    <a href="https://github.com/moises-ph/Health-Cloud" target="blank"><img src={Github}></img></a>
    </footer>
    </>
  )
}

export default Footer