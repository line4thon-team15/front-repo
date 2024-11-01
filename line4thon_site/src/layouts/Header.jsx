import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Header.styled';
import rankingicon from "../assets/rankingicon.svg";
import rankingiconHover from "../assets/rankingiconHover.svg";
import servicesicon from "../assets/servicesicon.svg";
import servicesiconHover from "../assets/servicesiconHover.svg";
import myserviceicon from "../assets/myserviceicon.svg";
import myserviceiconHover from "../assets/myserviceiconHover.svg";
import mypageicon from "../assets/mypageicon.svg";
import mypageiconHover from "../assets/mypageiconHover.svg";
import loginicon from "../assets/loginicon.svg";
import loginiconHover from "../assets/loginiconHover.svg";

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Styled.Wrapper>
            <Styled.Logo>
                <Link to="/homepage">
                <button>
                    4호선톤 <br />사이트
                </button>
                </Link>
            </Styled.Logo>
            <Styled.Navbar>
                <ul>
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(0)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/ranking">
                            <img src={hoveredIndex === 0 ? rankingiconHover : rankingicon} alt="ranking icon" />
                            <Styled.NavButton>랭킹</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(1)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/all-services">
                            <img src={hoveredIndex === 1 ? servicesiconHover : servicesicon} alt="services icon" />
                            <Styled.NavButton>전체 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(2)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-service">
                            <img src={hoveredIndex === 2 ? myserviceiconHover : myserviceicon} alt="myservice icon" />
                            <Styled.NavButton>내 서비스</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(3)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/my-page">
                            <img src={hoveredIndex === 3 ? mypageiconHover : mypageicon} alt="mypage icon" />
                            <Styled.NavButton>마이 페이지</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                    <Styled.NavItem 
                        onMouseEnter={() => setHoveredIndex(4)} 
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link to="/login">
                            <img src={hoveredIndex === 4 ? loginiconHover : loginicon} alt="login icon" />
                            <Styled.NavButton>로그인</Styled.NavButton>
                        </Link>
                    </Styled.NavItem>
                </ul>
            </Styled.Navbar>
        </Styled.Wrapper>
    );
};

export default Header;