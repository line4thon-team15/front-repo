// src/layouts/LogoutModal.jsx
import React from 'react';
import * as Styled from './LogoutModalStyle';

const LogoutModal = ({ onConfirm, onCancel }) => {
    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <p>정말 로그아웃 하시겠습니까?</p>
                <Styled.ButtonContainer>
                    <button onClick={onConfirm}>예</button>
                    <button onClick={onCancel}>아니오</button>
                </Styled.ButtonContainer>
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default LogoutModal;
