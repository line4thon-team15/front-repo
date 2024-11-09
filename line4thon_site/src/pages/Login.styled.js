import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export const Content = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  height: calc(100% - 120px);
  background-color: #e9ecef;
`;

// Menubar 스타일 정의
export const MenuBar = styled.div`
  font-size: 1rem;
`;

export const Box = styled.div`
`