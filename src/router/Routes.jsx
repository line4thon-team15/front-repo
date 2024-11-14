// src/router/Routes.jsx
import { Routes as ReactRoutes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AllServices from "../pages/AllServices";
import MyService from "../pages/MyService";
import MyPage from "../pages/MyPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainPage from "../router/MainPage";
import InputServiceInfo from "../detailPage/InputServiceInfo";
import DetailPage from "../detailPage/DetailPage";
import WriteReview from "../detailPage/WriteReivew";
import Ranking from "../pages/Ranking";
import ProtectedRoute from "../contexts/ProtectedRoute"; // ProtectedRoute 추가
import { useAuth } from "../contexts/AuthContext"; // AuthContext import

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Routes = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const API_BASE_URL = import.meta.env.VITE_API_KEY;
  const { isAuthenticated } = useAuth();

  return (
      <LayoutWrapper>
          <ContentWrapper>
              <ReactRoutes>
                  <Route path="/" element={<MainPage API_BASE_URL={API_BASE_URL} />} />
                  <Route path="/all-services" element={<AllServices API_BASE_URL={API_BASE_URL} />} />
                  <Route path="/my-service" element={<MyService />} />
                  <Route path="/my-page" element={<MyPage API_BASE_URL={API_BASE_URL} />} />
                  <Route path="/login" element={<Login API_BASE_URL={API_BASE_URL} />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/input-service-info" element={<InputServiceInfo />} />
                  <Route path="/Detail/:teamId" element={<DetailPage API_BASE_URL={API_BASE_URL} />} />
                  <Route 
                      path="/write-review/:service_id" 
                      element={
                          <ProtectedRoute>
                              <WriteReview API_BASE_URL={API_BASE_URL} />
                          </ProtectedRoute>
                      } 
                  />
                  <Route path="/ranking" element={<Ranking API_BASE_URL={API_BASE_URL} />} />
              </ReactRoutes>
          </ContentWrapper>
      </LayoutWrapper>
  );
};

export default Routes;
