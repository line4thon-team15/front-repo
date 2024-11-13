import React from 'react';
import * as Styled from './Footer.styled';
import Lottie from 'lottie-react';
import FooterAnimation from '@/assets/Lotties/SubwayAnii.json'

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Lottie
        animationData={FooterAnimation}
        loop={true}       // 반복 애니메이션
        style={{
          width: '220px',
          position: 'absolute',
          left: '-15px',
          bottom: '150px',
          zIndex: '0',
          // opacity: '30%',
        }}  // 아이콘 크기 조정
      />
      <Styled.List>
        <Styled.ListItem style={{ zIndex: '1' }}>
          PD 전효준<br />
          FE 신채린<br />
          FE 이주원<br />
          BE 조희원<br />
          BE 황채현<br />
          BE 홍상희
        </Styled.ListItem>
      </Styled.List>
      <Styled.Paragraph >
        site by 채널십오역
      </Styled.Paragraph>
    </Styled.Wrapper>
  );
};

export default Footer;
