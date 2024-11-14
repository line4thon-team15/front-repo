import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as Styled from './MyPage.styled';
import profile from '../assets/profile.svg';
import changeImage from '../assets/changeImage.svg';
import changeDefault from '../assets/changeDefault.svg';
import mypageGoservice from '../assets/mypageGoservice.svg';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyPage = ({ API_BASE_URL }) => {
    const [response, setResponse] = useState({});
    const [profileImage, setProfileImage] = useState(profile);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('authToken'); // 로컬 저장소에서 토큰 가져오기
                const res = await axios.get(`${API_BASE_URL}/accounts/mypage`, {
                    headers: {
                        Authorization: `Bearer ${token}` // 헤더에 토큰 추가
                    }
                });
                setResponse(res.data);
            } catch (error) {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            }
        };
    
        fetchData();
    }, [API_BASE_URL]);
    

    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Box>
                    <Styled.Title>My Page</Styled.Title>
                    <Styled.ProfileBox>
                        <Styled.ProfileImage src={profile} alt='profile image' />
                        <Styled.Top>
                            <Styled.Namebox>
                                <Styled.Name>{response.name}</Styled.Name>
                                <Styled.ID>ThisisMyID</Styled.ID>
                            </Styled.Namebox>
                            <Styled.Changebox>
                                <Styled.ChangeImage src={changeImage} alt='changeImage' />
                                <Styled.ChangeDefault src={changeDefault} alt='changeDefault' />
                            </Styled.Changebox>
                        </Styled.Top>
                        <Styled.MyProfileBox>
                            <Styled.ProfileTitle>내 프로필</Styled.ProfileTitle>
                            <Styled.ProfileContent>
                                <Styled.Rank>등급: {response.is_participant ? '해커톤 참여자' : '일반 사용자'}</Styled.Rank>
                                <Styled.From>소속: {response.univ}</Styled.From>
                                <Styled.Team>{response.team}팀</Styled.Team>
                            </Styled.ProfileContent>
                        </Styled.MyProfileBox>
                    </Styled.ProfileBox>
                    <Styled.ReviewBox>
                        <Styled.ReviewTitleBox>
                            <Styled.ReviewTitle>내가 리뷰 남긴 서비스</Styled.ReviewTitle>
                            <Styled.UserReviewCount>3{response.service_cnt}</Styled.UserReviewCount>
                        </Styled.ReviewTitleBox>
                        
                        {response.service && response.service.map((service, index) => (
                            <Styled.Service key={index}>{service}</Styled.Service>
                        ))}

                        <Styled.ReviewList>
                            <Styled.ReviewService>
                                <Styled.ThumbnailPic></Styled.ThumbnailPic>
                                <Styled.ServiceTitle>지하철 대탐험</Styled.ServiceTitle>
                                <Styled.Goservice src={mypageGoservice} alt="goService" />
                            </Styled.ReviewService>
                        </Styled.ReviewList>

                    </Styled.ReviewBox>
                </Styled.Box>
            </Styled.Content>
            <Footer />
        </Styled.Wrapper>
    );
};

export default MyPage;
