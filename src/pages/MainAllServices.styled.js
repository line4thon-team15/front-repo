import styled from "styled-components";
import { Link } from "react-router-dom";

// Wrapper 스타일 정의
export const MainAllPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  width: calc(100% - 220px);
  margin-left: 200px;
  padding: 10px 10px;
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
// MoreInformation 스타일 정의
export const MoreInformation = styled.button`
  display: inline-flex;
  align-items: center;
  margin-top: 75px;
  margin-left: 15px;
  text-decoration: none;
  color: inherit;
  background-color: white;
  cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */

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

export const MainCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr)); /* 기본 2x2 레이아웃 */
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 40px 10px;
  justify-items: center;

  /* 작은 화면에서는 한 열에 하나씩 */
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  /* 큰 화면에서는 2x2 레이아웃 유지 */
  @media (min-width: 401) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
