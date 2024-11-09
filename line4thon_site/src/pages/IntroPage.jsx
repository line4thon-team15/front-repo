import { useState, useEffect } from 'react';
import * as S from './IntroPagestyled';
import FisrtText from '../components/Intro/FirstText';
import MetroMap from '@/components/Intro/MetroMap';
import TestImg1 from '@/assets/TestImg/TestImg1.png'

const IntroPage = ({ mainScroll }) => {
    const [firstTextVisible, setFirstTextVisible] = useState(false);
    const windowHieght = window.innerHeight;
    const scrollRatio = Math.min(mainScroll / windowHieght, 1);

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

    console.log(teamData);
    console.log(String(teamData[0].thumbnail_image));

    return (
        <S.IntroPage >
            <S.ServiceCard scrollRatio={scrollRatio}>
                {/* <img src={String(teamData[0].thumbnail_image)} alt="team-thumbnail" /> */}
                <img src={TestImg1} />
                <div id='descripCont'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <h2 class="common-text" id='title'>{teamData[0].service_name}</h2>
                        <p class="common-text" id='intro'>{teamData[0].intro}</p>
                    </div>

                    <p class="common-text" id='teamNum'>[{teamData[0].team_num}팀] {teamData[0].team_name}</p>
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
            <MetroMap mainScroll={mainScroll} />
        </S.IntroPage>
    );
};

export default IntroPage;
