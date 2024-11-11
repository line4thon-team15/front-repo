import React, { useState } from "react";
import * as Styled from "./Login.styled";
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // 에러 메시지 초기화

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
        console.log("로그인 성공:", data);
        // 성공 시 access 토큰을 저장하거나 페이지를 이동
        localStorage.setItem("accessToken", data.access);
        // 예시: 홈 화면으로 이동
        // window.location.href = "/home";
      } else {
        const data = await response.json();
        console.log("로그인 실패:", data);
        setError(data.error); // 에러 메시지를 상태에 저장
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
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
            <Styled.Tab>회원가입</Styled.Tab>
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
            {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>} {/* 에러 메시지 표시 */}
            <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          </Styled.Form>
        </Styled.LoginBody>
      </Styled.LoginContainer>
    </Styled.Wrapper>
  );
};

export default Login;
