import React, { createContext, useContext } from 'react';

const AuthContext = createContext({ isAuthenticated: false });
const ThemeContext = createContext('light');

export const Context = () => {
  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated: false }}>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
        <NotAccessible />
      </AuthContext.Provider>
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
    >
      {theme}
    </button>
  );
};

const NotAccessible = () => {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
};
