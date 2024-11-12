// src/layouts/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Header.styled';
import { useScroll } from './ScrollContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const Header = ({ isIntro }) => { // isIntro prop 추가
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { scrollToHome, scrollToRanking } = useScroll();

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };
    
    return (
        <Styled.Wrapper>
            <Styled.Logo $isWhiteBackground={isIntro}> {/* isIntro에 따라 색상 설정 */}
            <button onClick={scrollToHome}> {/* 4호선톤 버튼 클릭 시 scrollToHome 호출 */}
                    4호선톤 <br />사이트
                </button>
            </Styled.Logo>
            <Styled.Navbar>
                <ul>
                    {/* 랭킹 버튼 */}
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(0)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={scrollToRanking} // 랭킹 버튼 클릭 시 스크롤 이동
                    >
                        <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faCrown} /> &nbsp;랭킹</Styled.NavButton>
                    </Styled.NavItem>
                    
                    {/* 전체 서비스 페이지로 이동 */}
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(1)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/all-services">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faBars} /> &nbsp;전체 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    
                    {/* 내 서비스 페이지로 이동 */}
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(2)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-service">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faCircleArrowRight} /> &nbsp;내 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    
                    {/* 마이페이지로 이동 */}
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(3)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-page">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faFaceSmile} /> &nbsp;마이 페이지</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    
                    {/* 로그인 페이지로 이동 */}
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(4)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/login">
                            <Styled.NavButton $isWhiteBackground={isIntro}><FontAwesomeIcon icon={faUserCheck} /> &nbsp;로그인</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                </ul>
            </Styled.Navbar>
        </Styled.Wrapper>
    );
};

export default Header;
