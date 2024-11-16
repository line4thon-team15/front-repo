import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MA from "./MainAllServices.styled";
import * as A from "@/pages/AllServices.styled";
import ArrowrightBlue from "../assets/ArrowrightBlue.png";
import DefaultThumbnail from "../assets/defaultnail.png";
import axios from "axios";

const MainAllServices = ({ API_BASE_URL }) => {
  const [mainService, setMainService] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const GetMainService = async () => {
      try {
        const respons = await axios.get(`${API_BASE_URL}/main/recent`);
        setMainService(Array.isArray(respons.data) ? respons.data : []);
      } catch (error) {
        console.error("에러 메세지", error);
        setMainService([]);
      }
    };
    GetMainService();
  }, []);

  const handleNavigate = () => {
    navigate("/all-services");
  };

  return (
    <MA.MainAllPage>
      <MA.Title>
        <MA.TitleTop>
          <MA.Title1>
            <span className="singlequo">'</span>
            <span className="smalltitle1">4호선톤</span>
            <span className="singlequo">'의</span>
          </MA.Title1>
          <span className="smalltitle2">모든 서비스들</span>
        </MA.TitleTop>

        <MA.MoreInformation
          onClick={() => {
            handleNavigate();
          }}
        >
          <span className="moretext">더보기</span>
          <img src={ArrowrightBlue} alt="arrow icon" />
        </MA.MoreInformation>
      </MA.Title>
      <MA.MainCardGrid>
        {mainService.map((service) => (
          <A.ServiceCardAll key={service.id} onClick={() => GoDetail(service)}>
            <A.ServiceCard>
              <A.CardImage src={service.thumbnail_image || DefaultThumbnail} alt={`${service.service_name} 이미지`} />
            </A.ServiceCard>
            <A.CardText>
              <span className="service-name">[{service.service_name}]</span> by 팀 {service.team}
            </A.CardText>
          </A.ServiceCardAll>
        ))}
      </MA.MainCardGrid>
    </MA.MainAllPage>
  );
};

export default MainAllServices;
