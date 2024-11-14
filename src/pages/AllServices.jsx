import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./AllServices.styled";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Search from "../assets/Search.png";
import axios from "axios";

const AllServices = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    axios
      .get("https://4thline.kr/services/4line-services")
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

  return (
    <Styled.Wrapper>
      <Header isWhiteBackground={true} />
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
        <img src={Search} alt="검색 아이콘" className="search-icon" />
        <input type="text" placeholder="서비스 명으로 검색해보세요" />
      </Styled.SearchBar>

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
      <Footer />
    </Styled.Wrapper>
  );
};

export default AllServices;
