// MainPage.jsx
import React, { useRef, useEffect, useState } from 'react';
import Ranking from '../pages/Ranking';
import * as Styled from './MainPage.styled';
import Header from '../layouts/Header';
import MainAllServices from '../pages/MainAllServices';
import Footer from '../layouts/Footer';
import { useScroll } from '../layouts/ScrollContext';
import IntroPage from '../pages/IntroPage';

const MainPage = () => {
    const servicesRef = useRef(null);
    const { homeRef, rankingRef } = useScroll();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isWhiteBackground, setIsWhiteBackground] = useState(false);

    const updateScroll = () => {
        const position = window.scrollY || document.documentElement.scrollTop;
        setScrollPosition(position);
        setIsWhiteBackground(position > 300); // 스크롤 위치가 300 이상일 때 배경색을 흰색으로 설정
    };

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 로드 시 최상단으로 스크롤
        window.addEventListener('scroll', updateScroll);
        return () => {
            window.removeEventListener('scroll', updateScroll); // 언마운트 시 이벤트 제거
        };
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        setScrollDirection((prev) => (scrollPosition > prev ? 'down' : 'up'));

        if (scrollDirection === 'down' && scrollPosition >= windowHeight * (currentIndex + 0.9)) {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 3)); // 최대 인덱스 3 (Footer)
        } else if (scrollDirection === 'up' && scrollPosition < windowHeight * (currentIndex - 0.1)) {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    useEffect(() => {
        if (currentIndex === 0) {
            homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (currentIndex === 1) {
            rankingRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (currentIndex === 2) {
            servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentIndex]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection]);

    return (
        <Styled.Wrapper>
            {/* IntroPage */}
            <div ref={homeRef} id="home" style={{ height: '100vh' }}>
                <IntroPage />
            </div>
            
            {/* RankingPage와 MainAllServices 섹션을 고정된 Header와 함께 배치 */}
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ position: 'sticky', top: 0, width: '200px', height: '100vh' }}>
                    <Header />
                </div>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {/* RankingPage */}
                    <div ref={rankingRef} id="ranking" style={{ height: '100vh' }}>
                        <Ranking />
                    </div>
                    <div ref={servicesRef} style={{ height: '100vh' }}>
                        <MainAllServices />
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </Styled.Wrapper>
    );
};

export default MainPage;
