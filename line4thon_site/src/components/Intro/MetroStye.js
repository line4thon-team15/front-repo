import styled, { css, keyframes } from 'styled-components';

export const MetroMap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 280px;
    width: calc(100vw - 280px);
    background-color: black;
    color: #fff;
    scroll-snap-align: start;
`;

export const RightBox = styled.div`

`

export const MetroLine = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 60px;
`

export const StationBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00A4E3;
    font-weight: 600;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #D9D9D9;
    border: 4px solid #00A4E3;
    border-radius: 20px;
    scroll-snap-align: center;
`