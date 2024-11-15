import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      if (isTokenExpired(token)) {
        // 토큰이 만료되었을 때 자동 로그아웃
        logout();
      } else {
        setAccessToken(token);
        setIsAuthenticated(true);
      }
    }
  }, []);

  const isTokenExpired = (token) => {
    // JWT 토큰이 base64로 인코딩되었을 경우 디코딩하여 만료 시간을 확인
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1000; // 만료 시간을 밀리초로 변환
      return Date.now() > expiry;
    } catch (error) {
      console.error("토큰 검사 오류:", error);
      return true;
    }
  };

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
    setIsAuthenticated(true);
    navigate("/"); // 로그인 후 이동할 경로
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    setIsAuthenticated(false);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <AuthContext.Provider value={{ setIsAuthenticated, isAuthenticated, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
