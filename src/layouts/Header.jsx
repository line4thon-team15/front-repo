// src/layouts/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './Header.styled';
import { useScroll } from './ScrollContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faBars, faCircleArrowRight, faFaceSmile, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../contexts/AuthContext'; // AuthContext import

const Header = ({ isIntro }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { scrollToHome, scrollToRanking } = useScroll();
    const { isAuthenticated, logout } = useAuth(); // 로그인 상태와 로그아웃 함수 가져오기
    const navigate = useNavigate();

        // isAuthenticated가 변경될 때마다 컴포넌트를 리렌더링
        useEffect(() => {}, [isAuthenticated]);

    const GoHome = () => {
        navigate('/')
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
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faFaceSmile} /> &nbsp;마이 페이지</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        {isAuthenticated ? (
                            <Styled.NavButton
                                $isWhiteBackground={isIntro}
                                onClick={logout} // 로그아웃 함수 호출
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
        </Styled.Wrapper>
    );
};

export default Header;
