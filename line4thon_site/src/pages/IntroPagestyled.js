import styled, { css, keyframes } from 'styled-components';

export const IntroPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 98vh;
    background-color: black;
    color: white;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    border: 5px solid blue;
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
  height: calc(100vh - 320px);
  padding: 160px 100px;
  justify-content: center;
  gap: 40px;
  opacity: 0;
  animation: ${({firstTextVisible}) => firstTextVisible ? fadeIn : 'none'} 2s forwards;
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

export const NextIcon = styled.div`
  position: absolute;
  align-items: center;
  top: 80vh;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: black;
  border-radius: 20px;
`