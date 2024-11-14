import styled, { css, keyframes } from 'styled-components';


export const IntroPage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: black;
    color: white;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FirstText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 210px);
  padding: 70px 100px 160px 100px;
  justify-content: center;
  gap: 40px;
  opacity: 0;
  animation: ${({ firstTextVisible }) => firstTextVisible ? fadeIn : 'none'} 2s forwards;
  scroll-snap-align: start;


  div{
    width: 445px;
  }
  p{
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }
  h1{
    color: #FFF;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`
export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  transition: transform 0.1s ease-out;
  overflow: hidden;
  border-radius: ${({ scrollRatio }) => `${4 + scrollRatio * 3}px`};
  position: absolute;
  z-index: 2;
  top: ${({ scrollRatio }) => `${75 + scrollRatio * 53}vh`}; // 50vh에서 100vh까지 이동
  width: ${({ scrollRatio }) => `${30 * 5 + scrollRatio * 22 * 5}px`}; // 100px에서 200px로 확장
  height: ${({ scrollRatio }) => `${30 * 4 + scrollRatio * 22 * 4}px`}; // 100px에서 200px로 확장
  transform: ${({ scrollRatio }) => `scale(${1 + scrollRatio})`};
  box-shadow: rgba(100, 100, 100, 0.2) 0px 2px 20px;
 
  &:hover .overlay {
    opacity: 1;
  }

  &:hover .view-more-btn {
    opacity: 1;
    transform: translateY(0);
  }

  img{
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;

  }
  #descripCont{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    padding: 6px 10px;
  }
  .common-text {
    color: #FFF;
    font-family: Pretendard;
    line-height: normal;
  }
  #title{
    font-size: 13px;
    font-weight: 700;
  }
  #intro{
    font-size: 10px;
    font-weight:400;
  }
  #teamNum{
    font-size: 8px;
    font-weight: 200;
    color: #B9B9B9;
  }

`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); // 어두운 반투명 오버레이
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoReviewBtn = styled.button`
  opacity: 0;
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(20px); // 초기 위치를 살짝 아래로
  border-radius: 4px;

  &:hover {
    scale: 1.05;
    transition: 0.5s ease;
  }
`;

export const NextIcon = styled.div`
  position: absolute;
  align-items: center;
  top: 90vh;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: black;
  border-radius: 20px;
  z-index: 1;
`