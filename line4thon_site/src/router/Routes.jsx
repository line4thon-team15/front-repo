// src/router/Routes.jsx
import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import AllServices from '../pages/AllServices';
import MyService from '../pages/MyService';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Routes = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <LayoutWrapper>
      {!isMainPage && <Header />} {/* MainPage가 아닐 때만 Header를 렌더링 */}
      <ContentWrapper>
        <ReactRoutes>
          {isMainPage ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <>
              <Route path="/all-services" element={<AllServices />} />
              <Route path="/my-service" element={<MyService />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </ReactRoutes>
      </ContentWrapper>
      {!isMainPage && <Footer />} {/* MainPage가 아닐 때만 Footer를 렌더링 */}
    </LayoutWrapper>
  );
};

export default Routes;
