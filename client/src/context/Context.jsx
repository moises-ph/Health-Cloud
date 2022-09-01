import React, { createContext, useState } from 'react'

export  const context_login = createContext();

export const Context= ({children}) => {

  return (
    <context_login.Provider value={{}}>
      { children }
    </context_login.Provider>
  )
}

export default Context