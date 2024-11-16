import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./AllServices.styled";
import * as DT from "@/detailPage/DetailPage.styled";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Reloading from "../assets/Reloading2.png";
import axios from "axios";

const AllServices = ({ API_BASE_URL }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("인기순"); // 기본값을 '인기순'으로 설정
  const [searchTerm, setSearchTerm] = useState("");

  const handleSorting = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    let sortedServices;
    switch (option) {
      case "인기순":
        sortedServices = [...services].sort((a, b) => b.review_cnt - a.review_cnt);
        break;
      case "높은 평점 순":
        sortedServices = [...services].sort((a, b) => b.score_average - a.score_average);
        break;
      case "낮은 평점 순":
        sortedServices = [...services].sort((a, b) => a.score_average - b.score_average);
        break;
      case "최신순":
        sortedServices = [...services].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      default:
        sortedServices = services;
        break;
    }

    setFilteredServices(sortedServices);
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/services/4line-services`)
      .then((response) => {
        setServices(response.data);
        setFilteredServices(response.data); // 초기에는 전체 서비스 표시
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, [API_BASE_URL]);

  const handleSearchChange = (event) => {
    const lowercasedSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(lowercasedSearchTerm);

    const filtered = services.filter((service) => {
      const serviceText = `${service.service_name} by ${service.team}팀`.toLowerCase();
      return lowercasedSearchTerm.split("").some((char) => serviceText.includes(char));
    });
    setFilteredServices(filtered);
  };

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

        <div id="SearchContainner">
          <div style={{ width: "120px" }}></div>

          <Styled.SearchBar>
            <img src={Reloading} alt="검색 아이콘" className="search-icon" onClick={() => navigate(0)} />
            <input type="text" placeholder="서비스 명으로 검색해보세요" value={searchTerm} onChange={handleSearchChange} />
          </Styled.SearchBar>

          <DT.DropdownWrapper style={{ margin: "0", width: "125px", display: "flex", justifyContent: "flex-end" }}>
            <DT.DropdownButtonBox onClick={toggleDropdown} style={{ margin: "0", BackgroundColor: "yellow" }}>
              <DT.DropdownButton>{selectedOption}</DT.DropdownButton>
              <DT.StyledArray>▼</DT.StyledArray>
            </DT.DropdownButtonBox>
            <DT.DropdownMenu isOpen={isOpen}>
              <DT.DropdownItem onClick={() => handleSorting("인기순")}>인기순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting("최신순")}>최신순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting("높은 평점 순")}>높은 평점 순</DT.DropdownItem>
              <DT.DropdownItem onClick={() => handleSorting("낮은 평점 순")}>낮은 평점 순</DT.DropdownItem>
            </DT.DropdownMenu>
          </DT.DropdownWrapper>
        </div>

        <Styled.CardGrid>
          {filteredServices.map((service) => (
            <Styled.ServiceCardAll key={service.id} onClick={() => GoDetail(service)}>
              <Styled.ServiceCard>
                <Styled.CardImage src={service.thumbnail_image} alt={`${service.service_name} 이미지`} />
              </Styled.ServiceCard>
              <Styled.CardText>
                <span className="service-name">[{service.service_name}]</span> by {service.team}팀
              </Styled.CardText>
            </Styled.ServiceCardAll>
          ))}
        </Styled.CardGrid>
      </Styled.Wrapper>
      <Footer />
    </Styled.AllServices>
  );
};

export default AllServices;
