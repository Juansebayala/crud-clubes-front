import { createContext } from 'react';

export const UrlContext = createContext();

// eslint-disable-next-line react/prop-types
export function UrlProvider({ children }) {
  const URLServicio = 'http://localhost:3000';

  return (
    <UrlContext.Provider value={{ URLServicio }}>
      {children}
    </UrlContext.Provider>
  );
}
