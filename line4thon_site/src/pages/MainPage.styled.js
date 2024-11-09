import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    overflow: auto;
    scroll-snap-type: y proximity;

    /* border: 10px solid yellow; */
`;

// Menubar 스타일 정의
export const MenuBar = styled.div`
    font-size: 1rem;
`;

export const ContentWrapper = styled.div`
`;
