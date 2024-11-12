import React, { useState } from "react";
import * as Styled from "./Login.styled";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // navigate 함수 생성

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://4thline.kr/services/4line-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        // 성공 시 홈으로 이동 (예시)
        // window.location.href = "/home";
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Styled.Wrapper>
      <Styled.LoginContainer>
        <Styled.StyledH2>지금 로그인 하고</Styled.StyledH2>
        <Styled.StyledH1>다양한 서비스를 만나보세요!</Styled.StyledH1>
        <Styled.LoginBody>
          <Styled.TabContainer>
            <Styled.Tab active>로그인</Styled.Tab>
            <Styled.Tab onClick={() => navigate("/SignUp")}>회원가입</Styled.Tab> {/* 회원가입 탭 클릭 시 이동 */}
          </Styled.TabContainer>
          <Styled.Form onSubmit={handleLogin}>
            <Styled.Input type="text" placeholder="아이디를 입력해주세요" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Styled.PasswordField>
              <Styled.Input
                type={passwordVisible ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Styled.ToggleButton type="button" onClick={togglePasswordVisibility}>
                <img src={passwordVisible ? BlindNone : Blind} alt="비밀번호 보기 전환" />
              </Styled.ToggleButton>
            </Styled.PasswordField>
            {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
            <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          </Styled.Form>
        </Styled.LoginBody>
      </Styled.LoginContainer>
    </Styled.Wrapper>
  );
};

export default Login;
