import styled from "styled-components";

export const RankingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  width: calc(100vw - 200px);
  height: 100vh;
  background-color: white;
  scroll-snap-align: start;
  padding-bottom: 400px;
`;

export const Content = styled.div`
  height: 100vh;
  margin: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const Title = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 70px;
  text-align: center;
  font-weight: bold;
  color: black;
  margin: 10px;
  line-height: 1;
`;

export const Werath = styled.img`
  position: absolute;
  left: calc(55% + 120px);
  transform: translate(-40%, 20%);
  width: 65px;
  height: auto;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
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
  flex-direction: column;
  margin-bottom: 24px;

  cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
`;

export const FirstPlaceImage = styled.img`
  width: 446px; /* 고정 가로 크기 */
  height: 250px; /* 고정 세로 크기 */
  border-radius: 8px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export const FirstPlaceInfo = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 15px;
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
  width: 110px;
  height: 70px;
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
  // margin-top: 8px;
  margin-right: 5px;
`;

export const Arrow = styled.div`
  font-size: 24px;
  color: #999;

  cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
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

export const ServiceTeam = styled.div`
  font-size: 14px;
  color: #777;
  margin-top: 4px;
`;

export const ServiceCardAll = styled.div`
  &:hover {
    transform: scale(1.05);
  }
`;
