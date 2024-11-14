import styled from "styled-components";
import { Link } from "react-router-dom";

// Wrapper 스타일 정의
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  height: calc(100% - 120px);
  background-color: #e9ecef;
`;

// MenuBar 스타일 정의
export const MenuBar = styled.div`
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  background-color: white;
  text-align: center;
  font-weight: bold;
`;

// Title 스타일 정의
export const Title = styled.div`
  display: flex;
  flex-direction: row;
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
