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
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;`;

export const ThumbnailImage = styled.img`
    width: 700px;
    height: auto; /* 이미지의 비율을 유지 */
`;

export const Line = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, #00A4E3 0%, #00A4E3 22.5%, #3F89A6 100%);
    position: relative; /* Make Line a relative positioning reference */
`;

export const NameBox = styled.div`
    width: 582px;  
    height: auto;
    min-width: 420px;
    padding: 20px 30px;
    border-radius: 100px;
    background: linear-gradient(90deg, #FFFFFF 53.5%, #1BFFF4 100%);
    border: 10px solid #00A4E3;
    display: flex;
    align-items: center; /* Align items horizontally */
    opacity: 1;
    margin-left: 100px;
    position: absolute;
    top: -50px;
`;

export const TeamCircle = styled.div`
    width: 59px;
    height: 59px;
    border-radius: 100px;
    background: linear-gradient(90deg, #01A5E4 0%, #77DAFF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px; /* Space between TeamCircle and Name */
`;

export const TeamNum = styled.div`
    font-size: 35px;
    color: white;
`;

export const Name = styled.div`
    display: flex;
    flex-direction: column; /* Stack NameText and OneLine vertically */
`;

export const NameText = styled.div`
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: black;
`;

export const OneLine = styled.div`
    font-size: 20px; /* Optional smaller font size for OneLine */
    color: gray;
    margin-top: 10px; /* Space between NameText and OneLine */
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
`

export const TotalStar = styled.div`
    margin-left: 83%;
    margin-top: 50px;
    position: absolute; /* 위치를 상대적으로 지정 */
    font-size: 25px;
`

export const VisitServiceButton = styled.div`
    margin-left: 90%;
    margin-top: 40px;
    position: absolute; /* 위치를 상대적으로 지정 */
    font-size: 22px;
    padding: 10px;
    width: 120px;
    height: 25px;
    border-radius: 10px;
    background-color: #0033FF;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Arrowcircleright = styled.img`
    height: 17px;
    padding: 5px 5px 5px 0px;
`
export const VisitService = styled.div`
    color: white;
    font-size: 17px;
`

export const ServiceContent = styled.div`
    padding: 100px 20px 20px 80px;
    font-size: 20px;
    line-height: 30px;
    color: black;
`
export const TeamMember = styled.div`
    padding: 40px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const Member = styled.div`
    margin-top: 10px;
    margin-left: 70px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 10px;
    border-radius: 20px;
    font-size: 18px;
    line-height: 25px;
    background-color: #696969; 
    color: white;
`

export const ServicePhotoBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const ServicePhoto = styled.div`
    padding: 48px 0px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const PhotoCount = styled.div`
    padding: 50px 20px 10px 10px;
    color: #45DB00;

`
// 모달 스타일 추가
export const FullScreenModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    color: white;
    cursor: pointer;
`;

export const ModalImage = styled.img`
    height: 500px;
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
`;

export const ThumbnailList = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    max-height: 80vh;
`;

export const Thumbnail = styled.img`
    width: 200px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;

// 기존 스타일
export const PhotoBox = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 0px 20px 10px 80px;
`;

export const ExImage = styled.img`
    height: 150px;
    margin-right: 20px;
    cursor: pointer;
`;
export const Feedback = styled.div`
    padding: 50px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const RankingBox = styled.div`
    padding: 20px 20px 10px 80px;
    margin-left: 80px;
    width: 79%;
    height: 200px;
    border-radius: 10px;
    border: 1.5px solid #B0B0B0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Ask = styled.div`
    padding: 10px 0;
    color: black;
    text-align: center;
    font-weight: bold;
`
export const Star = styled.div`
    padding: 10px 0 20px;
    font-size: 30px;
    color: black;
    text-align: center;
    letter-spacing: 10px; /* Adjust spacing as needed */

`
export const WriteReviewButton = styled.div`
    padding: 10px;
    width: 130px;
    height: 25px;
    border-radius: 10px;
    background-color: #0033FF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const WriteReview = styled.div`
    color: white;
    font-size: 17px;
`


export const UserReview = styled.div`
    padding: 40px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const ReviewList = styled.div`
    padding: 10px 20px 10px 100px;

`

export const ReviewContent = styled.div`
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* UserPic와 UserNameBox가 수직으로 정렬되도록 설정 */
    gap: 10px; /* 요소 간 간격 조정 */
`

export const UserPic = styled.img`
    width: 50px;
    display: flex;
    flex-direction: column;
`
export const UserGap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Pushes UserReviewInfo to the right */
    gap: 10px; /* Space between UserPic and UserNameBox */
    width: 80%; /* Ensures it spans the full width of the container */
`

export const UserNameBox = styled.div`
    display: flex;  
    flex-direction: column;
`

export const UserName = styled.div`
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const UserInfo = styled.div`
    font-size: 16px;
    line-height: 25px;
    color: #A5A5A5;
`

export const UserReviewInfo = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border: 1.5px solid #B0B0B0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const UserStar = styled.div`
`



export const ReviewKeyword = styled.div`
    padding: 10px 20px 10px 0px;
`

export const Design = styled.img`
    padding: 10px 10px 0px 0px;

`

export const UI = styled.img`
    padding: 8px 10px 0px 0px;

`

export const Loading = styled.img`
    padding: 0px 10px 0px 0px;

`


export const UserReviewContent = styled.div`
    padding: 10px 20px 10px 10px;

`
export const HeartBox = styled.div`
    padding: 10px 20px 20px 10px;
    display: flex;
    flex-direction: colunm;
    align-items: center;

`

export const HeartButton = styled.img`
`

export const HeartCount = styled.div`
    padding: 0px 0px 0px 10px;

`
