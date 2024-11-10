import { useState, useEffect, useRef } from 'react';
import * as M from "@/components/Intro/MetroStye"
import Train from '@/assets/Intro/subway_Illust.png'

const MetroMap = ({ teamData }) => {
    const [activeIndex, setActiveIndex] = useState(0); // 현재 Active 상태인 버튼 인덱스
    const [currentGroup, setCurrentGroup] = useState(0); // 현재 버튼 그룹 인덱스
    const buttonRefs = useRef([]);
    const trainRef = useRef();

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
                    // 현재 그룹 순회를 마치면 다음 그룹으로 이동
                    setActiveIndex(0); // 다음 그룹 첫 버튼으로 초기화
                    setCurrentGroup((prev) => (prev + 1) % buttonGroups.length); // 마지막 그룹이면 첫 그룹으로 순환
                }
            }, 7000); // 5초 정차 + 2초 이동 = 7초
        }

        return () => clearInterval(interval); // cleanup
    }, [currentGroup, activeIndex]);

    // 기차 위치 업데이트
    useEffect(() => {
        const updateTrainPosition = () => {
            if (buttonRefs.current[activeIndex]) {
                const buttonPosition = buttonRefs.current[activeIndex].getBoundingClientRect();
                const linePosition = buttonRefs.current[0].parentElement.getBoundingClientRect();
                const relativeLeft = buttonPosition.left - linePosition.left; // 버튼의 상대적 위치
                trainRef.current.style.transform = `translateX(${relativeLeft}px)`;
                trainRef.current.style.transition = 'transform 2s ease'; // 부드러운 이동
            }
        };

        updateTrainPosition(); // 초기 위치 설정
        window.addEventListener('resize', updateTrainPosition); // 반응형 위치 업데이트

        return () => window.removeEventListener('resize', updateTrainPosition);
    }, [activeIndex]);



    return (
        <M.MetroMap>
            <M.Train src={Train} ref={trainRef} alt='기차' />
            <M.MetroLine>
                <div id='line'></div>
                {buttonGroups[currentGroup]?.map((team, index) => (
                    <M.StationBtn
                        key={team.id}
                        ref={(el) => (buttonRefs.current[index] = el)}
                        isActive={index === activeIndex}
                    >
                        {team.team_num}
                    </M.StationBtn>
                ))}
            </M.MetroLine>
        </M.MetroMap >
    );
}

export default MetroMap;