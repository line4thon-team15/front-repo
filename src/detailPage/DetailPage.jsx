import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./DetailPage.styled";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import URLvisitBtn from "../assets/URLvisitBtn.svg";
import greenStar from "../assets/greenStar.svg";
import fiveStars from "../assets/fiveStars.svg";
import writeFeedbackbtn from "../assets/writeFeedbackbtn.svg";
import easy from "../assets/easy.svg";
import simple from "../assets/simple.png";
import errorfree from "../assets/errorfree.svg";
import design from "../assets/design.svg";
import growth from "../assets/growth.svg";
import feedback from "../assets/feedback.svg";
import basic from "../assets/basic.svg";
import reuse from "../assets/reuse.jpg";
import loading from "../assets/loading.svg";
import original from "../assets/original.svg";
import ThumbnailTotal from "../assets/ThumbnailTotal.svg";
import disableVisit from "../assets/disableVisit.svg";
import thoughtfulMan from "../assets/thoughtfulMan.svg";
import infoVector from '../assets/infoVector.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";

const DetailPage = ({ API_BASE_URL }) => {
  const navigate = useNavigate();
  const { isAuthenticated, accessToken } = useAuth();
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("인기순");
  const [likeStatus, setLikeStatus] = useState({});
  const [myReview, setMyReview] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const { teamId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 토큰 확인
    console.log(token);

      const fetchData = async () => {
        const token = localStorage.getItem("accessToken"); // 토큰 확인
        console.log(token);

        if (!token) {
          alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
          navigate("/login");
          return;
        }

        try {
          const response = await axios.get(`${API_BASE_URL}/services/4line-services/${teamId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${accessToken}`, // 인증 토큰 추가
              },
            });
// 서비스 데이터 및 좋아요 상태 설정
const serviceData = response.data;
setServiceData(serviceData);
console.log("받아온 서비스 데이터:", serviceData);
console.log("받아온 리뷰 데이터:", serviceData.review);



// 작성자의 리뷰 찾기
if (serviceData.review?.length > 0) {
  const myReviewData = serviceData.review.find((review) => review.is_writer);
  if (myReviewData) {
    console.log("작성자의 리뷰를 찾았습니다:", myReviewData);
    setMyReview(myReviewData);
  } else {
    console.log("작성자의 리뷰를 찾을 수 없습니다.");
    setMyReview(null);
  }
} else {
  console.log("리뷰 데이터가 비어 있습니다.");
  setMyReview(null);
}

// 디버깅: 각 리뷰 데이터 확인
serviceData.review?.forEach((review, index) => {
  console.log(`리뷰 ${index + 1}:`, review);
});

// 좋아요 상태 초기화
const initialLikeStatus = (serviceData.review || []).reduce((status, review) => {
  status[review.id] = {
    is_liked: !!review.is_liked, // 명시적으로 true/false 설정
    likes_count: review.likes_count || 0, // 기본값 설정
  };
  return status;
}, {});
setLikeStatus(initialLikeStatus);

// 디버깅: 초기 상태 확인
console.log("초기화된 likeStatus:", initialLikeStatus);

  // 현재 사용자 서비스 ID 확인
  const userServiceResponse = await axios.get(`${API_BASE_URL}/services/my-service`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, // 인증 토큰 추가
      },
    });

  console.log("현재 사용자 서비스 데이터:", userServiceResponse.data);

        // 소유자 확인 로직
        const isOwnerCheck = Array.isArray(userServiceResponse.data)
        ? userServiceResponse.data.some((service) => String(service.id) === String(serviceData.id))
        : String(userServiceResponse.data.id) === String(serviceData.id);

      if (isOwnerCheck) {
        console.log("사용자가 서비스의 소유자입니다.");
        setIsOwner(true);
      } else {
        console.log("사용자가 서비스의 소유자가 아닙니다. 확인 데이터:", {
          userService: userServiceResponse.data,
          serviceId: serviceData.id,
        });
        setIsOwner(false);
      }
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false); // 데이터 로드 완료 후 로딩 상태 업데이트
    }
  };


  
  fetchData();
}, [API_BASE_URL, teamId, accessToken]);

