import { Routes as ReactRouters, Route, Outlet } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../pages/HomePage";
import Ranking from "../pages/Ranking";
import AllServices from "../pages/AllServices";
import MyService from "../pages/MyService";
import MyPage from "../pages/MyPage";
import Login from "../pages/Login";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
;`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
;`

const Sidebar = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
;`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
;`

const FooterWrapper = styled.div`
  width: 100%;
;`

const Layout = () => (
  <LayoutWrapper>
    <ContentWrapper>
      <Sidebar>
        <Header />
      </Sidebar>
      <MainContent>
        <Outlet /> {/* 중첩된 페이지 컴포넌트가 렌더링될 위치 */}
      </MainContent>
    </ContentWrapper>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </LayoutWrapper>
);

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Layout />}>
        <Route path="homepage" element={<HomePage />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="all-services" element={<AllServices />} />
        <Route path="my-service" element={<MyService />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </ReactRouters>
  );
};
export default Routes;
