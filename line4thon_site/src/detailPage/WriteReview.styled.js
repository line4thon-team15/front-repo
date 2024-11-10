import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export const Content = styled.div`
    background-color: white;
    position: relative;  /* absolute에서 relative로 변경 */
    margin-left: 200px;  
    width: calc(100%-200px);
    flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 615px;
    background-color: #BABABA;
    align-items: center; /* Header의 가로 가운데 정렬 */
    justify-content: center; /* Header의 세로 가운데 정렬 */
`;

export const ThumbnailBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThumbnailImage = styled.img`
    width: 700px;
    height: auto; /* 이미지의 비율을 유지 */
`;

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
    width: 100%;
    height: 100%;
    padding: 40px 0; /* Adds spacing above and below InfoBox */
`;

export const InfoBox = styled.div`
    padding: 20px;
    background-color: #FFFFFF;
    width: 95%;
    max-width: 80%; /* Optional: set a max width for better responsiveness */
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visual separation */
    margin: 20px 0; /* Adds additional margin to ensure spacing */
`;

export const InfoTitle = styled.div`
    padding: 50px 50px 30px 50px;
    text-align: center;
    font-size: 30px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const Rating = styled.div`
    display: flex;
    flex-direction: row; /* 가로로 나란히 배치 */
`;

export const RatingAsk = styled.div`
    padding: 20px 10px 30px 50px; /* 패딩 조정 */
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`;

export const RatingFive = styled.div`
    padding: 20px; 0 0 10px; /* 패딩 조정 */
    font-size: 13px;
    line-height: 25px;
    color: #77A71D;
`;

export const RatingBox = styled.div`
    display: flex;
    gap: 20px; /* 필요에 따라 간격 조정 */
`
export const RatingBox1 = styled.div`
    display: flex;
    flex-direction: column;
`


export const RatingSelect = styled.div`
    padding: 0 10px 0 68px; /* 패딩 조정 */
    font-size: 15px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const Find = styled.img`
    padding: 10px 10px 10px 65px; /* 패딩 조정 */
    height: 40px;

`

export const Simple = styled.img`
    padding: 0 10px 10px 32px; /* 패딩 조정 */
    height: 40px;

`

export const Easy = styled.img`
    padding: 0 10px 10px 28px; /* 패딩 조정 */
    height: 40px;

`
export const Design = styled.img`
    padding: 0 10px 10px 0px; /* 패딩 조정 */
    height: 40px;

`

export const Ui = styled.img`
    padding: 0 10px 10px 0px; /* 패딩 조정 */
    height: 40px;

`

export const Feedback = styled.img`
    padding: 0 10px 10px 0px; /* 패딩 조정 */
    height: 40px;

`

export const RatingBox2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const RatingSelect2 = styled.div`
    padding: 0 10px 0 75px; /* 패딩 조정 */
    font-size: 15px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const Idea = styled.img`
    padding: 10px 0px 10px 30px; /* 패딩 조정 */
    height: 40px;

`
export const Reuse = styled.img`
    padding: 0 0px 10px 70px; /* 패딩 조정 */
    height: 40px;

`
export const Loading = styled.img`
    padding: 0 0px 10px 0px; /* 패딩 조정 */
    height: 40px;

`
export const Want = styled.img`
    padding: 0 0px 10px 75px; /* 패딩 조정 */
    height: 40px;

`

export const WriteReviewAsk = styled.div`
    padding: 40px 10px 0 50px; /* 패딩 조정 */
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`;

export const ReviewInputContainer = styled.div`
    position: relative;
`;

export const InputContainer = styled.div`
    position: relative;
    width: 90%;
    margin: 0 0 16px 00px;
`;

export const WriteReviewInput = styled.input`
    width: 100%;
    height: 180px;
    font-size: 16px;
    border: 1px solid #F6F6F6;
    border-radius: 5px;
    margin: 5px 0 0px 50px;
    background-color: #F6F6F6;
    padding: 16px;
    box-sizing: border-box;
    resize: none;

`

export const CharCount = styled.div`
    position: absolute;
    bottom: 30px;
    right: 0px;
    font-size: 12px;
    color: #888;
`;

export const ColoredLength = styled.span`
    color: #7BC217; /* 원하는 색상으로 설정 */
`;


export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
`

export const GoBack = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 50px 20px 10px 50px;
    font-size: 25px;
`

export const SignUp = styled.div`
    display: flex;
    align-items: center;
    position: absolute; /* 위치를 상대적으로 지정 */
    padding: 10px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: #0033FF;
    justify-content: center;
    cursor: pointer;
    color: white;
    margin-top: 30px;
    margin-left: 68%;
`
