import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './IntroPagestyled';
import FisrtText from '../components/Intro/FirstText';
import MetroMap from '@/components/Intro/MetroMap';
import TestImg1 from '@/assets/TestImg/TestImg1.png';
import axios from 'axios';

const IntroPage = ({ mainScroll, API_BASE_URL }) => {
    const [firstTextVisible, setFirstTextVisible] = useState(false);
    const [teamData, setTeamData] = useState([]);
    const windowHeight = window.innerHeight;
    const scrollRatio = Math.min(mainScroll / windowHeight, 1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentGroup, setCurrentGroup] = useState(0);
    const Navigate = useNavigate();

    // 이미지 맵 설정 (API 데이터와 정확히 일치하는 키로 설정)
    const imageMap = {
        'TestImg1': TestImg1,
    };

    useEffect(() => {
        setFirstTextVisible(true);
    }, []);


    // API에서 팀 데이터 가져오기
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/main/route-map`);
                setTeamData(Array.isArray(response.data) ? response.data : []);
                console.log("받은 데이터 :", response.data);
            } catch (error) {
                console.error("데이터 가져오기 오류:", error);
                setTeamData([]);
            }
        };
        fetchTeamData();
    }, []);


    // teamData를 그룹별로 나누기
    const buttonGroups = teamData
        .filter((team) => team.service_name)
        .reduce((acc, team, index) => {
            const groupIndex = Math.floor(index / 5);
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(team);
            return acc;
        }, []);

    // 현재 인덱스 번호 구하기
    const globalActiveIndex = currentGroup * 5 + activeIndex;
    const activeTeam = buttonGroups.flat()[globalActiveIndex];

    const GoDetail = () => {
        Navigate(`/Detail/${teamNum}`);
    };

    return (
        <S.IntroPage>
            <S.ServiceCard scrollRatio={scrollRatio}>
                {activeTeam && (
                    <>
                        <img
                           src={`${activeTeam.thumbnail_image || TestImg1}`}
                           alt={activeTeam.service_name}
                        />
                        <div id='descripCont'>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                                <h2 className="common-text" id='title'>{activeTeam.service_name}</h2>
                                <p className="common-text" id='intro'>{activeTeam.intro}</p>
                            </div>
                            <p className="common-text" id='teamNum'>[{activeTeam.team_num}팀] {activeTeam.team_name}</p>
                        </div>
                    </>
                )}
                <S.Overlay className="overlay">
                    <S.GoReviewBtn className="view-more-btn" onClick={GoDetail}>
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
