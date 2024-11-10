import styled, { css, keyframes } from 'styled-components';

export const MetroMap = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 280px 15vw;
    width: calc(100vw - 30vw);
    color: #fff;
    background-color: #1F1F1F;
    height: calc(100vh - 560px);
    scroll-snap-align: start;

`;

export const Train = styled.img`
    width: 100px;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: absolute;
    bottom: 140px;
    left: -22px;
    ${({ isAnimating }) =>
        isAnimating
            ? css`
                animation: ${trainExit} 3s forwards;  // 기차 퇴장 애니메이션
            `
            : css`
                animation: ${trainEnter} 3s forwards;  // 기차 진입 애니메이션
            `}
`;

// 기차의 진입 애니메이션
const trainEnter = keyframes`
    from { transform: translateX(-250px); }
    to { transform: translateX(0); }
`;

// 기차의 퇴장 애니메이션
const trainExit = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(250px); }
`;

// 버튼 그룹의 진입 애니메이션
const groupEnter = keyframes`
    from { transform: translateX(250px); }
    to { transform: translateX(0); }
`;

// 버튼 그룹의 퇴장 애니메이션
const groupExit = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-250px); }
`;

export const MetroLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 50px 0px;
    margin-top: 50vh;

    #line{
        position: absolute;
        background-color: #00A4E3;
        width: 140vw;
        height: 10px;
        z-index: 0;
        bottom: 65px;
        left: -300px;
    }
`
export const GroupContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    ${({ isAnimating }) =>
        isAnimating
            ? css`
                animation: ${groupExit} 5s forwards;  // 버튼 그룹 퇴장 애니메이션
            `
            : css`
                animation: ${groupEnter} 5s forwards;  // 버튼 그룹 진입 애니메이션
            `}
`;

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