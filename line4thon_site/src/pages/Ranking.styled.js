import styled from "styled-components";

export const Wrapper = styled.div`
  // position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  margin-left: 200px;
  // height: calc(100% - 120px);
  // width: 100%;
  height: 100%;
  background-color: #e9ecef;
  scroll-snap-align: start;
`;

// Menubar 스타일 정의
export const MenuBar = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
`;

export const Section = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AllServicesSection = styled(Section)`
  margin-top: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Rank = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 40px;
  text-align: center;
  color: #555;
`;

export const ServiceImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ServiceDetails = styled.div`
  font-size: 14px;
  color: #777;
`;
