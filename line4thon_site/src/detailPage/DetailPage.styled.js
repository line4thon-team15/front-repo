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
    width: cal(100%-200px);
    flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;

// Header with ThumbnailBox
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: cal(100%-200px);
    height: 600px;
    background-color: #BABABA;
`;

export const ThumbnailBox = styled.div`
    font-size: 100px;
    color: #FFFFFF;
    line-height: 119.34px;
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
export const ServicePhoto = styled.div`
    padding: 50px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`

export const ServicePhotoFile = styled.img`
    height: 150px;
    padding: 00px 20px 10px 80px;
`
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
`

export const UI = styled.img`
`

export const Loading = styled.img`
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
