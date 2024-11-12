// MainPage.jsx
import React, { useRef, useEffect, useState } from 'react';
import Ranking from '../pages/Ranking';
import * as Styled from './MainPage.styled';
import Header from '../layouts/Header';
import MainAllServices from '../pages/MainAllServices';
import Footer from '../layouts/Footer';
import { useScroll } from '../layouts/ScrollContext';
import IntroPage from '../pages/IntroPage';

const MainPage = ({ API_BASE_URL }) => {
    const servicesRef = useRef(null);
    const { homeRef, rankingRef } = useScroll();
    const [ mainScroll, setMainScroll ] = useState(0);
    const [isIntro, setIsIntro] = useState(true); // IntroPage 여부 상태 추가
    
    //MainPage의 높이를 측정 하는 함수
    function getScrollPosition() {
        let TargetElement = document.getElementById("MainPage");
        let y = TargetElement.scrollTop;
        setMainScroll(y);
        // console.log(y);

        // IntroPage의 높이를 예로 600px로 가정, 스크롤 위치에 따라 isIntro 값 변경
        const threshold = 1600;
        setIsIntro(y < threshold);
    }

    //getScrollPosition를 실행시키는 useEffect
    useEffect(() => {
        const targetElement = document.getElementById("MainPage");
        targetElement.addEventListener("scroll", getScrollPosition);

        return () => {
         if (targetElement) {
            targetElement.removeEventListener('scroll', getScrollPosition)
         }
        };
    }, []);


    return (
        <Styled.Wrapper id='MainPage'>
            {/* IntroPage */}
            <div ref={homeRef} id="home" >
                <IntroPage mainScroll={mainScroll} API_BASE_URL={API_BASE_URL}/>
            </div>
            
            {/* RankingPage와 MainAllServices 섹션을 고정된 Header와 함께 배치 */}
            <div style={{ display: 'flex' }}>
                <div style={{ position: 'sticky', top: 0, width: '200px', height: '100vh' }}>
                    <Header isIntro={isIntro} /> {/* isIntro 상태를 prop으로 전달 */}
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
