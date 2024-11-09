// MainPage.styled.js
import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({ $scrollPosition }) => ($scrollPosition > 300 ? 'white' : 'black')};
    transition: background-color 0.3s ease; // 배경색 전환을 부드럽게
`;
