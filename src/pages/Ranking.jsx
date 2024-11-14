import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // navigate 추가
import * as Styled from "./Ranking.styled";
import ArrowImage from "../assets/Arrowright.png";
import RankingImage from "../assets/Ranking.png";
import axios from "axios";

const Ranking = ({ API_BASE_URL }) => {
  const [rankingServices, setRankingServices] = useState([]);
  const [badgeServices, setBadgeServices] = useState([]);
  const navigate = useNavigate(); // navigate 초기화

  const totalScoreApiUrl = `${API_BASE_URL}/main/HOF-score/`;
  const badgeApiUrl = `${API_BASE_URL}/main/HOF-badge/`;

  const GoDetail = (service) => {
    navigate(`/Detail/${service.id}`);
  };

  useEffect(() => {
    const fetchTotalScoreData = async () => {
      try {
        const response = await axios.get(totalScoreApiUrl, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Total Score Data:", response.data);
        setRankingServices(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("총 별점 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    const fetchBadgeData = async () => {
      try {
        const response = await axios.get(badgeApiUrl, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Badge Data:", response.data);
        setBadgeServices(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("뱃지 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (API_BASE_URL) {
      fetchTotalScoreData();
      fetchBadgeData();
    }
  }, [API_BASE_URL]);

  return (
    <Styled.RankingPage>
      <Styled.Content>
        <Styled.Header>
          <Styled.Title>
            명예의 전당
            <Styled.Werath src={RankingImage} alt="RankingImage" />
          </Styled.Title>
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
            {rankingServices[0] && (
              <Styled.FirstPlace onClick={() => GoDetail(rankingServices[0])}>
                <Styled.FirstPlaceImage src={rankingServices[0].thumbnail_image || ""} alt={`Service ${rankingServices[0].id}`} />
                <Styled.FirstPlaceInfo>
                  <Styled.ServiceNameFirst>[{rankingServices[0].service_name || "Unknown Service"}]</Styled.ServiceNameFirst>
                  <Styled.ServiceDescriptionFirst>{rankingServices[0].intro || "서비스 한줄소개"}</Styled.ServiceDescriptionFirst>
                </Styled.FirstPlaceInfo>
              </Styled.FirstPlace>
            )}

            {/* 2, 3, 4, 5위 항목 */}
            <Styled.ServiceList>
              {[1, 2, 3, 4].map((index) => (
                <Styled.ServiceItem key={index} onClick={() => GoDetail(rankingServices[index])}>
                  <Styled.Rank>{index + 1}</Styled.Rank>
                  <Styled.ServiceImage src={rankingServices[index]?.thumbnail_image || ""} alt={`Service ${rankingServices[index]?.id || "Unknown"}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>[{rankingServices[index]?.service_name || "Unknown Service"}]</Styled.ServiceName>
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
            {rankingServices[0] && (
              <Styled.FirstPlace onClick={() => GoDetail(rankingServices[0])}>
                <Styled.FirstPlaceImage src={rankingServices[0].thumbnail_image || ""} alt={`Service ${rankingServices[0].id}`} />
                <Styled.FirstPlaceInfo>
                  <Styled.ServiceNameFirst>[{rankingServices[0].service_name || "Unknown Service"}]</Styled.ServiceNameFirst>
                  <Styled.ServiceDescriptionFirst>{rankingServices[0].intro || "서비스 한줄소개"}</Styled.ServiceDescriptionFirst>
                </Styled.FirstPlaceInfo>
              </Styled.FirstPlace>
            )}

            {/* 2, 3, 4, 5위 항목 */}
            <Styled.ServiceList>
              {[1, 2, 3, 4].map((index) => (
                <Styled.ServiceItem key={index} onClick={() => GoDetail(badgeServices[index])}>
                  <Styled.Rank>{index + 1}</Styled.Rank>
                  <Styled.ServiceImage src={badgeServices[index]?.thumbnail_image || ""} alt={`Service ${badgeServices[index]?.id || "Unknown"}`} />
                  <Styled.ServiceInfo>
                    <Styled.ServiceName>[{badgeServices[index]?.service_name || "Unknown Service"}]</Styled.ServiceName>
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
    </Styled.RankingPage>
  );
};

export default Ranking;
