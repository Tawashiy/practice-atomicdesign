import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const context = "fooo!";
  return (
    <UserContext.Provider value={{ context }}>{children}</UserContext.Provider>
  );
};
