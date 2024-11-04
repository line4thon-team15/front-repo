<<<<<<< HEAD
import React from 'react';
import * as Styled from './AllServices.styled';
=======
import React from "react";
import * as Styled from "./AllServices.styled";
>>>>>>> e294bd7 ([feat]AllServices)

const AllServices = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Styled.TitleTop>
          <span className="singlequo">'</span>
          <span className="smalltitle1">4호선톤</span>
          <span className="singlequo">'</span>
        </Styled.TitleTop>

        <span className="smalltitle2">모든 서비스</span>
        <p className="subtitle">최고의 서비스를 위해 리뷰해주세요</p>
      </Styled.Title>

      <Styled.SearchBar>
        <img src="/path/to/search.png" alt="검색 아이콘" className="search-icon" />
        <input type="text" placeholder="서비스 명으로 검색해보세요" />
      </Styled.SearchBar>

      {/* 서비스 카드 그리드 */}
      <Styled.CardGrid>
        <Styled.ServiceCardAll>
          <Styled.ServiceCard>
            <Styled.CardImage src="/path/to/service-image.png" alt="서비스 이미지" />
          </Styled.ServiceCard>
          <Styled.CardText>
            <span className="service-name">[서비스명]</span> by 팀이름
          </Styled.CardText>
        </Styled.ServiceCardAll>
      </Styled.CardGrid>
    </Styled.Wrapper>
  );
};

export default AllServices;
