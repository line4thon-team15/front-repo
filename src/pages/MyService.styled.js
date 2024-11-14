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
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: #BABABA;
`;

export const MyServiceInfoButton = styled.div`
    margin-left: 83%;
    background-color: #FFD64D;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    position: absolute; /* 위치를 상대적으로 지정 */
    top: 60px; /* Distance from the top of the header */
`


export const Thumbnail = styled.div`
    margin-top: 50px;
    margin-left: 150px;
    justify-content: center;
    display: flex;
`

export const ThumbnailImage = styled.img`
    width: 900px;

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

export const Top = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    width: 87%;
`

export const ServiceContent = styled.div`
    padding: 100px 20px 20px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
`

export const Visit = styled.img`
    width: 150px;
    margin-top: 60px;
    margin-left: auto; /* 오른쪽으로 밀어내기 */
`

export const TeamMember = styled.div`
    padding: 40px 20px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const Member = styled.div`
    padding: 10px 20px 50px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
`


export const ServicePhotoBox = styled.div`
    display: flex;
    align-items: center;
`

export const ServicePhoto = styled.div`
    padding: 20px 10px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const ServicePhotoCount = styled.div`
    padding: 15px 20px 10px 0px;
    color: #45DB00;

`
export const ServicePhotoFile = styled.img`
    height: 150px;
    padding: 00px 20px 10px 80px;
`
export const Feedback = styled.div`
    padding: 60px 20px 20px 80px;
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
    color: #AAAAAA;
    text-align: center;
    letter-spacing: 10px; /* Adjust spacing as needed */

`
export const WriteReviewButton = styled.div`
    padding: 10px;
    width: 120px;
    height: 25px;
    border-radius: 10px;
    background-color: #0033FF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Arrowcircleright = styled.img`
    height: 17px;
    padding: 5px 5px 5px 0px;
`
export const WriteReview = styled.div`
    color: white;
    font-size: 17px;
`
export const UserReviewBox = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
`
export const UserReview = styled.div`
    padding: 40px 10px 10px 80px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    font-weight: bold;
`
export const UserReviewCount = styled.div`
    padding: 40px 20px 10px 0px;
    color: #ACA9A9;
    font-size: 20px;
`


export const DropdownWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: auto;
`;

export const DropdownButtonBox = styled.button`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
   
`
export const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const DropdownMenu = styled.ul`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    right: 0; /* 오른쪽 끝을 DropdownWrapper에 고정 */
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100px;
    z-index: 1000;
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`;

export const StyledArray = styled.div`
    padding: 10px 0px 10px 10px;
    cursor: pointer;
    width: 16px;
    color: #AAAAAA;
`;


export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 0px;
`

export const NoReview = styled.div`
    padding: 20px 20px 10px 0px;
    font-size: 20px;
    color: black;
    
`
export const WriteFirst = styled.div`
    padding: 10px 20px 20px 0px;
    font-size: 15px;
    color: black;
`
export const ThoughtfulMan = styled.img`
    height: 150px;
    padding: 00px 20px 50px 0px;
`
