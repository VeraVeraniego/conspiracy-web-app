import React, { createContext, useContext, useState } from "react";

interface User {
	userID: string
	username: string
}

interface UserContext {
  userLogged: User | null
  login: (User: User) => void
  logout: () => void
}

export const UserContext = createContext<UserContext | null>(null);

export const UserProvider = ({ children }: {children: React.ReactElement}) => {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  const login = (user: User) => {
    setUserLogged(user);
  };

  const logout = () => {
    setUserLogged(null);
  };

  const value = { userLogged, login, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used with in a UserProvider");
  }
  return context;
};