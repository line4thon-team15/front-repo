import { useState, useEffect, useRef } from 'react';
import * as M from "@/components/Intro/MetroStye"
import { useNavigate } from 'react-router-dom';

const MetroMap = ({ introRef }) => {
    const teamNumber = [];
    const teamPath = [];
    const [activeIndex, setActiveIndex] = useState(null);
    const buttonRefs = useRef([]);
    const navigate = useNavigate();

    //임의의 리스트 생성
    for (let i = 1; i <= 20; i++) {
        teamNumber.push(i);
        teamPath.push(`a${i}`);
    }

    // const handleClick = (teamPath) => {
    //     // teamPath에 따라 이동하고자 하는 페이지로 네비게이션
    //     navigate(`/team/${teamPath}`);
    // }

    const handleClick = (index) => {
        // 클릭된 버튼이 뷰포트의 중앙에 오도록 스크롤
        const button = buttonRefs.current[index];
        if (button) {
            button.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        setActiveIndex(index); // 클릭된 버튼을 활성화 상태로 업데이트
    };
    
    const handleActive = () => {
        const viewportCenter = introRef.current.clientHeight / 2;  // IntroPage 높이의 중앙

        buttonRefs.current.forEach((button, index) => {
            if (button) {
                const { top, bottom } = button.getBoundingClientRect();
                const buttonCenter = (top + bottom) / 2 - introRef.current.getBoundingClientRect().top;

                // 버튼의 중앙이 뷰포트 중앙에 가까운지 확인
                if (Math.abs(buttonCenter - viewportCenter) < 100) {
                    setActiveIndex(index);
                }
            }
        });
    };

    useEffect(() => {
        const introElement = introRef.current;
        introElement.addEventListener('scroll', handleActive);
        return () => {
            introElement.removeEventListener('scroll', handleActive);
        };
    }, []);

    return (
        <M.MetroMap>
            <div>
                asdfsdfsdfwsefa
            </div>
            <M.RightBox>
                <M.MetroLine>
                    <div id='line'></div>
                    {teamNumber.map((team, index) => (
                        <M.StationBtn
                            key={index}
                            ref={(el) => (buttonRefs.current[index] = el)}
                            isActive={index === activeIndex}
                            onClick={() => handleClick(index)}
                        >
                            {teamNumber[index]}
                        </M.StationBtn>
                    ))}
                </M.MetroLine>
            </M.RightBox>
        </M.MetroMap >
    );
}

export default MetroMap;