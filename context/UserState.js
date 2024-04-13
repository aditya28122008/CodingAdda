"use client";
import { useState } from "react";
import userContext from "./userContext";
const UserState = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({})
  const fetchUser = async () => {
    if (localStorage.getItem("CodeUser")) {
      setAuthenticated(true);
      const response = await fetch("/api/user/user-data/", {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("CodeUser")
        }
      })
      const json = await response.json()
      setUser(json)
    } else {
      setAuthenticated(false);
    }
  };
  return <userContext.Provider value={{fetchUser, authenticated, user}}>{children}</userContext.Provider>;
};

export default UserState;
