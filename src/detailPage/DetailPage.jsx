import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Styled from './DetailPage.styled';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const DetailPage = ({ serviceId, API_BASE_URL }) => {
    const navigate = useNavigate();
    const [serviceData, setServiceData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/services/4line-services/${serviceId}`);
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
    }, [serviceId]);

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
                            <img src={serviceData.thumbnail_image} alt="서비스 썸네일" />
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

                <Styled.Middle>
                    <Styled.TotalStar>
                        ★ {serviceData.score_average}
                    </Styled.TotalStar>
                    <Styled.VisitServiceButton>
                        <Styled.Arrowcircleright alt="방문하기 아이콘" />
                        <a href={serviceData.site_url} target="_blank" rel="noopener noreferrer">
                            방문하기
                        </a>
                    </Styled.VisitServiceButton>
                </Styled.Middle>

                <Styled.ServiceContent>
                    {serviceData.content}
                </Styled.ServiceContent>

                <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
                {serviceData.members && serviceData.members.map((member, index) => (
                    <Styled.Member key={index}>
                        {member.part ? `${member.part} | ` : ''}{member.member}
                    </Styled.Member>
                ))}

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
                    <Styled.Star>★★★★★</Styled.Star>
                    <Styled.WriteReviewButton onClick={handleReviewClick}>
                        <Styled.Arrowcircleright alt="리뷰 작성 아이콘" />
                        피드백 작성하기
                    </Styled.WriteReviewButton>
                </Styled.RankingBox>

                <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
                {serviceData.review && serviceData.review.map((review, index) => (
                    <Styled.ReviewContent key={index}>
                        <Styled.User>
                            <Styled.UserName>{review.writer_name}</Styled.UserName>
                            <Styled.UserInfo>{review.team}팀 · {review.service_name}</Styled.UserInfo>
                            <Styled.UserStar>★ {review.score}</Styled.UserStar>
                        </Styled.User>
                        <Styled.UserReviewContent>{review.review}</Styled.UserReviewContent>
                    </Styled.ReviewContent>
                ))}
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

export default DetailPage;
