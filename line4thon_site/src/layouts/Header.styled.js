import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 20px;
    background: transparent;
    font-weight: bold;
    width: 200px;
    height: 800px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



export const Logo = styled.div`
    a {
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
        font-size: 3.5vh;
        cursor: pointer;
        color: ${({ $isWhiteBackground }) => ($isWhiteBackground ? 'white' : 'black')};
        display: flex;
        align-items: left;
        padding: 4vh;
        text-align: left;
        line-height: 1.5;
        transition: color 0.3s ease; // 색상 전환을 부드럽게
    }
`;

// Navbar Styles
export const Navbar = styled.nav`
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin-left: 10%;
        padding: 2vh;
        width: 100%;
    }
`;

// NavItem Styles
export const NavItem = styled.li`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    margin: 1vh 0; 
    width: 100%;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        width: 100%;
    }

    img {
        margin-right: 1vh; /* 이미지 오른쪽에 여백 추가 */
    }
`;

// NavButton Styles
export const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 2vh;
    cursor: pointer;
    width: 100%;
    text-align: left;
    color: ${({ $isWhiteBackground }) => ($isWhiteBackground ? 'white' : 'black')};
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
        /* color: var(--accent-color); */
        background-color: var(--hover-bg-color);
    }
`;