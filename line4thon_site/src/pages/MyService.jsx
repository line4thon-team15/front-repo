import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './MyService.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import servicePhotoFile from '../assets/servicePhotoFile.svg';
import thoughtfulMan from '../assets/thoughtfulMan.svg';
import arrowcircleright from '../assets/arrowcircleright.svg';
import infoVector from '../assets/infoVector.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyService = () => {
    const navigate = useNavigate();

    const handleInfoButtonClick = () => {
        navigate('/input-service-info'); // Ensure this route is correctly configured
    };

    const handleMyServiceInfoButtonClick = () => {
        navigate('/my-service-info');
    };

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Header>
                    <Styled.MyServiceInfoButton onClick={handleMyServiceInfoButtonClick}>
                    </Styled.MyServiceInfoButton>

                    <Styled.ServiceInfoButton onClick={handleInfoButtonClick}>
                        <Styled.InfoVector src={infoVector} alt="infoVector" />
                    </Styled.ServiceInfoButton>
                    <Styled.Thumbnail>
                        <Styled.ThumbnailImage src={ThumbnailTotal} alt="service thumbnail" />
                    </Styled.Thumbnail>
                    
                </Styled.Header>
                <Styled.Line>
                    <Styled.NameBox>
                        <Styled.TeamCircle>
                            <Styled.TeamNum>
                                15
                            </Styled.TeamNum>
                        </Styled.TeamCircle>
                        <Styled.Name>
                            <Styled.NameText>서비스 이름을 입력해주세요</Styled.NameText>
                            <Styled.OneLine>한 즐 소개를 추가해주세요</Styled.OneLine>
                        </Styled.Name>
                    </Styled.NameBox>
                </Styled.Line>

                <Styled.ServiceContent>
                    잠시만 기다려 주세요! <br/>
                    서비스 설명이 준비중 입니다.
                </Styled.ServiceContent>
                <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
                <Styled.Member>개발에 참여한 팀원을 소개해 주세요.</Styled.Member>
                <Styled.ServicePhoto>발표자료</Styled.ServicePhoto>
                <Styled.ServicePhotoFile src={servicePhotoFile} alt="servicePhotoFile" />
                <Styled.Feedback>내가 쓴 피드백</Styled.Feedback>
                <Styled.RankingBox>
                    <Styled.Ask>이 서비스 어떠셨나요?</Styled.Ask>
                    <Styled.Star>★★★★★</Styled.Star>
                    <Styled.WriteReviewButton>
                        <Styled.Arrowcircleright src={arrowcircleright} alt="arrowcircleright" />
                        <Styled.WriteReview>리뷰 작성하기</Styled.WriteReview>
                    </Styled.WriteReviewButton>
                </Styled.RankingBox>

                <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
                <Styled.ReviewContent>
                    <Styled.NoReview>아직 리뷰가 없어요</Styled.NoReview>
                    <Styled.WriteFirst>첫 번째로 리뷰를 남겨주세요!</Styled.WriteFirst>
                    <Styled.ThoughtfulMan src={thoughtfulMan} alt="thoughtfulMan" />
                </Styled.ReviewContent>


                
            </Styled.Content>
            <Footer/>
        </Styled.Wrapper>
    );
};

export default MyService;