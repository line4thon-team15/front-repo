import React from "react";
import * as Styled from "./Ranking.styled";
import ArrowImage from "../assets/Arrowright.png";
import RankingImage from "../assets/Ranking.png";

const Ranking = () => {
  // 예시 데이터 - 나중에 API 데이터로 대체할 예정
  const rankingServices = [
    {
      rank: 1,
      image: "/path/to/image-1.png",
      name: "[서비스명]",
      description: "서비스 한줄소개",
    },
    {
      rank: 2,
      image: "/path/to/image-2.png",
      name: "[너만 노란색]",
    },
    {
      rank: 3,
      image: "/path/to/image-3.png",
      name: "[서브웨이]",
    },
    {
      rank: 4,
      image: "/path/to/image-4.png",
      name: "[지하철 대탐험]",
    },
    {
      rank: 5,
      image: "/path/to/image-5.png",
      name: "[서브웨이]",
    },
  ];

  const badgeServices = [
    {
      rank: 1,
      image: "/path/to/image-1.png",
      name: "[서비스명]",
      description: "서비스 한줄소개",
    },
    {
      rank: 2,
      image: "/path/to/image-2.png",
      name: "[너만 노란색]",
    },
    {
      rank: 3,
      image: "/path/to/image-3.png",
      name: "[서브웨이]",
    },
    {
      rank: 4,
      image: "/path/to/image-4.png",
      name: "[지하철 대탐험]",
    },
    {
      rank: 5,
      image: "/path/to/image-5.png",
      name: "[서브웨이]",
    },
  ];

  // 각 부문의 1등과 나머지 항목들을 분리
  const firstPlaceRanking = rankingServices[0];
  const otherPlacesRanking = rankingServices.slice(1);

  const firstPlaceBadge = badgeServices[0];
  const otherPlacesBadge = badgeServices.slice(1);

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Header>
          <Styled.Title>명예의 전당</Styled.Title>
          <Styled.Subtitle>최고의 서비스를 위해 참여해주세요</Styled.Subtitle>
        </Styled.Header>

        <Styled.SectionContainer>
          {/* 총 별점 부문 */}
          <Styled.Section>
            <Styled.SectionTitleAll>
              <img src={RankingImage} alt="RankingImage" width="35" height="35" />
              <Styled.SectionTitle>총 별점 부문</Styled.SectionTitle>
            </Styled.SectionTitleAll>

            {/* 1등 항목 */}
            <Styled.FirstPlace>
              <Styled.FirstPlaceImage src={firstPlaceRanking.image} alt={`Service ${firstPlaceRanking.rank}`} />
              <Styled.FirstPlaceInfo>
                <Styled.ServiceName>{firstPlaceRanking.name}</Styled.ServiceName>
                <Styled.ServiceDescription>{firstPlaceRanking.description}</Styled.ServiceDescription>
              </Styled.FirstPlaceInfo>
            </Styled.FirstPlace>

            {/* 2등부터 나머지 항목들 */}
            <Styled.ServiceList>
              {otherPlacesRanking.map((service) => (
                <Styled.ServiceItem key={service.rank}>
                  <Styled.Rank>{service.rank}</Styled.Rank>
                  <Styled.ServiceImage src={service.image} alt={`Service ${service.rank}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>{service.name}</Styled.ServiceName>
                  </Styled.ServiceInfo>
                  <Styled.Arrow>
                    <img src={ArrowImage} alt="Arrow Right" width="24" height="24" />
                  </Styled.Arrow>
                </Styled.ServiceItem>
              ))}
            </Styled.ServiceList>
          </Styled.Section>

          {/* 뱃지 부문 */}
          <Styled.Section>
            <Styled.SectionTitleAll>
              <img src={RankingImage} alt="RankingImage" width="35" height="35" />
              <Styled.SectionTitle>뱃지 부문</Styled.SectionTitle>
            </Styled.SectionTitleAll>

            {/* 1등 항목 */}
            <Styled.FirstPlace>
              <Styled.FirstPlaceImage src={firstPlaceBadge.image} alt={`Service ${firstPlaceBadge.rank}`} />
              <Styled.FirstPlaceInfo>
                <Styled.ServiceName>{firstPlaceBadge.name}</Styled.ServiceName>
                <Styled.ServiceDescription>{firstPlaceBadge.description}</Styled.ServiceDescription>
              </Styled.FirstPlaceInfo>
            </Styled.FirstPlace>

            {/* 2등부터 나머지 항목들 */}
            <Styled.ServiceList>
              {otherPlacesBadge.map((service) => (
                <Styled.ServiceItem key={service.rank}>
                  <Styled.Rank>{service.rank}</Styled.Rank>
                  <Styled.ServiceImage src={service.image} alt={`Service ${service.rank}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>{service.name}</Styled.ServiceName>
                  </Styled.ServiceInfo>
                  <Styled.Arrow>
                    <img src={ArrowImage} alt="Arrow Right" width="24" height="24" />
                  </Styled.Arrow>
                </Styled.ServiceItem>
              ))}
            </Styled.ServiceList>
          </Styled.Section>
        </Styled.SectionContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Ranking;
