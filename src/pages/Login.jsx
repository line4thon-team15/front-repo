import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import * as Styled from "./Login.styled";
import { useNavigate } from "react-router-dom";
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";
import axios from "axios";

const Login = ({ API_BASE_URL }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log(`로그인 요청 URL: ${API_BASE_URL}/accounts/login/`);
      console.log("로그인 요청 데이터:", { username, password });

      const response = await axios.post(`${API_BASE_URL}/accounts/login/`, {
        username,
        password,
      });

      const data = response.data;
      console.log("로그인 성공:", data);
      localStorage.setItem("accessToken", data.access);
      navigate("/");
    } catch (error) {
      console.log("로그인 요청 실패:", error);

      if (error.response && error.response.data) {
        setError(error.response.data.error || "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
        console.log("서버 에러 메시지:", error.response.data.error);
      } else {
        setError("오류가 발생했습니다. 다시 시도해주세요.");
        console.log("요청 오류:", error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Styled.Wrapper>
      <Header isWhiteBackground={true} />
      <Styled.ContentAll>
        <Styled.Content>
          <Styled.LoginContainer>
            <Styled.StyledH2>지금 로그인 하고</Styled.StyledH2>
            <Styled.StyledH1>다양한 서비스를 만나보세요!</Styled.StyledH1>
            <Styled.LoginBody>
              <Styled.TabContainer>
                <Styled.Tab active>로그인</Styled.Tab>
                <Styled.Tab onClick={() => navigate("/SignUp")}>회원가입</Styled.Tab>
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
        </Styled.Content>
      </Styled.ContentAll>
      <Footer />
    </Styled.Wrapper>
  );
};

export default Login;
