import React, { useState } from "react";
import * as Styled from "./SignUp.styled";
import { useNavigate } from "react-router-dom";
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";
import Lock from "../assets/Lock.png";
import Customer from "../assets/Customer.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [isParticipant, setIsParticipant] = useState(false); // 기본 값은 false (아니요)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 보이기 여부
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 요청:", { username, password, passwordConfirm });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // 드롭다운 보이기/숨기기 토글
  };

  const handleParticipantChange = (value) => {
    setIsParticipant(value); // 선택한 값에 따라 상태 변경
    setIsDropdownVisible(false); // 선택 후 드롭다운 숨김
  };

  return (
    <Styled.Wrapper>
      <Styled.SignUpContainer>
        <Styled.StyledH2>4호선톤 가입하고 피드백 남기러 가자!</Styled.StyledH2>
        <Styled.StyledH1>회원가입 하기</Styled.StyledH1>

        <Styled.LoginBody>
          <Styled.TabContainer>
            <Styled.Tab onClick={() => navigate("/login")}>로그인</Styled.Tab>
            <Styled.Tab active>회원가입</Styled.Tab>
          </Styled.TabContainer>

          <Styled.Form onSubmit={handleLogin}>
            <Styled.NameAndPw>
              <Styled.Title>&nbsp;이름 및 비밀번호 설정</Styled.Title>

              <Styled.InputWrapper>
                <Styled.Icon src={Customer} alt="아이디 아이콘" />
                <Styled.Input type="text" placeholder="아이디를 입력해주세요" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Styled.InputWrapper>

              <Styled.PasswordField1>
                <Styled.InputWrapper>
                  <Styled.Icon src={Lock} alt="비밀번호 아이콘" />
                  <Styled.Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Styled.ToggleButton type="button" onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? BlindNone : Blind} alt="비밀번호 보기 전환" />
                  </Styled.ToggleButton>
                </Styled.InputWrapper>
              </Styled.PasswordField1>

              <Styled.PasswordField2>
                <Styled.InputWrapper>
                  <Styled.Icon src={Lock} alt="비밀번호 확인 아이콘" />
                  <Styled.Input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </Styled.InputWrapper>
              </Styled.PasswordField2>
            </Styled.NameAndPw>

            {/* 새로운 참여자 정보 입력란 (아이콘 제거 및 여백 조정) */}
            <Styled.NameAndPw>
              <Styled.Title>&nbsp;참여자 정보 입력</Styled.Title>

              <Styled.InputWrapperNoIcon>
                <Styled.Input type="text" placeholder="이름을 입력해주세요" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
              </Styled.InputWrapperNoIcon>

              <Styled.InputWrapperNoIcon>
                <Styled.Input
                  type="text"
                  value={isParticipant ? "네 참여자입니다" : "아니요 (운영진/심사위원/외부인) 입니다"}
                  placeholder="해커톤 참여자이신가요?"
                  disabled
                />
                <Styled.ToggleButton type="button" onClick={toggleDropdown}>
                  ▼
                </Styled.ToggleButton>
              </Styled.InputWrapperNoIcon>

              {isDropdownVisible && (
                <Styled.ParticipantOptions>
                  <Styled.Option onClick={() => handleParticipantChange(true)}>네 참여자입니다</Styled.Option>
                  <Styled.Option onClick={() => handleParticipantChange(false)}>아니요 (운영진/심사위원/외부인) 입니다</Styled.Option>
                </Styled.ParticipantOptions>
              )}
            </Styled.NameAndPw>

            <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          </Styled.Form>
        </Styled.LoginBody>
      </Styled.SignUpContainer>
    </Styled.Wrapper>
  );
};

export default SignUp;
