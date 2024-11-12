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
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 요청:", { username, password, passwordConfirm });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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

              {/* 아이디 입력 필드에 Customer 아이콘 추가 */}
              <Styled.InputWrapper>
                <Styled.Icon src={Customer} alt="아이디 아이콘" />
                <Styled.Input type="text" placeholder="아이디를 입력해주세요" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Styled.InputWrapper>

              {/* 비밀번호 입력 필드에 Lock 아이콘 추가 */}
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

            <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          </Styled.Form>
        </Styled.LoginBody>
      </Styled.SignUpContainer>
    </Styled.Wrapper>
  );
};

export default SignUp;
