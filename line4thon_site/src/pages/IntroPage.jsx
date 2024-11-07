import { useState, useEffect, useRef } from 'react';
import * as S from './IntroPagestyled';
import FisrtText from '../components/Intro/FirstText';
import MetroMap from '@/components/Intro/MetroMap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const IntroPage = () => {
    const [firstTextVisible, setFirstTextVisible] = useState(false);

    useEffect(() => {
        setFirstTextVisible(true);
    }, []);

    return (
        <S.IntroPage>
            <FisrtText
                firstTextVisible={firstTextVisible}
                setFirstTextVisible={setFirstTextVisible}
            />
            <MetroMap/>
        </S.IntroPage>
    );
};

export default IntroPage;
