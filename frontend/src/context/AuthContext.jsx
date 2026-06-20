import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  const register = async (formData) => {
    const { data } = await API.post("/auth/register", formData);
    setUserInfo(data);
    return data;
  };

  const login = async (formData) => {
    const { data } = await API.post("/auth/login", formData);
    setUserInfo(data);
    return data;
  };

  const logout = () => {
    setUserInfo(null);
  };

  const getAuthConfig = () => ({
    headers: {
      Authorization: `Bearer ${userInfo?.token}`
    }
  });

  return (
    <AuthContext.Provider value={{ userInfo, register, login, logout, getAuthConfig }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
