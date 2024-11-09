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

// Header with ThumbnailBox
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 615px;
    background-color: #BABABA;
`;

export const ThumbnailBox = styled.div`
     margin-top: 50px;
    margin-left: 150px;
    justify-content: center;
    display: flex;
`;

export const ThumbnailImage = styled.img`
    width: 1000px;
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
    font-size: 35px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const Rating = styled.div`
    display: flex;
    flex-direction: row; /* 가로로 나란히 배치 */
    align-items: center; /* 수직 가운데 정렬 */
`;

export const RatingAsk = styled.div`
    padding: 0 10px 0 50px; /* 패딩 조정 */
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`;

export const RatingFive = styled.div`
    padding: 10px; 0 0 10px; /* 패딩 조정 */
    font-size: 10px;
    line-height: 25px;
    color: #77A71D;
`;

export const RatingSelect = styled.div`
    padding: 0 10px 0 60px; /* 패딩 조정 */
    font-size: 15px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const Find = styled.img`
    padding: 0 10px 0 50px; /* 패딩 조정 */

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
