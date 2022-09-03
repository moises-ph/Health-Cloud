import React, { createContext, useState } from 'react'

export  const context_login = createContext();

export const Context= ({children}) => {
  const [token, setToken] = useState('')

  return (
    <context_login.Provider value={{token, setToken}}>
      { children }
    </context_login.Provider>
  )
}

export default Context