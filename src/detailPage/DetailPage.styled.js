import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: relative;  /* absolute에서 relative로 변경 */
    margin-left: 300px;  
    margin-bottom: 80px;
    width: calc(100%-300px);
    flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;

export const Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: min-content;
    max-height: 500px;
    background-color: #BABABA;
    align-items: center; /* Header의 가로 가운데 정렬 */
    justify-content: center; /* Header의 세로 가운데 정렬 */
`;

export const ThumbnailBox = styled.div`
    color: #FFFFFF;
    width: 100%;
    display: flex;
    height: min-content;
    min-height: 200px;
    justify-content: center;
    align-items: center;
`

export const ThumbnailImage = styled.img`
    width: 100%;
    height: auto; /* 이미지의 비율을 유지 */
    max-height: 500px;
    object-fit: cover;
`;

export const Line = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, #00A4E3 0%, #00A4E3 22.5%, #3F89A6 100%);
    position: absolute; /* Make Line a relative positioning reference */
    bottom: 0;
`;

export const NameBox = styled.div`
    width: min-content;  
    height: auto;
    min-width: 380px;
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

export const WholeContent = styled.div`
    max-width: 1200px;
    padding: auto;
`

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 30px 60px;
    align-items: center;
`


export const GreenStar = styled.img`
    display: flex;
    width: 45px;
    margin-right: 10px;

`

export const TotalStar = styled.div`
    display: flex;
    font-size: 25px;
`

export const VisitServiceButton = styled.img`
    height: 50px;
    border-radius: 10px;
    display: flex;
    margin-left: 30px;
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
    width: 82%;
    padding: 50px 20px 20px 100px;
    font-size: 20px;
    line-height: 40px;
    color: black;
`
export const TeamMember = styled.div`
    padding: 40px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const Members = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Add this if you want the boxes to wrap to a new line when they overflow */
    width: 80%;
    gap: 10px;
    margin-left: 80px;

`
export const Member = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 5px 15px;
    align-items: center;
    justify-content: center;
    width: auto;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 200;
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
    padding: 0px 70px 10px 80px;
    width: 80%;
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
export const Star = styled.img`
    padding: 10px 0 20px;
`
export const WriteReviewButton = styled.img`
    height: 40px;
    cursor: pointer;
`

export const WriteReview = styled.div`
    color: white;
    font-size: 17px;
`
export const UserReviews = styled.div`
    display: flex;
    flex-direction: row;
`

export const UserReview = styled.div`
    padding: 48px 0px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const UserReviewCount = styled.div`
    padding: 50px 20px 10px 10px;
    color: #45DB00;
`

export const ReviewList = styled.div`
    padding: 10px 20px 10px 100px;

`

export const ReviewContent = styled.div`
    margin: 30px 0 30px 70px;
    width: 85%;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 자식 요소들을 양쪽 끝으로 정렬 */
    width: 100%;
`

export const UserPic = styled.img`
    width: 50px;
    display: flex;
    flex-direction: column;
`

export const UserNameBox = styled.div`
    display: flex;  
    flex-direction: column;
    margin: 0 0 0 10px;
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

export const UserStarBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #908E8E80;
    border-radius: 10px;
    width: 65px;
    height: 30px;
    gap: 10px;
    margin-left: auto; /* 오른쪽으로 정렬되도록 설정 */
    justify-content: center;
`

export const UserStar = styled.img`
    display: flex;
    width: 20px;
`
export const ScoreNum = styled.div`
    display: flex;
    text-align: center;
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
    line-height: 25px;

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
