// src/pages/MainPage.jsx
import React, { useRef, useEffect, useState } from 'react';
import HomePage from './IntroPage';
import Ranking from './Ranking';
import * as Styled from './MainPage.styled';
import Header from '../layouts/Header';
import MainAllServices from './MainAllServices';
import Footer from '../layouts/Footer';
import { useScroll } from '../layouts/ScrollContext';
import IntroPage from './IntroPage';

const MainPage = () => {
    const servicesRef = useRef(null);
    const { homeRef, rankingRef } = useScroll();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // 초기 로드 시 최상단으로 스크롤
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        setScrollDirection((prev) => (scrollPosition > prev ? 'down' : 'up'));

        if (scrollDirection === 'down' && scrollPosition >= windowHeight * (currentIndex + 0.9)) {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 3)); // Footer까지 포함하여 최대 인덱스 3으로 설정
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
        } else if (currentIndex === 3) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Footer 위치로 이동
        }
    }, [currentIndex]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection]);

    return (
        <Styled.Wrapper>
            {/* IntroPage */}
            <div ref={homeRef} id="home">
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
                    
                    {/* MainAllServices */}
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
