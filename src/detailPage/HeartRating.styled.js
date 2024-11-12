import styled from 'styled-components';

export const HeartContainer = styled.div`
    display: flex;
    align-items: center; /* 점수를 별 옆에 정렬 */
    gap: 8px;
    cursor: pointer;
    padding: 20px;
    margin-left: 20px;
    justify-content: center;
`;

export const Heart = styled.div`
    width: 50px;
    height: 50px;
    background-color: #E0E0E0;
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
    position: relative;

    ${({ filled }) =>
        filled === "true" &&
        `
        background-color: #D6FF22;
    `}

    ${({ halfFilled }) =>
        halfFilled === "true" &&
        `
        background: linear-gradient(to right, #D6FF22 50%, #E0E0E0 50%);
    `}
`;


export const Score = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
    color: #77A71D;
`;
