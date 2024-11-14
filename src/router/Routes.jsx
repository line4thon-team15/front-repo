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

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <ReactRoutes>
          <Route path="/" element={<MainPage API_BASE_URL={API_BASE_URL} />} />
          <Route path="/all-services" element={<AllServices API_BASE_URL={API_BASE_URL} />} />
          <Route path="/my-service" element={<MyService />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/login" element={<Login API_BASE_URL={API_BASE_URL} />} />
          <Route path="/input-service-info" element={<InputServiceInfo />} />
          <Route path="/Detail/:teamId" element={<DetailPage API_BASE_URL={API_BASE_URL} />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/SignUp" element={<SignUp API_BASE_URL={API_BASE_URL} />} />
          <Route path="/ranking" element={<Ranking API_BASE_URL={API_BASE_URL} />} />
        </ReactRoutes>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Routes;
