import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styled from "./MyPage.styled";
import profile from "../assets/profile.svg";
import changeImage from "../assets/changeImage.svg";
import changeDefault from "../assets/changeDefault.svg";
import mypageGoservice from "../assets/mypageGoservice.svg";
import defaultThumbnail from "../assets/Defaultnail.png"; // 기본 썸네일 이미지 추가
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const MyPage = ({ API_BASE_URL }) => {
  const [response, setResponse] = useState({});
  const [profileImage, setProfileImage] = useState(profile);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await axios.get(`${API_BASE_URL}/accounts/mypage`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;
        setResponse(data);

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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 선택되지 않았습니다.");
      return;
    }

    // 파일 크기 및 형식 확인
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기가 너무 큽니다. 5MB 이하 파일을 선택해주세요.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("JPEG 또는 PNG 형식의 이미지를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_pic", file);

    try {
      const token = localStorage.getItem("accessToken");

      const res = await axios.patch(`${API_BASE_URL}/accounts/mypage`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setProfileImage(`${API_BASE_URL}${res.data.profile_pic}`);
      alert("프로필 이미지가 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("프로필 이미지를 업로드하는 중 오류가 발생했습니다:", error);
      alert("프로필 이미지를 업로드하는 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleDefaultImage = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await axios.patch(
        `${API_BASE_URL}/accounts/mypage`,
        { profile_pic: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setProfileImage(profile);
      alert("기본 이미지로 변경되었습니다.");
    } catch (error) {
      console.error("기본 이미지로 변경하는 중 오류가 발생했습니다:", error);
      alert("기본 이미지를 변경하는 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

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
                <Styled.ChangeImage src={changeImage} alt="changeImage" onClick={() => fileInputRef.current.click()} />
                <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileUpload} />
                <Styled.ChangeDefault src={changeDefault} alt="changeDefault" onClick={handleDefaultImage} />
              </Styled.Changebox>
            </Styled.Top>
            <Styled.MyProfileBox>
              <Styled.ProfileTitle>내 프로필</Styled.ProfileTitle>
              <Styled.ProfileContent>
                <Styled.Rank>등급: {response.is_participant ? "해커톤 참여자" : "일반 사용자"}</Styled.Rank>
                <Styled.From>소속: {response.univ}</Styled.From>
                <Styled.Team>팀: {response.team}팀</Styled.Team>
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
                    <img
                      src={service.thumbnail_image ? `${API_BASE_URL}${service.thumbnail_image}` : defaultThumbnail}
                      alt={`${service.service_name} thumbnail`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Styled.ThumbnailPic>
                  <Styled.ServiceTitle>{service.service_name}</Styled.ServiceTitle>
                  <Styled.Goservice
                    src={mypageGoservice}
                    alt="Go to service detail"
                    onClick={() => navigate(`/Detail/${service.id}`)} // 상세 페이지로 이동
                  />
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
