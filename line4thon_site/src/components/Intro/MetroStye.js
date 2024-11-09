import styled, { css, keyframes } from 'styled-components';

export const MetroMap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 280px 0 280px 280px;
    width: calc(100vw - 280px);
    color: #fff;
    background-color: #1F1F1F;
    height: calc(100vh - 560px);
    scroll-snap-align: start;
`;

export const RightBox = styled.div`

`

export const MetroLine = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 160px;
    padding: 50px 80px;

    #line{
        position: absolute;
        background-color: #00A4E3;
        width: 10px;
        height: 97%;
        z-index: 0;
        top: 50px;
        left: 95px;
    }
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
    scroll-snap-stop: always;
    z-index: 1;

    ${({isActive}) =>
        isActive && 
        css`
            background-color: #7EFF65;
            transform: scale(1.3);
            border: 2px solid #00A4E3;
            transition: 1s;
        `}
`