import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const logout = () => {
    localStorage.clear();
    setAuth(null);
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth) {
      setAuth(auth);
    }
  }, []);

  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
