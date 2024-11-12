import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export const Content = styled.div`
    background-color: #F6F6F6;
    position: relative;  /* absolute에서 relative로 변경 */
    margin-left: 200px;  
    width: calc(100%-200px);
    flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;

`

export const Title = styled.div`
    text-align: center;
    padding: 40px;
    font-size: 60px;
    font-weight: bold;
`

export const ProfileBox = styled.div`
    background-color: #FFFFFF;
    width: 550px;
    height: 500px;
    border-radius: 10px;
    margin-bottom: 5%;

`
export const ProfileImage = styled.img`
    margin: 10px 0 0 31%;

`
export const Top = styled.div`
    display: flex;
    justify-content: center; /* Top의 자식 요소를 가로로 중앙 정렬 */
    align-items: center;    
    padding-top: 20px;
    margin-left: 30%;
`;

export const Namebox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-right: 70px; /* Changebox와 Namebox 사이의 간격 조절 */
`;

export const Name = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const ID = styled.div`
    font-size: 18px;
    color: #888888;
`;

export const Changebox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ChangeImage = styled.img`
    margin-bottom: 8px;
`;

export const ChangeDefault = styled.img`
`;

export const MyProfileBox = styled.div`
`

export const ProfileTitle = styled.div`
    margin: 30px 0 0 50px;
    font-size: 20px;
    font-weight: bold;
`
export const ProfileContent = styled.div`
    margin: 10px 0 0 70px;
    line-height: 40px;
`

export const Rank = styled.div`
`
export const From = styled.div`
`
export const Team = styled.div`
`
export const ReviewBox = styled.div`
    background-color: #FFFFFF;
    width: 550px;
    height: 350px;
    border-radius: 10px;

`
export const ReviewTitle = styled.div`
    margin: 30px 0 0 30px;
    font-size: 20px;
    font-weight: bold;
`