import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './DetailPage.styled';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import URLvisitBtn from '../assets/URLvisitBtn.svg';
import greenStar from '../assets/greenStar.svg';
import fiveStars from '../assets/fiveStars.svg';
import writeFeedbackbtn from '../assets/writeFeedbackbtn.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const DetailPage = ({ API_BASE_URL }) => {
    const navigate = useNavigate();
    const [serviceData, setServiceData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`${API_BASE_URL}/services/4line-services/${params.teamId}`);
                console.log("데이터 로드 성공:", response.data);  // serviceData 로그 출력
                setServiceData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
                setIsLoading(false);
                alert("데이터 불러오기 실패: 서비스 ID가 정의되지 않았습니다. 관리자에게 문의하세요.");
            }
        };
        fetchData();

    }, [params.teamId]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleReviewClick = () => {
        navigate('/write-review');
    };

    if (isLoading) return <div>로딩 중...</div>;

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Header>
                    <Styled.ThumbnailBox>
                        {serviceData.thumbnail_image && (
                            <Styled.ThumbnailImage src={serviceData.thumbnail_image} alt="서비스 썸네일" />
                        )}
                    </Styled.ThumbnailBox>
                </Styled.Header>

                <Styled.Line>
                    <Styled.NameBox>
                        <Styled.TeamCircle>
                            <Styled.TeamNum>{serviceData.team}</Styled.TeamNum>
                        </Styled.TeamCircle>
                        <Styled.Name>
                            <Styled.NameText>{serviceData.service_name}</Styled.NameText>
                            <Styled.OneLine>{serviceData.intro}</Styled.OneLine>
                        </Styled.Name>
                    </Styled.NameBox>
                </Styled.Line>

                <Styled.WholeContent>
                <Styled.Middle>
                    <Styled.GreenStar src={greenStar} alt="star" />
                    <Styled.TotalStar>{serviceData.score_average}</Styled.TotalStar>
                   <Styled.VisitServiceButton 
                        href={serviceData.site_url} 
                        src={URLvisitBtn} 
                        alt="VisitURLbtn">
                    </Styled.VisitServiceButton>
                </Styled.Middle>

                <Styled.ServiceContent>
                    {serviceData.content}
                </Styled.ServiceContent>

                <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
                <Styled.Members>
                    {serviceData.members && serviceData.members.map((member, index) => (
                        <Styled.Member key={index}>
                            {member.part} | {member.member}
                        </Styled.Member>
                    ))}
                </Styled.Members>



                <Styled.ServicePhotoBox>
                    <Styled.ServicePhoto>발표자료</Styled.ServicePhoto>
                    <Styled.PhotoCount>{serviceData.presentation_cnt}</Styled.PhotoCount>
                </Styled.ServicePhotoBox>

                <Styled.PhotoBox>
                    {serviceData.presentations && serviceData.presentations.map((presentation, index) => (
                        <Styled.ExImage
                            key={index}
                            src={presentation.image}
                            alt={`발표자료-${index}`}
                            onClick={() => handleImageClick(presentation.image)}
                        />
                    ))}
                </Styled.PhotoBox>

                {isModalOpen && (
                    <Styled.FullScreenModal>
                        <Styled.CloseButton onClick={handleCloseModal}>✕</Styled.CloseButton>
                        <Styled.ModalImage src={selectedImage} alt="확대 이미지" />
                    </Styled.FullScreenModal>
                )}

                <Styled.Feedback>내가 쓴 피드백</Styled.Feedback>
                <Styled.RankingBox>
                    <Styled.Ask>이 서비스 어떠셨나요?</Styled.Ask>
                    <Styled.Star src={fiveStars} alt="five stars"/>
                    <Styled.WriteReviewButton src={writeFeedbackbtn} alt="피드백 작성 버튼"onClick={handleReviewClick}/>
                </Styled.RankingBox>
                
                <Styled.UserReviews>
                    <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
                    <Styled.UserReviewCount>{serviceData.review_cnt}</Styled.UserReviewCount>
                </Styled.UserReviews>
                
                {serviceData.review && serviceData.review.map((review, index) => (
                    <Styled.ReviewContent key={index}>
                        <Styled.User>
                            <Styled.UserNameBox>
                                <Styled.UserName>{review.univ} {review.writer_name}</Styled.UserName>
                                <Styled.UserInfo>{review.team}팀 · {review.writer_service}</Styled.UserInfo>
                            </Styled.UserNameBox>
                            <Styled.UserStarBox>
                                <Styled.UserStar src={greenStar} alt="star"/> 
                                <Styled.ScoreNum>{review.score}</Styled.ScoreNum>
                            </Styled.UserStarBox>
                        </Styled.User>
                        <Styled.UserReviewContent>{review.review}</Styled.UserReviewContent>
                        <Styled.HeartBox>
                            <Styled.HeartCount>{review.likes_count}</Styled.HeartCount>
                        </Styled.HeartBox>
                    </Styled.ReviewContent>
                ))}
                </Styled.WholeContent>
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

export default DetailPage;
