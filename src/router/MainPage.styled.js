// MainPage.styled.js
import styled from 'styled-components';

export const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100vh;
    scroll-snap-type: y proximity;
`