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

    function getScrollPosition() {
        let TargetElement = document.getElementById("MainPage")
        let y = TargetElement.scrollTop
        console.log(y)
    }

    useEffect(() => {
        getScrollPosition()
    }, [y])


    return (
        <Styled.Wrapper id='MainPage'>
            {/* IntroPage */}
            <div ref={homeRef} id="home" >
                <IntroPage />
            </div>
            
            {/* RankingPage와 MainAllServices 섹션을 고정된 Header와 함께 배치 */}
            <div style={{ display: 'flex' }}>
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
