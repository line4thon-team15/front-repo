import { useState, useEffect, useRef } from 'react';
import * as S from '@/pages/IntroPagestyled'
import Lottie from 'lottie-react';
import bounceArrow from '@/assets/Lotties/DownArrow.json'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FisrtText = ({ firstTextVisible, setFirstTextVisible }) => {

    useEffect(() => {
        setFirstTextVisible(true);
    }, []);

    return (
        <>
            <S.FirstText firstTextVisible={firstTextVisible}>
                <div>
                    <p>멋쟁이 사자들의 2024 마지막</p>
                    <h1>해커톤</h1>
                </div>
                <div>
                    <h1>: 4호선톤</h1>
                </div>
                <div>
                    <h1>모아보기, 평가하기</h1>
                </div>
                <S.NextIcon>
                    <Lottie
                        animationData={bounceArrow}
                        loop={true}       // 반복 애니메이션
                        style={{ width: 60, height: 60 }}  // 아이콘 크기 조정
                    />
                </S.NextIcon>
            </S.FirstText>
        </>
    );
};

export default FisrtText;
