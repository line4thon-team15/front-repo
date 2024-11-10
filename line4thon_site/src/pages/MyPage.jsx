import React from 'react';
import * as Styled from './MyPage.styled';
import profile from '../assets/profile.svg';
import changeImage from '../assets/changeImage.svg';
import changeDefault from '../assets/changeDefault.svg';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const MyPage = () => {
    return (
        <Styled.Wrapper>
            <Header isWhiteBackground={true} />
            <Styled.Content>
                <Styled.Box>
                    <Styled.Title>My Page</Styled.Title>
                    <Styled.ProfileBox>
                        <Styled.ProfileImage src={profile} alt='profile image'/>
                        <Styled.Top>
                            <Styled.Namebox>
                                <Styled.Name>신채린</Styled.Name>
                                <Styled.ID>ThisisMyID</Styled.ID>
                            </Styled.Namebox>
                            <Styled.Changebox>
                                <Styled.ChangeImage src={changeImage} alt='changeImage'/>
                                <Styled.ChangeDefault src={changeDefault} alt='changeDefault'/>
                            </Styled.Changebox>
                        </Styled.Top>
                        <Styled.MyProfileBox>
                            <Styled.ProfileTitle>내 프로필</Styled.ProfileTitle>
                            <Styled.ProfileContent>
                                <Styled.Rank>등급: 해커톤 참여자</Styled.Rank>
                                <Styled.From>소속: 서경대학교</Styled.From>
                                <Styled.Team>15팀</Styled.Team>

                            </Styled.ProfileContent>
                        </Styled.MyProfileBox>
                        

                    </Styled.ProfileBox>



                    <Styled.ReviewBox>
                        <Styled.ReviewTitle>내가 리뷰 남긴 서비스</Styled.ReviewTitle>


                    </Styled.ReviewBox>
                    
                </Styled.Box>

            </Styled.Content>
            <Footer/>
        </Styled.Wrapper>
    );
};

export default MyPage;
