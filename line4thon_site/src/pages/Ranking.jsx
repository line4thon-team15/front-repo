import React from "react";
import * as Styled from "./Ranking.styled";

const Ranking = () => {
  // 각 부문과 서비스 목록은 추후 API 데이터로 대체할 예정입니다.
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Header>
          <Styled.Title>명예의 전당</Styled.Title>
          <Styled.Subtitle>최고의 서비스를 랭킹별로 만나보세요</Styled.Subtitle>
        </Styled.Header>

        <Styled.Section>
          <Styled.SectionTitle>총 별점 부문</Styled.SectionTitle>
          <Styled.ServiceList>
            {[1, 2, 3, 4, 5].map((rank) => (
              <Styled.ServiceItem key={rank}>
                <Styled.Rank>{rank}</Styled.Rank>
                <Styled.ServiceImage src={`/path/to/image-${rank}.png`} alt={`Service ${rank}`} />
                <Styled.ServiceInfo>
                  <Styled.ServiceName>서비스 {rank}</Styled.ServiceName>
                  <Styled.ServiceDetails>상세 정보</Styled.ServiceDetails>
                </Styled.ServiceInfo>
              </Styled.ServiceItem>
            ))}
          </Styled.ServiceList>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>뱃지 부문</Styled.SectionTitle>
          <Styled.ServiceList>
            {[1, 2, 3, 4, 5].map((rank) => (
              <Styled.ServiceItem key={rank}>
                <Styled.Rank>{rank}</Styled.Rank>
                <Styled.ServiceImage src={`/path/to/image-${rank}.png`} alt={`Service ${rank}`} />
                <Styled.ServiceInfo>
                  <Styled.ServiceName>서비스 {rank}</Styled.ServiceName>
                  <Styled.ServiceDetails>상세 정보</Styled.ServiceDetails>
                </Styled.ServiceInfo>
              </Styled.ServiceItem>
            ))}
          </Styled.ServiceList>
        </Styled.Section>

        <Styled.AllServicesSection>
          <Styled.SectionTitle>'4호선 톤'의 모든 서비스들</Styled.SectionTitle>
          <Styled.ServiceList>
            {[1, 2, 3, 4, 5].map((rank) => (
              <Styled.ServiceItem key={rank}>
                <Styled.ServiceImage src={`/path/to/image-${rank}.png`} alt={`Service ${rank}`} />
                <Styled.ServiceInfo>
                  <Styled.ServiceName>서비스 {rank}</Styled.ServiceName>
                  <Styled.ServiceDetails>상세 정보</Styled.ServiceDetails>
                </Styled.ServiceInfo>
              </Styled.ServiceItem>
            ))}
          </Styled.ServiceList>
        </Styled.AllServicesSection>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Ranking;
