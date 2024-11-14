import styled from "styled-components";
import { Link } from "react-router-dom";

// Wrapper 스타일 정의
export const MainAllPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: calc(100% - 220px);
  margin-left: 200px;
  padding: 40px 10px;
  scroll-snap-align: start;
`;

// Title 스타일 정의
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 20px 0;
  font-family: Arial, sans-serif;

  .singlequo {
    font-size: 35px;
    font-weight: bold;
  }

  .smalltitle1 {
    font-size: 35px;
    font-weight: bold;
  }

  .smalltitle2 {
    font-size: 55px;
    font-weight: bold;
    color: black;
  }
`;

export const TitleTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

// MoreInformation 스타일 정의
export const MoreInformation = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 75px;
  margin-left: 15px;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
  }

  .moretext {
    font-size: 18px;
    color: black;
    margin-right: 5px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
