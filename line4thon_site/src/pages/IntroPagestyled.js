import styled, { css, keyframes } from 'styled-components';

// Wrapper 스타일 정의
export const IntroPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 4000px;
    background-color: black;

    color: white;
`;

export const Logo = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 50px;
  height: 50px;
  background-color: skyblue;
  color: #fff;
  border-radius: 50%;
  transform: translate(${props => props.x}px, ${props => props.y}px);
  transition: transform 0.1s ease-out;
`;

export const AnimatedDiv = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0;
  background-color: coral;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;