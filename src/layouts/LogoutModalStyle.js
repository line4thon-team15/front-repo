// src/layouts/LogoutModal.styled.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    z-index: 1000;
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;

    button {
        width: 100px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease
    }

    button:hover{
        background-color: #A6A6A6;
    }
`;
