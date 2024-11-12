import React from 'react';
import * as Styled from './Wrapper.styled'; // 모든 스타일을 Styled 객체로 가져오기

const Wrapper = ({ children }) => {
  return (
    <Styled.WrapperDiv>
      <Styled.InnerWrapper>{children}</Styled.InnerWrapper>
    </Styled.WrapperDiv>
  );
};

export default Wrapper;
