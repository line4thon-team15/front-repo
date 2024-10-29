import React from 'react';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.List>
        <Styled.ListItem>
          PD 전효준<br />
          FE 신채린<br />
          FE 이주원<br />
          BE 조희원<br />
          BE 황채현<br />
          BE 홍상희
        </Styled.ListItem>
      </Styled.List>
      <Styled.Paragraph>site by 채널십오역</Styled.Paragraph>
    </Styled.Wrapper>
  );
};

export default Footer;
