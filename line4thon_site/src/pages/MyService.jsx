import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './MyService.styled';
import ThumbnailTotal from '../assets/ThumbnailTotal.svg';
import servicePhotoFile from '../assets/servicePhotoFile.svg';
import thoughtfulMan from '../assets/thoughtfulMan.svg';
import arrowcircleright from '../assets/arrowcircleright.svg';
import infoVector from '../assets/infoVector.svg';
import disableVisit from '../assets/disableVisit.svg';
import arrayIcon from '../assets/arrayIcon.png';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyService = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('인기순'); // 기본값을 '인기순'으로 설정


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelection = (option) => {
        setSelectedOption(option); // 선택한 옵션을 저장하여 기본 표시
        setIsOpen(false);
    };

    const navigate = useNavigate();

    const handleInfoButtonClick = () => {
        navigate('/input-service-info'); // Ensure this route is correctly configured
    };

    const handleMyServiceInfoButtonClick = () => {
        navigate('/my-service-info');
    };

    const handleGoLoginButtonClick = () => {
        navigate('/login');
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
                            <Styled.OneLine>한 줄 소개를 추가해주세요</Styled.OneLine>
                        </Styled.Name>
                    </Styled.NameBox>
                </Styled.Line>

                <Styled.Top>
                    <Styled.ServiceContent>
                        잠시만 기다려 주세요! <br/>
                        서비스 설명이 준비중 입니다.
                    </Styled.ServiceContent>

                    <Styled.Visit src={disableVisit} alt="disableVisit" />
                </Styled.Top>

                <Styled.TeamMember>프로젝트 팀원</Styled.TeamMember>
                <Styled.Member>개발에 참여한 팀원을 소개해 주세요.</Styled.Member>
                <Styled.ServicePhotoBox>
                    <Styled.ServicePhoto>발표자료</Styled.ServicePhoto>
                    <Styled.ServicePhotoCount>1</Styled.ServicePhotoCount>
                </Styled.ServicePhotoBox>
            
                <Styled.ServicePhotoFile src={servicePhotoFile} alt="servicePhotoFile" />
                <Styled.Feedback>내가 쓴 피드백</Styled.Feedback>
                <Styled.RankingBox>
                    <Styled.Ask>이 서비스 어떠셨나요?</Styled.Ask>
                    <Styled.Star>★★★★★</Styled.Star>
                    <Styled.WriteReviewButton onClick={handleGoLoginButtonClick}>
                        <Styled.Arrowcircleright src={arrowcircleright} alt="arrowcircleright" />
                        <Styled.WriteReview>리뷰 작성하기</Styled.WriteReview>
                    </Styled.WriteReviewButton>
                </Styled.RankingBox>

                <Styled.UserReviewBox>
                    <Styled.UserReview>실시간 유저들의 사용후기</Styled.UserReview>
                    <Styled.UserReviewCount>0</Styled.UserReviewCount>
                    <Styled.DropdownWrapper>
                    <Styled.DropdownButtonBox onClick={toggleDropdown}>
                        <Styled.DropdownButton>
                            {selectedOption}
                        </Styled.DropdownButton>
                        <Styled.StyledArray>▼</Styled.StyledArray>
                    </Styled.DropdownButtonBox>
                        
                        <Styled.DropdownMenu isOpen={isOpen}>
                            <Styled.DropdownItem onClick={() => handleSelection('인기순')}>인기순</Styled.DropdownItem>
                            <Styled.DropdownItem onClick={() => handleSelection('최신순')}>최신순</Styled.DropdownItem>
                            <Styled.DropdownItem onClick={() => handleSelection('높은 평점 순')}>높은 평점 순</Styled.DropdownItem>
                            <Styled.DropdownItem onClick={() => handleSelection('낮은 평점 순')}>낮은 평점 순</Styled.DropdownItem>
                        </Styled.DropdownMenu>
                    </Styled.DropdownWrapper>
                </Styled.UserReviewBox>
                <Styled.ReviewContent>
                    <Styled.NoReview>아직 리뷰가 없어요</Styled.NoReview>
                    <Styled.WriteFirst>첫 번째로 리뷰를 남겨주세요!</Styled.WriteFirst>
                    <Styled.ThoughtfulMan src={thoughtfulMan} alt="thoughtfulMan" />
                </Styled.ReviewContent>
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

export default MyService;
