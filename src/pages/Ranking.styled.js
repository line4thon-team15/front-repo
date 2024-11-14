import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
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
  font-size: 55px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
`;

export const SectionContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const Section = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: none;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitleAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 13px;
`;

export const FirstPlace = styled.div`
  display: flex;
  // align-items: center;
  margin-bottom: 24px;
  flex-direction: column;
`;

export const FirstPlaceImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 16px;
`;

export const FirstPlaceInfo = styled.div`
  display: flex;
  flex-direction: row;S
;
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 8px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ServiceName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-right: 5px;
`;

export const Arrow = styled.div`
  font-size: 24px;
  color: #999;
`;

export const ServiceNameFirst = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
  margin-right: 5px;
`;

export const ServiceDescriptionFirst = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 8px;
`;
