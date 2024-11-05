import { useState, useEffect, useRef } from 'react';
import * as S from './IntroPagestyled';

const IntroPage = () => {
    const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
    const LogoStyle = {
        transform: `translate(${logoPosition.x}px, ${logoPosition.y}px)`
    }
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // 50% 이상 보일 때 감지
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) observer.unobserve(divRef.current);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const x = Math.sin(window.scrollY / 100) * 100;
            const y = window.scrollY * 0.1;

            setLogoPosition({ x, y });
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <S.IntroPage>
            <h1>스크롤하여 아래로 내려보세요</h1>
            <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv> <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv> <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv> <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv> <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv> 
            <S.AnimatedDiv ref={divRef} isVisible={isVisible}>
                뷰포트에 들어오면 애니메이션이 나타납니다!
            </S.AnimatedDiv>                
            <S.Logo style={LogoStyle}>
                4
            </S.Logo>
        </S.IntroPage>
    );
};

export default IntroPage;
