import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./AllServices.styled";
import * as DT from '@/detailPage/DetailPage.styled';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Search from "../assets/Search.png";
import axios from "axios";

const AllServices = ({API_BASE_URL}) => {
  const [services, setServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('인기순'); // 기본값을 '인기순'으로 설정

  const handleSorting = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  
    let sortedServices;
    switch (option) {
      case '인기순':
        // review_cnt 기준으로 내림차순 정렬
        sortedServices = [...services].sort((a, b) => b.review_cnt - a.review_cnt);
        break;
      case '높은 평점 순':
        // score_average 기준으로 내림차순 정렬
        sortedServices = [...services].sort((a, b) => b.score_average - a.score_average);
        break;
      case '낮은 평점 순':
        // score_average 기준으로 오름차순 정렬
        sortedServices = [...services].sort((a, b) => a.score_average - b.score_average);
        break;
      case '최신순':
        // created_at 기준으로 최신순 정렬
        sortedServices = [...services].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      default:
        sortedServices = services;
        break;
    }
  
    setServices(sortedServices);
  };



  const navigate = useNavigate();

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    axios
      .get(`${API_BASE_URL}/services/4line-services`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const GoDetail = (service) => {
    navigate(`/Detail/${service.id}`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.AllServices>
      <Header isWhiteBackground={true} />
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

        <div id='SearchContainner'>
          <div style={{width: '120px'}}></div>
          <Styled.SearchBar>
            <img src={Search} alt="검색 아이콘" className="search-icon" />
            <input type="text" placeholder="서비스 명으로 검색해보세요" />
          </Styled.SearchBar>

          <DT.DropdownWrapper style={{margin: '0', width: '125px', display: 'flex', justifyContent: 'flex-end'  }}>  {/* 토글 버튼 */}
            <DT.DropdownButtonBox onClick={toggleDropdown} style={{margin: '0', BackgroundColor: 'yellow' }} >
              <DT.DropdownButton>
                {selectedOption}
              </DT.DropdownButton>
              <DT.StyledArray>▼</DT.StyledArray>
            </DT.DropdownButtonBox>
            <DT.DropdownMenu isOpen={isOpen}>
              <DT.DropdownItem onClick={() => handleSorting('인기순')}>인기순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting('최신순')}>최신순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting('높은 평점 순')}>높은 평점 순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting('낮은 평점 순')}>낮은 평점 순</DT.DropdownItem>
            </DT.DropdownMenu>
          </DT.DropdownWrapper>
        </div>

        {/* 서비스 카드 그리드 */}
        <Styled.CardGrid>
          {services.map((service) => (
            <Styled.ServiceCardAll key={service.id} onClick={() => GoDetail(service)}>
              <Styled.ServiceCard>
                <Styled.CardImage src={service.thumbnail_image} alt={`${service.service_name} 이미지`} />
              </Styled.ServiceCard>
              <Styled.CardText>
                <span className="service-name">[{service.service_name}]</span> by 팀 {service.team}
              </Styled.CardText>
            </Styled.ServiceCardAll>
          ))}
        </Styled.CardGrid>

      </Styled.Wrapper>
      <Footer />
    </Styled.AllServices >
  );
};

export default AllServices;
