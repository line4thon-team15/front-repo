import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./MainAllServices.styled";
import ArrowrightBlue from "../assets/ArrowrightBlue.png";

const MainAllServices = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Styled.TitleTop>
          <Styled.Title1>
            <span className="singlequo">'</span>
            <span className="smalltitle1">4호선톤</span>
            <span className="singlequo">'의</span>
          </Styled.Title1>
          <span className="smalltitle2">모든 서비스들</span>
        </Styled.TitleTop>

        <Link to="/all-services">
          <Styled.MoreInformation>
            <span className="moretext">더보기</span>
            <img src={ArrowrightBlue} alt="arrow icon" />
          </Styled.MoreInformation>
        </Link>
      </Styled.Title>
    </Styled.Wrapper>
  );
};

export default MainAllServices;
