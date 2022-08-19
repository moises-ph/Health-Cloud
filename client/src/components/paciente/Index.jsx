import React from 'react'
import Nav from './Nav'
import {NavLink} from 'react-router-dom'

function TheIndex() {
  return (
    <>
      <Nav />
      <h1>Vitaly's Now</h1>
      <NavLink to='/empresa'>Pagina de empresa</NavLink>
    </>
  )
}

export default TheIndex