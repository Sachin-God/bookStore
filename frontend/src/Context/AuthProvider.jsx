import React, { createContext, useContext, useState } from 'react'

export const Context = createContext();
export default function AuthProvider({ children }) {
  const initialUser = localStorage.getItem('user');
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );
  return (
    <Context.Provider value={[authUser, setAuthUser]}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => useContext(Context)

