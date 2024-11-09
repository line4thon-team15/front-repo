import styled from 'styled-components';

// Wrapper 스타일 정의
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    width: calc(100% - 200px);
    margin-left: 200px;
    // height: calc(100% - 120px);
    // width: 100%;
    height: 100%; /* 원하는 높이로 설정 */    
    background-color: black;
`;

// Menubar 스타일 정의
export const MenuBar = styled.div`
    font-size: 1rem;
    color: white;
`;
