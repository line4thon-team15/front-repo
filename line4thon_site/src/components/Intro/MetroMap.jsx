import { useState, useEffect, useRef } from 'react';
import * as M from "@/components/Intro/MetroStye"
import Train from '@/assets/Intro/subway_Illust.png'

const MetroMap = ({ teamData }) => {
    const [activeIndex, setActiveIndex] = useState(0); // 현재 Active 상태인 버튼 인덱스
    const [currentGroup, setCurrentGroup] = useState(0); // 현재 버튼 그룹 인덱스
    const [isAnimating, setIsAnimating] = useState(false); // 그룹 전환 중 여부
    const buttonRefs = useRef([]);
    const trainRef = useRef();
    const buttonGroupRef  = useRef(); // 버튼 그룹 div 참조

    const buttonGroups = teamData
        .filter((team) => team.service_name)
        .reduce((acc, team, index) => {
            const groupIndex = Math.floor(index / 5); //현재요소/5의 정수화 ( 1/5 => 0, 2/5 =>0 ...)
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(team);
            return acc;
        }, []);

    // 기차 애니메이션 및 버튼 Active 제어
    useEffect(() => {
        let interval;

        if (buttonGroups.length > 0) {
            interval = setInterval(() => {
                const groupSize = buttonGroups[currentGroup].length;

                if (activeIndex < groupSize - 1) {
                    // 현재 그룹에서 순차적으로 Active 상태 업데이트
                    setActiveIndex((prev) => prev + 1);
                } else {  
                        // 기차 애니메이션을 포함하여 버튼 그룹 전환
                        setIsAnimating(true);
                        setTimeout(() => {
                            setActiveIndex(0); // 첫 번째 버튼으로 초기화
                            setCurrentGroup((prev) => (prev + 1) % buttonGroups.length); // 마지막 그룹일 경우 첫 번째 그룹으로 순환
                            setIsAnimating(false);
                    }, 5000); // 그룹 전환 텀 5초
                }
            }, 7000); // 5초 정차 + 2초 이동 = 7초
        }

        return () => clearInterval(interval); // cleanup
    }, [currentGroup, activeIndex]);

    // 기차 위치 업데이트
    // 활성화된 버튼에 따라 기차 위치 업데이트
    useEffect(() => {
        if (buttonRefs.current[activeIndex]) {
            const buttonPosition = buttonRefs.current[activeIndex].getBoundingClientRect().left;
            trainRef.current.style.transform = `translateX(${buttonPosition}px)`;
        }
    }, [activeIndex]);


    return (
        <M.MetroMap>
            <M.Train src={Train} ref={trainRef} isAnimating={isAnimating} alt='기차' />
            <M.MetroLine>
                <div id='line'></div>
                <M.GroupContainer ref={buttonGroupRef} isAnimating={isAnimating}>
                {buttonGroups[currentGroup]?.map((team, index) => (
                    <M.StationBtn
                        key={team.id}
                        ref={(el) => (buttonRefs.current[index] = el)}
                        isActive={index === activeIndex}
                    >
                        {team.team_num}
                    </M.StationBtn>
                ))}
                </M.GroupContainer>
            </M.MetroLine>
        </M.MetroMap >
    );
}

export default MetroMap;