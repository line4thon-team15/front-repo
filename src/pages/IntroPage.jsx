import { useState, useEffect } from 'react';
import * as S from './IntroPagestyled';
import FisrtText from '../components/Intro/FirstText';
import MetroMap from '@/components/Intro/MetroMap';
import TestImg1 from '@/assets/TestImg/TestImg1.png';
import TestImg3 from '@/assets/TestImg/TestImg2.png';
import TestImg5 from '@/assets/TestImg/TestImg3.png'

const IntroPage = ({ mainScroll }) => {
    const [firstTextVisible, setFirstTextVisible] = useState(false);
    const windowHieght = window.innerHeight;
    const scrollRatio = Math.min(mainScroll / windowHieght, 1);
    const [activeIndex, setActiveIndex] = useState(0); // 현재 Active 상태인 버튼 인덱스
    const [currentGroup, setCurrentGroup] = useState(0); // 현재 버튼 그룹 인덱스

    const imageMap = {
        TestImg1: TestImg1,
        TestImg3: TestImg3,
        TestImg5: TestImg5
        // 다른 이미지들도 여기에 추가
    };

    useEffect(() => {
        setFirstTextVisible(true);
    }, []);


    const teamData = [];

    for (let i = 1; i <= 20; i++) {
        const isOdd = i % 2 !== 0;

        teamData.push({
            id: i,
            service_name: isOdd ? `서비스이름${i}` : null,
            thumbnail_image: isOdd ? `TestImg${i}` : null,
            intro: isOdd ? `사이트소개${i}` : null,
            team_num: i,
            team_name: `TeamName ${i}`,
            site_url: isOdd ? `url${i}` : null
        })
    }
    const buttonGroups = teamData
    .filter((team) => team.service_name)
    .reduce((acc, team, index) => {
        const groupIndex = Math.floor(index / 5); //현재요소/5의 정수화 ( 1/5 => 0, 2/5 =>0 ...)
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(team);
        return acc;
    }, []);

    //현재 인덱스 번호 구하기
    const globalActiveIndex = currentGroup * 5 + activeIndex; // 각 그룹당 5개씩이므로
    const activeTeam = buttonGroups.flat()[globalActiveIndex];

    console.log(activeTeam.thumbnail_image); //결과 : TestImg1

    return (
        <S.IntroPage >
            <S.ServiceCard scrollRatio={scrollRatio}>
                <img src={imageMap[activeTeam.thumbnail_image]} alt={imageMap[activeTeam.thumbnail_image]}/>    {/* //이미지 로드 안됨 */}
                <div id='descripCont'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <h2 class="common-text" id='title'>{activeTeam.service_name}</h2>
                        <p class="common-text" id='intro'>{activeTeam.intro}</p>
                    </div>

                    <p class="common-text" id='teamNum'>[{activeTeam.team_num}팀] {activeTeam.team_name}</p>
                </div>
                <S.Overlay className="overlay">
                    <S.GoReviewBtn className="view-more-btn">
                        리뷰 남기기
                    </S.GoReviewBtn>
                </S.Overlay>
            </S.ServiceCard>
            <FisrtText
                firstTextVisible={firstTextVisible}
                setFirstTextVisible={setFirstTextVisible}
            />
            <MetroMap 
                buttonGroups={buttonGroups}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                currentGroup={currentGroup}
                setCurrentGroup={setCurrentGroup}
                />
        </S.IntroPage>
    );
};

export default IntroPage;
