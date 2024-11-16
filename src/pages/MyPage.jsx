import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styled from "./MyPage.styled";
import profile from "../assets/profile.svg";
import changeImage from "../assets/changeImage.svg";
import changeDefault from "../assets/changeDefault.svg";
import mypageGoservice from "../assets/mypageGoservice.svg";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const MyPage = ({ API_BASE_URL }) => {
  const [response, setResponse] = useState({});
  const [profileImage, setProfileImage] = useState(profile);
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // navigate 주석 해제

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 로컬 저장소에서 토큰 가져오기
        console.log("Stored Token:", token);

        const res = await axios.get(`${API_BASE_URL}/accounts/mypage`, {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
          },
        });

        const data = res.data;

        // API 데이터를 상태에 저장
        setResponse(data);

        // 프로필 이미지 설정
        if (data.profile_pic) {
          setProfileImage(`${API_BASE_URL}${data.profile_pic}`);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("인증 실패: 로그인 페이지로 이동합니다.");
          navigate("/login");
        } else {
          console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
          alert("데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    };

    fetchData();
  }, [API_BASE_URL, navigate]);

  return (
    <Styled.Wrapper>
      <Header isWhiteBackground={true} />
      <Styled.Content>
        <Styled.Box>
          <Styled.Title>My Page</Styled.Title>
          <Styled.ProfileBox>
            <Styled.ProfileImage src={profileImage} alt="profile image" />
            <Styled.Top>
              <Styled.Namebox>
                <Styled.Name>{response.name}</Styled.Name>
                <Styled.ID>{response.id}</Styled.ID>
              </Styled.Namebox>
              <Styled.Changebox>
                <Styled.ChangeImage src={changeImage} alt="changeImage" />
                <Styled.ChangeDefault src={changeDefault} alt="changeDefault" />
              </Styled.Changebox>
            </Styled.Top>
            <Styled.MyProfileBox>
              <Styled.ProfileTitle>내 프로필</Styled.ProfileTitle>
              <Styled.ProfileContent>
                <Styled.Rank>등급: {response.is_participant ? "해커톤 참여자" : "일반 사용자"}</Styled.Rank>
                <Styled.From>소속: {response.univ}</Styled.From>
                <Styled.Team>{response.team}팀</Styled.Team>
              </Styled.ProfileContent>
            </Styled.MyProfileBox>
          </Styled.ProfileBox>
          <Styled.ReviewBox>
            <Styled.ReviewTitleBox>
              <Styled.ReviewTitle>내가 리뷰 남긴 서비스</Styled.ReviewTitle>
              <Styled.UserReviewCount>{response.service_cnt}</Styled.UserReviewCount>
            </Styled.ReviewTitleBox>

            {response.service &&
              response.service.map((service) => (
                <Styled.ReviewService key={service.id}>
                  <Styled.ThumbnailPic>
                    {service.thumbnail_image ? (
                      <img
                        src={`${API_BASE_URL}${service.thumbnail_image}`}
                        alt={`${service.service_name} thumbnail`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <span>이미지 없음</span>
                    )}
                  </Styled.ThumbnailPic>
                  <Styled.ServiceTitle>{service.service_name}</Styled.ServiceTitle>
                  <Styled.Goservice src={mypageGoservice} alt="goService" />
                </Styled.ReviewService>
              ))}
          </Styled.ReviewBox>
        </Styled.Box>
      </Styled.Content>
      <Footer />
    </Styled.Wrapper>
  );
};

export default MyPage;
