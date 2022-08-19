import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <>
        <nav>
            <NavLink to='/login'>Sign in</NavLink>
        </nav>
    </>
  )
}

export default Nav