import { useState, useEffect, useRef } from 'react';
import * as M from "@/components/Intro/MetroStye"
import Train from '@/assets/Intro/subway_Illust.png'

const MetroMap = ({ buttonGroups, activeIndex, setActiveIndex, currentGroup, setCurrentGroup }) => {
    const [isAnimating, setIsAnimating] = useState(false); // 그룹 전환 중 여부
    const buttonRefs = useRef([]);
    const trainRef = useRef();
    const buttonGroupRef = useRef(); // 버튼 그룹 div 참조

    

    // 기차 애니메이션 및 버튼 Active 제어
    useEffect(() => {
        let interval;
    
        if (buttonGroups.length > 0) {
            interval = setInterval(() => {
                const groupSize = buttonGroups[currentGroup].length;
    
                if (activeIndex < groupSize - 1) {
                    setActiveIndex((prev) => prev + 1);
                } else {
                    setIsAnimating(true);  // 그룹 전환 애니메이션 시작
                    setTimeout(() => {
                        setActiveIndex(0);
                        setCurrentGroup((prev) => (prev + 1) % buttonGroups.length); //그룹전환
                        setIsAnimating(false);  // 애니메이션 종료 후 위치 이동 허용
                    }, 1000); // 애니메이션이 완료될 때까지 1초
                }
            }, 6000); 
        }
    
        return () => clearInterval(interval);
    }, [currentGroup, activeIndex]);


    // 기차 위치 반응형 업데이트 (그룹 전환과는 별도로)
    useEffect(() => {
        if (!isAnimating) {  // 그룹 전환 중이 아닐 때만 위치 업데이트
            const updateTrainPosition = () => {
                if (buttonRefs.current[activeIndex]) {
                    const buttonPosition = buttonRefs.current[activeIndex].getBoundingClientRect();
                    const linePosition = buttonRefs.current[0].parentElement.getBoundingClientRect();
                    const relativeLeft = buttonPosition.left - linePosition.left;
                    trainRef.current.style.transform = `translateX(${relativeLeft}px)`;
                    trainRef.current.style.transition = 'transform 2s ease';
                }
            };
    
            updateTrainPosition(); 
            window.addEventListener('resize', updateTrainPosition);
    
            return () => window.removeEventListener('resize', updateTrainPosition);
        }
    }, [activeIndex, isAnimating]);  // isAnimating 상태에 따라 updateTrainPosition 실행 여부 결정

    const handleStationBtnCilck = (index) => {
        setActiveIndex(index);
    };

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
                            onClick={() => handleStationBtnCilck(index)}
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