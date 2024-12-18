import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

export const Content = styled.div`
  background-color: #f6f6f6;
  //   position: relative;
  margin-left: 200px;
  width: calc(100%-200px);
  flex-grow: 1; /* 콘텐츠가 남은 공간을 채우도록 설정 */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20%;
`;

export const Title = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 60px;
  font-weight: bold;
`;

export const ProfileBox = styled.div`
  background-color: #ffffff;
  width: 550px;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 5%;
`;

export const ProfileImage = styled.img`
  display: block;
  margin: 20px auto 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
`;

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

  cursor: pointer;
`;

export const ChangeImage = styled.img`
  margin-bottom: 8px;
`;

export const ChangeDefault = styled.img``;

export const MyProfileBox = styled.div``;

export const ProfileTitle = styled.div`
  margin: 30px 0 0 50px;
  font-size: 20px;
  font-weight: bold;
`;
export const ProfileContent = styled.div`
  margin: 10px 0 0 70px;
  line-height: 40px;
`;

export const Rank = styled.div``;
export const From = styled.div``;
export const Team = styled.div``;
export const ReviewBox = styled.div`
  background-color: #ffffff;
  width: 550px;
  height: 100%;
  border-radius: 10px;
`;
export const ReviewTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReviewTitle = styled.div`
  display: flex;
  margin: 30px 0 30px 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const UserReviewCount = styled.div`
  display: flex;
  padding: 30px 20px 10px 10px;
  color: #aaaaaa;
`;

export const Service = styled.div``;

export const ReviewList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ReviewService = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 70px;
  background-color: #ededed;
  border-radius: 10px;

  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ThumbnailPic = styled.div`
  margin-left: 10px;
  display: flex;
  width: 95px;
  height: 55px;
  border-radius: 5px;
  background-color: grey;

  img {
    border-radius: 10px;
  }
`;
export const ServiceTitle = styled.div`
  margin-left: 30px;
  font-weight: 500;
  font-size: 20px;
`;
export const Goservice = styled.img`
  margin-left: auto;
  margin-right: 30px; /* 오른쪽 여백을 약간 추가 */
  display: flex;
  align-items: center;

  cursor: pointer;
`;
