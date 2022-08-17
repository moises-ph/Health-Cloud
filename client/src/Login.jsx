import React from "react";
import {useRef} from 'react'

function Login() {
    const password = useRef()
    const length = () => {
        password.current.textContent='xdxdxdxdxd'
    }
  return (
    <>
      <form>
        <input type="text" min="3" />
        <input type="password" ref={password} min="8" />
        <button onClick={length}>realizar</button>
      </form>
    </>
  );
}

export default Login;
