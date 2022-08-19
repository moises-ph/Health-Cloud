import React from "react";

function Login() {
  return (
    <>
      <form>
        <input type="text" min="3"/>
        <input type="password"  min="8"/>
        <button>realizar</button>
      </form>
    </>
  );
}

export default Login;
