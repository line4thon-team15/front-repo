import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './Header.styled';
import { useScroll } from './ScrollContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faBars, faCircleArrowRight, faFaceSmile, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../contexts/AuthContext'; 
import axios from 'axios';
import LogoutModal from './LogoutModal'; 

const Header = ({ isIntro }) => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [userName, setUserName] = useState('');
    const { scrollToHome, scrollToRanking } = useScroll();
    const { isAuthenticated, setIsAuthenticated, logout } = useAuth(); // 로그인 상태와 로그아웃 함수 가져오기
    const navigate = useNavigate();

    const API_BASE_URL = import.meta.env.VITE_API_KEY;

    const GoHome = () => {
        navigate('/')
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken"); // 토큰 확인

        if (isAuthenticated && token) {
            console.log("Starting API call for user data...");
            axios.get(`${API_BASE_URL}/accounts/mypage`, {
                headers: {
                    Authorization: `Bearer ${token}`, // 예: 로컬 스토리지에 저장된 토큰 사용
                }
            })
                .then(response => {
                    console.log("API response:", response);
                    setUserName(response.data.name);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    if (error.response && error.response.status === 401) {
                        // 토큰 만료 또는 인증 오류 시 처리 (로그아웃 처리)
                        console.log("Unauthorized, logging out...");
                        logout();
                        navigate('/login'); // 로그인 페이지로 리디렉션
                    }
                });
        }
    }, [isAuthenticated, logout, navigate]);

    useEffect(() => {
        // 페이지가 로드될 때마다 localStorage에서 토큰을 확인하여 로그인 상태 업데이트
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsAuthenticated(true); // 토큰이 존재하면 로그인 상태로 설정
        } else {
            setIsAuthenticated(false); // 토큰이 없으면 비로그인 상태로 설정
        }
    }, [setIsAuthenticated]);


    // 로그아웃 모달 열기
    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = () => {
        logout(); // 로그아웃 처리
        setShowLogoutModal(false); // 모달 닫기
        setIsAuthenticated(false); // 로그아웃 후 인증 상태 변경
        localStorage.removeItem("accessToken"); // 로컬스토리지에서 토큰 제거
        navigate('/'); // 로그아웃 후 홈으로 리디렉션
    };

    return (
        <Styled.Wrapper>
            <Styled.Logo $isWhiteBackground={isIntro}>
                <button id='LogoBtn' onClick={GoHome}>
                    <p>4호선톤</p>
                    <p>사이트</p>
                    <p id='date'>24.11.16</p>
                </button>
            </Styled.Logo>
            <Styled.Navbar>
                <ul>
                    <Styled.NavItem
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={scrollToRanking}
                    >
                        <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faCrown} /> &nbsp;랭킹</Styled.NavButton>
                    </Styled.NavItem>

                    <Styled.NavItem
                        onMouseEnter={() => setHoveredIndex(1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/all-services">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faBars} /> &nbsp;전체 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>

                    <Styled.NavItem
                        onMouseEnter={() => setHoveredIndex(2)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-service">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faCircleArrowRight} /> &nbsp;내 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>

                    <Styled.NavItem
                        onMouseEnter={() => setHoveredIndex(3)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-page">
                            <Styled.NavButton $isWhiteBackground={isIntro}>
                                <FontAwesomeIcon icon={faFaceSmile} />
                                &nbsp;
                                {isAuthenticated ? ` 안녕하세요 ${userName}님` : ' 마이 페이지'}
                            </Styled.NavButton>
                        </Link>
                    </Styled.NavItem>

                    {/* 로그인/로그아웃 버튼 */}
                    <Styled.NavItem
                        onMouseEnter={() => setHoveredIndex(4)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {isAuthenticated ? (
                            <Styled.NavButton
                                $isWhiteBackground={isIntro}
                                onClick={handleLogoutClick} // 로그아웃 함수 호출
                            >
                                <FontAwesomeIcon icon={faUserCheck} /> &nbsp;로그아웃
                            </Styled.NavButton>
                        ) : (
                            <Link to="/login">
                                <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faUserCheck} /> &nbsp;로그인</Styled.NavButton>
                            </Link>
                        )}
                    </Styled.NavItem>
                </ul>
            </Styled.Navbar>

            {/* 로그아웃 모달 */}
            {showLogoutModal && (
                <LogoutModal
                    onCancel={() => setShowLogoutModal(false)}
                    onConfirm={handleLogoutConfirm}
                />
            )}
        </Styled.Wrapper>
    );
};

export default Header;
