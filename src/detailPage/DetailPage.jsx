import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './DetailPage.styled';
import thumbnailImage from '../assets/thumbnail.svg';
import ex1 from '../assets/ex1.svg';
import ex2 from '../assets/ex2.svg';
import ex3 from '../assets/ex3.svg';
import arrowcircleright from '../assets/arrowcircleright.svg';
import design from '../assets/design.svg';
import ui from '../assets/ui.svg';
import loading from '../assets/loading.svg';
import userpic from '../assets/userpic.svg';
import heart from '../assets/heart.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const DetailPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const images = [ex1, ex2, ex3];

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

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Header>
                    <Styled.ThumbnailBox>
                        정보가 입력된 상세 페이지
                    </Styled.ThumbnailBox>
                </Styled.Header>
                <Styled.Line>
                    <Styled.NameBox>
                        <Styled.TeamCircle>
                            <Styled.TeamNum>
                                15
                            </Styled.TeamNum>
                        </Styled.TeamCircle>
                        <Styled.Name>
                            <Styled.NameText>4호선톤 사이트</Styled.NameText>
                            <Styled.OneLine>멋쟁이들을 위한 4호선톤 축제 사이트!</Styled.OneLine>
                        </Styled.Name>
                    </Styled.NameBox>
                </Styled.Line>

                <Styled.Middle>
                    <Styled.TotalStar>
                        ★ 3.5
                    </Styled.TotalStar>
                    <Styled.VisitServiceButton>
                        <Styled.Arrowcircleright src={arrowcircleright} alt="arrowcircleright" />
                        <Styled.VisitService>방문하기</Styled.VisitService>
                    </Styled.VisitServiceButton>                    

                </Styled.Middle>

                <Styled.ServiceContent>
                    프로젝트 설명<br/><br/>

                    ✨내가 PICK한 바로 지식과 경험을 공유하는 클래스 모임✨ <br/><br/>

                    😵 모임을 개최해 본 분이라면, ➡모임 참가자 모집, 입금 확인 등의 과정이 불편하진 않으셨나요?  <br/>
                    🤔 모임에 참여해 본 분이라면, ➡믿을 수 있는 호스트인지, 제대로 신청한 것이 맞는지 확인하기 어렵지 않으셨나요?  <br/><br/>

                    이제는 P!CKPLE에서 간편하게 모임을 개최하고, 신뢰할 수 있는 모임에 참여해 나의 관심사에 대한 다양한 가치를 공유해 보세요!🙌 <br/><br/>

                    🌀 P!CKPLE의 핵심 기능 소개 <br/><br/>

                    ➊ 호스트 승인<br/>
                    호스트는 픽플만의 승인 제도를 통해 모임을 개설할 수 있는 권한을 부여 받아요.<br/>
                    개인 채널을 통해 관심 분야에 대한 열정을 인증 받는다면 누구나 호스트가 될 수 있어요! <br/>
                    ➋ 모임 개설 - 공지사항 게시 <br/>
                    지식 가치를 공유하기 위한 모임을 개설해요.<br/>
                    공지사항을 통해 필요한 수준의 소통을 할 수 있어요!
                </Styled.ServiceContent>

                <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
                <Styled.Member>
                    PM/PD | 전효준
                </Styled.Member>

                <Styled.ServicePhotoBox>
                    <Styled.ServicePhoto>발표자료</Styled.ServicePhoto>
                    <Styled.PhotoCount>3</Styled.PhotoCount>
                </Styled.ServicePhotoBox>

                <Styled.PhotoBox>
                    {images.map((image, index) => (
                        <Styled.ExImage 
                            key={index} 
                            src={image} 
                            alt={`example-${index}`} 
                            onClick={() => handleImageClick(image)} 
                        />
                    ))}
                </Styled.PhotoBox>

                {isModalOpen && (
                    <Styled.FullScreenModal>
                        <Styled.CloseButton onClick={handleCloseModal}>✕</Styled.CloseButton>
                        <Styled.ModalImage src={selectedImage} alt="expanded" />
                        <Styled.ThumbnailList>
                            {images.map((img, index) => (
                                <Styled.Thumbnail
                                    key={index}
                                    src={img}
                                    alt={`thumbnail-${index}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </Styled.ThumbnailList>
                    </Styled.FullScreenModal>
                )}


                <Styled.Feedback>내가 쓴 피드백</Styled.Feedback>
                <Styled.RankingBox>
                    <Styled.Ask>이 서비스 어떠셨나요?</Styled.Ask>
                    <Styled.Star>★★★★★</Styled.Star>
                    <Styled.WriteReviewButton onClick={handleReviewClick}>
                        <Styled.Arrowcircleright src={arrowcircleright} alt="arrowcircleright" />
                        <Styled.WriteReview>피드백 작성하기</Styled.WriteReview>
                    </Styled.WriteReviewButton>
                </Styled.RankingBox>

                <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
                <Styled.ReviewList>
                    <Styled.ReviewContent>
                        <Styled.User>
                            <Styled.UserPic src={userpic} alt="userpic" />
                            <Styled.UserGap>
                                <Styled.UserNameBox>
                                    <Styled.UserName>서경대 김멋사</Styled.UserName>
                                    <Styled.UserInfo>15팀 · 4호선톤사이트</Styled.UserInfo>
                                </Styled.UserNameBox>
                                <Styled.UserReviewInfo>
                                    <Styled.UserStar>★ 3.5</Styled.UserStar>
                                </Styled.UserReviewInfo>
                            </Styled.UserGap>
                        </Styled.User>

                        <Styled.ReviewKeyword>
                            <Styled.Design src={design} alt="design" />
                            <Styled.UI src={ui} alt="ui" />
                            <Styled.Loading src={loading} alt="loading" />
                        </Styled.ReviewKeyword>
                        <Styled.UserReviewContent>
                            소문 듣고 찾아왔는데 너무 맛있네요ㅠㅠ 
                        </Styled.UserReviewContent>
                        <Styled.HeartBox>
                            <Styled.HeartButton src={heart} alt="heart" />
                                <Styled.HeartCount>4</Styled.HeartCount>
                        </Styled.HeartBox>
                    </Styled.ReviewContent> 
                </Styled.ReviewList>
            </Styled.Content>
            <Footer/>
        </Styled.Wrapper>
    );
};

export default DetailPage;