const handleLikeClick = async (reviewId) => {
  if (!isAuthenticated) {
    alert("로그인 후 좋아요를 누를 수 있습니다.");
    return;
  }

  try {
    const currentStatus = likeStatus[reviewId];
    const updatedIsLiked = !currentStatus.is_liked;

    // 로컬 상태를 먼저 업데이트
    setLikeStatus((prevStatus) => {
      const updatedStatus = {
        ...prevStatus,
        [reviewId]: {
          is_liked: updatedIsLiked,
          likes_count: updatedIsLiked
            ? currentStatus.likes_count + 1
            : currentStatus.likes_count - 1,
        },
      };
    
      // 디버깅: 업데이트된 상태 확인
      console.log("업데이트된 likeStatus:", updatedStatus);
      return updatedStatus;
    });
    

    // 서버에 좋아요 상태 전송
    const response = await axios.post(
      `${API_BASE_URL}/reviews/${reviewId}/like/`,
      { is_liked: updatedIsLiked },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("서버 응답:", response.data);

    
    // 서버 응답으로 상태 동기화
    const serverUpdatedLikesCount = response.data.likes_count;

    setLikeStatus((prevStatus) => ({
      ...prevStatus,
      [reviewId]: {
        is_liked: updatedIsLiked,
        likes_count: serverUpdatedLikesCount, // 서버 응답을 우선
      },
    }));

    console.log("좋아요 상태 전송 성공:", response.data);
  } catch (error) {
    console.error("좋아요 상태 업데이트 실패:", error);

    // 오류 발생 시 이전 상태로 롤백
    setLikeStatus((prevStatus) => ({
      ...prevStatus,
      [reviewId]: likeStatus[reviewId], // 이전 상태로 복구
    }));
  } finally {
    // 필요한 경우 추가적인 정리 작업
    console.log(`좋아요 상태 업데이트 완료: reviewId=${reviewId}`);
  }
};

console.log("업데이트된 상태:", likeStatus);
      

  const handleInfoButtonClick = () => {
    navigate('/input-service-info');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    let sortedReviews;
    switch (option) {
      case "인기순":
        sortedReviews = [...serviceData.review].sort((a, b) => b.likes_count - a.likes_count);
        break;
      case "최신순":
        sortedReviews = [...serviceData.review].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case "높은 평점 순":
        sortedReviews = [...serviceData.review].sort((a, b) => b.score - a.score);
        break;
      case "낮은 평점 순":
        sortedReviews = [...serviceData.review].sort((a, b) => a.score - b.score);
        break;
      default:
        sortedReviews = serviceData.review;
        break;
    }

    setServiceData({ ...serviceData, review: sortedReviews });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleReviewClick = () => {
    if (!serviceData.service_name) {
      alert("현재 등록된 서비스가 없습니다.");
    } else {
      navigate(`/write-review/${teamId}/`);
    }
  };


  if (isLoading) return <div>로딩 중...</div>;

  return (
    <Styled.Wrapper>
      <Header isWhiteBackground={true} />
      <Styled.Content>
      <Styled.Header>
  {isOwner && (
    <Styled.ServiceInfoButton onClick={handleInfoButtonClick}>
      <Styled.InfoVector src={infoVector} alt="infoVector" />
    </Styled.ServiceInfoButton>
  )}
  <Styled.ThumbnailBox>
    {serviceData.thumbnail_image ? (
      <Styled.ThumbnailImage src={serviceData.thumbnail_image} alt="서비스 썸네일" />
    ) : (
      <Styled.ThumbnailImage src={ThumbnailTotal} alt="기본 썸네일" />
    )}
  </Styled.ThumbnailBox>
</Styled.Header>


        <Styled.Line>
          <Styled.NameBox>
            <Styled.TeamCircle>
              <Styled.TeamNum>{serviceData?.team || "15"}</Styled.TeamNum>
            </Styled.TeamCircle>
            <Styled.Name>
              <Styled.NameText>{serviceData?.service_name || "서비스 이름을 입력해주세요"}</Styled.NameText>
              <Styled.OneLine>{serviceData?.intro || "한 줄 소개를 추가해주세요"}</Styled.OneLine>
            </Styled.Name>
          </Styled.NameBox>
        </Styled.Line>

        <Styled.WholeContent>
          <Styled.Middle>
            <Styled.GreenStar src={greenStar} alt="star" />
            <Styled.TotalStar>{serviceData.score_average}</Styled.TotalStar>
            <Styled.Visit>
              {serviceData?.site_url ? (
                <Styled.VisitServiceButton href={serviceData.site_url} target="_blank" rel="noopener noreferrer">
                  <img src={URLvisitBtn} alt="VisitURLbtn" style={{ height: "100%", borderRadius: "10px" }} />
                </Styled.VisitServiceButton>
              ) : (
                <img src={disableVisit} alt="Disabled Visit Button" style={{ height: "50px", borderRadius: "10px" }} />
              )}
            </Styled.Visit>
          </Styled.Middle>
          <Styled.ServiceContent>
            {serviceData.content ? (
              serviceData.content
            ) : (
              <Styled.NoContentMessage>
                잠시만 기다려 주세요! <br />
                서비스 설명이 준비중 입니다.
              </Styled.NoContentMessage>
            )}
          </Styled.ServiceContent>
          <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
          <Styled.Members>
            {serviceData.members && serviceData.members.length > 0 ? (
              serviceData.members.map((member, index) => (
                <Styled.Member key={index}>
                  {member.part} | {member.member}
                </Styled.Member>
              ))
            ) : (
              <Styled.NoMembersMessage>개발에 참여한 팀원을 소개해 주세요.</Styled.NoMembersMessage>
            )}
          </Styled.Members>
          <Styled.ServicePhotoBox>
            <Styled.ServicePhoto>발표자료</Styled.ServicePhoto>
            <Styled.PhotoCount>{serviceData.presentation_cnt}</Styled.PhotoCount>
          </Styled.ServicePhotoBox>
          <Styled.PhotoBox>
            {serviceData.presentations &&
              serviceData.presentations.map((presentation, index) => (
                <Styled.ExImage key={index} src={presentation.image} alt={`발표자료-${index}`} onClick={() => handleImageClick(presentation.image)} />
              ))}
          </Styled.PhotoBox>
          {isModalOpen && (
            <Styled.FullScreenModal>
              <Styled.CloseButton onClick={handleCloseModal}>✕</Styled.CloseButton>
              <Styled.ThumbnailList>
                {serviceData.presentations &&
                  serviceData.presentations.map((presentation, index) => (
                    <Styled.Thumbnail key={index} src={presentation.image} alt={`Thumbnail-${index}`} onClick={() => handleImageClick(presentation.image)} />
                  ))}
              </Styled.ThumbnailList>
              <Styled.ModalImage src={selectedImage} alt="확대 이미지" />
            </Styled.FullScreenModal>
          )}

<Styled.MyFeedback>
  <Styled.Feedback1>내가 쓴 피드백</Styled.Feedback1>
  {console.log("렌더링 시 myReview 상태:", myReview)} {/* 디버깅 */}
  {myReview ? (
    <Styled.ReviewContent key={myReview.id}>
      <Styled.User>
        <Styled.UserNameBox>
          <Styled.UserName>{myReview.univ} {myReview.writer_name}</Styled.UserName>
          <Styled.UserInfo>
            {myReview.team ? `${myReview.team}팀` : ""}
            {myReview.team && myReview.writer_service ? " · " : ""}
            {myReview.writer_service ? myReview.writer_service : ""}
          </Styled.UserInfo>
        </Styled.UserNameBox>
        <Styled.UserStarBox>
          <Styled.UserStar src={greenStar} alt="star" />
          <Styled.ScoreNum>{myReview.score}</Styled.ScoreNum>
        </Styled.UserStarBox>
      </Styled.User>
      <Styled.UserReviewContent>{myReview.review}</Styled.UserReviewContent>
      <Styled.HeartBox>
        <Styled.HeartButton onClick={() => handleLikeClick(myReview.id)}>
          <FontAwesomeIcon
            icon={likeStatus[myReview.id]?.is_liked === true ? solidHeart : regularHeart}
          />
        </Styled.HeartButton>
        <Styled.HeartCount>{likeStatus[myReview.id]?.likes_count}</Styled.HeartCount>
      </Styled.HeartBox>
    </Styled.ReviewContent>
            ) : (
              // myReview가 없을 때: 리뷰 작성 요청 메시지와 버튼 표시
              <Styled.RankingBox>
                <Styled.Ask>이 서비스 어떠셨나요?</Styled.Ask>
                <Styled.Star src={fiveStars} alt="five stars" />
                <Styled.WriteReviewButton src={writeFeedbackbtn} alt="피드백 작성 버튼" onClick={handleReviewClick} />
              </Styled.RankingBox>
            )}
          </Styled.MyFeedback>

          <Styled.UserReviews>
            <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
            <Styled.UserReviewCount>{serviceData.review_cnt}</Styled.UserReviewCount>
            <Styled.DropdownWrapper>
              <Styled.DropdownButtonBox onClick={toggleDropdown}>
                <Styled.DropdownButton>{selectedOption}</Styled.DropdownButton>
                <Styled.StyledArray>▼</Styled.StyledArray>
              </Styled.DropdownButtonBox>

              <Styled.DropdownMenu isOpen={isOpen}>
                <Styled.DropdownItem onClick={() => handleSelection("인기순")}>인기순</Styled.DropdownItem>
                <Styled.DropdownItem onClick={() => handleSelection("최신순")}>최신순</Styled.DropdownItem>
                <Styled.DropdownItem onClick={() => handleSelection("높은 평점 순")}>높은 평점 순</Styled.DropdownItem>
                <Styled.DropdownItem onClick={() => handleSelection("낮은 평점 순")}>낮은 평점 순</Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.DropdownWrapper>
          </Styled.UserReviews>
          {serviceData.review && serviceData.review.length > 0 ? (
            serviceData.review.map((review) => (
              
                <Styled.ReviewContent key={review.id}>
                <Styled.User>
                  <Styled.UserNameBox>
                    <Styled.UserName>
                      {review.univ} {review.writer_name}
                    </Styled.UserName>
                    <Styled.UserInfo>
                      {review.team ? `${review.team}팀` : ""}
                      {review.team && review.writer_service ? " · " : ""}
                      {review.writer_service ? review.writer_service : ""}
                    </Styled.UserInfo>
                  </Styled.UserNameBox>
                  <Styled.UserStarBox>
                    <Styled.UserStar src={greenStar} alt="star" />
                    <Styled.ScoreNum>{review.score}</Styled.ScoreNum>
                  </Styled.UserStarBox>
                </Styled.User>

                <Styled.ReviewTags>
                  <Styled.ReviewKeyword>
                    {review.tags.map((tag, tagIndex) => {
                      switch (tag) {
                        case "EASY":
                          return <Styled.Easy key={tagIndex} src={easy} alt="Easy" />;
                        case "SIMPLE":
                          return <Styled.Simple key={tagIndex} src={simple} alt="Simple" />;
                        case "ERROR_FREE":
                          return <Styled.Errorfree key={tagIndex} src={errorfree} alt="Error Free" />;
                        case "DESIGN":
                          return <Styled.Design key={tagIndex} src={design} alt="Design" />;
                        case "GROWTH":
                          return <Styled.Growth key={tagIndex} src={growth} alt="Growth" />;
                        case "FEEDBACK":
                          return <Styled.Feedback key={tagIndex} src={feedback} alt="Feedback" />;
                        case "BASIC":
                          return <Styled.Basic key={tagIndex} src={basic} alt="Basic" />;
                        case "REUSE":
                          return <Styled.Reuse key={tagIndex} src={reuse} alt="Reuse" />;
                        case "LOADING":
                          return <Styled.Loading key={tagIndex} src={loading} alt="Loading" />;
                        case "ORIGINAL":
                          return <Styled.Original key={tagIndex} src={original} alt="Original" />;
                        default:
                          return null; // Undefined tags are not displayed
                      }
                    })}
                  </Styled.ReviewKeyword>
                </Styled.ReviewTags>
                <Styled.UserReviewContent>{review.review}</Styled.UserReviewContent>
                <Styled.HeartBox>
                <Styled.HeartButton onClick={() => handleLikeClick(review.id)}>
                {console.log("현재 리뷰 상태:", likeStatus[review.id])} {/* 디버깅 */}
                <FontAwesomeIcon
                  icon={
                    likeStatus[review.id]?.is_liked === true
                      ? solidHeart
                      : regularHeart
                  }
                />
                </Styled.HeartButton>
                  <Styled.HeartCount>{likeStatus[review.id]?.likes_count}</Styled.HeartCount>
                </Styled.HeartBox>
              </Styled.ReviewContent>
            ))
          ) : (
            <Styled.ReviewContent1>
              <Styled.NoReview>아직 리뷰가 없어요</Styled.NoReview>
              <Styled.WriteFirst>첫 번째로 리뷰를 남겨주세요!</Styled.WriteFirst>
              <Styled.ThoughtfulMan src={thoughtfulMan} alt="thoughtfulMan" />
            </Styled.ReviewContent1>
          )}
        </Styled.WholeContent>
      </Styled.Content>
      <Footer />
    </Styled.Wrapper>
  );
};

export default DetailPage;