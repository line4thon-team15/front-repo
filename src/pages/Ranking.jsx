import React, { useEffect, useState } from "react";
import * as Styled from "./Ranking.styled";
import ArrowImage from "../assets/Arrowright.png";
import RankingImage from "../assets/Ranking.png";

const Ranking = ({ API_BASE_URL }) => {
  const [rankingServices, setRankingServices] = useState([]);
  const [badgeServices, setBadgeServices] = useState([]);
  const token = localStorage.getItem("accessToken");

  const totalScoreApiUrl = `${API_BASE_URL}/main/HOF-score`;
  const badgeApiUrl = `${API_BASE_URL}/main/HOF_badge`;

  useEffect(() => {
    const fetchTotalScoreData = async () => {
      try {
        const response = await fetch(totalScoreApiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setRankingServices(data);
      } catch (error) {
        console.error("총 별점 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    const fetchBadgeData = async () => {
      try {
        const response = await fetch(badgeApiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setBadgeServices(data);
      } catch (error) {
        console.error("뱃지 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    // 두 가지 데이터를 모두 호출하도록 수정
    fetchTotalScoreData();
    fetchBadgeData();
  }, [token, totalScoreApiUrl, badgeApiUrl]);

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
            {rankingServices.length > 0 && (
              <Styled.FirstPlace as="a" href={rankingServices[0].site_url} target="_blank" rel="noopener noreferrer">
                <Styled.FirstPlaceImage src={rankingServices[0].thumbnail_image} alt={`Service ${rankingServices[0].id}`} />
                <Styled.FirstPlaceInfo>
                  <Styled.ServiceNameFirst>{rankingServices[0].service_name}</Styled.ServiceNameFirst>
                  <Styled.ServiceDescriptionFirst>{rankingServices[0].team_name}</Styled.ServiceDescriptionFirst>
                </Styled.FirstPlaceInfo>
              </Styled.FirstPlace>
            )}

            {/* 2등부터 나머지 항목들 */}
            <Styled.ServiceList>
              {rankingServices.slice(1).map((service) => (
                <Styled.ServiceItem key={service.id}>
                  <Styled.Rank>{service.total_score}</Styled.Rank>
                  <Styled.ServiceImage src={service.thumbnail_image} alt={`Service ${service.id}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>{service.service_name}</Styled.ServiceName>
                  </Styled.ServiceInfo>
                  <Styled.Arrow as="a" href={service.site_url} target="_blank" rel="noopener noreferrer">
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
            {badgeServices.length > 0 && (
              <Styled.FirstPlace as="a" href={badgeServices[0].site_url} target="_blank" rel="noopener noreferrer">
                <Styled.FirstPlaceImage src={badgeServices[0].thumbnail_image} alt={`Service ${badgeServices[0].id}`} />
                <Styled.FirstPlaceInfo>
                  <Styled.ServiceNameFirst>{badgeServices[0].service_name}</Styled.ServiceNameFirst>
                  <Styled.ServiceDescriptionFirst>{badgeServices[0].team_name}</Styled.ServiceDescriptionFirst>
                </Styled.FirstPlaceInfo>
              </Styled.FirstPlace>
            )}

            {/* 2등부터 나머지 항목들 */}
            <Styled.ServiceList>
              {badgeServices.slice(1).map((service) => (
                <Styled.ServiceItem key={service.id}>
                  <Styled.Rank>{service.tag_num}</Styled.Rank>
                  <Styled.ServiceImage src={service.thumbnail_image} alt={`Service ${service.id}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>{service.service_name}</Styled.ServiceName>
                  </Styled.ServiceInfo>
                  <Styled.Arrow as="a" href={service.site_url} target="_blank" rel="noopener noreferrer">
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
