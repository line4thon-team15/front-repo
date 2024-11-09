// MainPage.styled.js
import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y proximity;
`;
