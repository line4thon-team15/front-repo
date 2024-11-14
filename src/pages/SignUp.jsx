import React, { useState } from "react";
import * as Styled from "./SignUp.styled";
import { useNavigate } from "react-router-dom";
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";
import Lock from "../assets/Lock.png";
import Customer from "../assets/Customer.png";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";

const SignUp = ({ API_BASE_URL }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [isParticipant, setIsParticipant] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [schoolDropdownVisible, setSchoolDropdownVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [schools] = useState(["국민대", "덕성여대", "동국대", "서경대", "성균관대", "성신여대", "숙명여대", "한성대"]);
  const [teamDropdownVisible, setTeamDropdownVisible] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [teams] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  console.log(API_BASE_URL, "/accounts/signup/");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // 에러 메시지 초기화

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userData = isParticipant
        ? {
            username: username,
            password: password,
            password2: passwordConfirm,
            is_participant: true,
            name: participantName,
            univ: selectedSchool,
            team: selectedTeam,
        }
        : {
            username: username,
            password: password,
            password2: passwordConfirm,
            is_participant: false,
            name: participantName,
        };

    console.log("서버에 전송할 데이터:", userData);

    try {
      const response = await axios.post(`${API_BASE_URL}accounts/signup/`, userData);
      console.log("회원가입 성공:", response.data);
      alert("회원가입이 성공했습니다. 로그인 페이지로 이동합니다.");
      navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (error) {
      if (error.response) {
        console.log("HTTP 상태 코드:", error.response.status);
        console.log("응답 데이터:", error.response.data);
        alert(`회원가입 실패: ${error.response.data}`);
      } else {
        console.log("요청 오류:", error.message);
        alert("요청 오류가 발생했습니다.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleParticipantDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleSchoolDropdown = () => {
    setSchoolDropdownVisible(!schoolDropdownVisible);
  };

  const toggleTeamDropdown = () => {
    setTeamDropdownVisible(!teamDropdownVisible);
  };

  const handleParticipantChange = (value) => {
    setIsParticipant(value);
    setIsDropdownVisible(false);
  };

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
    setSchoolDropdownVisible(false);
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setTeamDropdownVisible(false);
  };

  const isFormValid = () => {
    if (isParticipant === false) {
      return username && password && passwordConfirm && participantName;
    } else if (isParticipant === true) {
      return username && password && passwordConfirm && participantName && selectedSchool && selectedTeam;
    }
    return false;
  };

  return (
    <Styled.Wrapper>
      <Header isWhiteBackground={true} />
      <Styled.ContentContainer>
        <Styled.Content>
          <Styled.SignUpContainer>
            <Styled.StyledH2>4호선톤 가입하고 피드백 남기러 가자!</Styled.StyledH2>
            <Styled.StyledH1>회원가입 하기</Styled.StyledH1>

            <Styled.LoginBody>
              <Styled.TabContainer>
                <Styled.Tab onClick={() => navigate("/login")}>로그인</Styled.Tab>
                <Styled.Tab active>회원가입</Styled.Tab>
              </Styled.TabContainer>

              <Styled.Form onSubmit={handleSignUp}>
                <Styled.IDAndPw>
                  <Styled.Title>&nbsp;아이디 및 비밀번호 설정</Styled.Title>

                  <Styled.InputWrapper>
                    <Styled.Icon src={Customer} alt="아이디 아이콘" />
                    <Styled.Input type="text" placeholder="아이디를 입력해주세요" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Styled.Ment>한글은 입력 불가능합니다.</Styled.Ment>
                    <Styled.MentWarning>잘못된 형식입니다.</Styled.MentWarning>
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
                    <Styled.Ment>8자리 이상 입력해주세요.(특수문자 1개 이상 포함)</Styled.Ment>
                    <Styled.MentWarning>잘못된 형식입니다.</Styled.MentWarning>
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
                    <Styled.MentWarning>비밀번호가 일치하지 않습니다.</Styled.MentWarning>
                  </Styled.PasswordField2>
                </Styled.IDAndPw>

                {/* 참여자 정보 입력 */}
                <Styled.Information>
                  <Styled.Title>&nbsp;참여자 정보 입력</Styled.Title>

                  <Styled.InputWrapperNoIcon>
                    <Styled.InputNOI
                      type="text"
                      placeholder="이름을 입력해주세요"
                      value={participantName}
                      onChange={(e) => setParticipantName(e.target.value)}
                    />
                  </Styled.InputWrapperNoIcon>
                  <Styled.InputWrapperNoIcon>
                    <Styled.InputNOI
                      type="text"
                      value={isParticipant === true ? "네 참여자입니다" : isParticipant === false ? "아니요 (운영진/심사위원/외부인) 입니다" : ""}
                      placeholder="해커톤 참여자이신가요?"
                      readOnly
                      onClick={toggleParticipantDropdown}
                    />
                    <Styled.ToggleButton type="button" onClick={toggleParticipantDropdown}>
                      ▼
                    </Styled.ToggleButton>
                  </Styled.InputWrapperNoIcon>

                  {isDropdownVisible && (
                    <Styled.ParticipantOptions>
                      <Styled.Option onClick={() => handleParticipantChange(true)}>네 참여자입니다</Styled.Option>
                      <Styled.Option onClick={() => handleParticipantChange(false)}>아니요 (운영진/심사위원/외부인) 입니다</Styled.Option>
                    </Styled.ParticipantOptions>
                  )}
                </Styled.Information>

                {/* 학교 및 소속 선택 */}
                {isParticipant && (
                  <Styled.UnivAndTeam>
                    <Styled.Title>&nbsp;학교 및 소속 선택</Styled.Title>

                    {/* 학교 선택 */}
                    <Styled.InputWrapperNoIcon>
                      <Styled.InputNOI type="text" value={selectedSchool} placeholder="소속 학교를 선택해주세요" readOnly onClick={toggleSchoolDropdown} />
                      <Styled.ToggleButton type="button" onClick={toggleSchoolDropdown}>
                        ▼
                      </Styled.ToggleButton>
                    </Styled.InputWrapperNoIcon>

                    {schoolDropdownVisible && (
                      <Styled.ParticipantOptions>
                        {schools.map((school, index) => (
                          <Styled.Option key={index} onClick={() => handleSchoolSelect(school)}>
                            {school}
                          </Styled.Option>
                        ))}
                      </Styled.ParticipantOptions>
                    )}

                    {/* 팀 선택 */}
                    <Styled.InputWrapperNoIcon>
                      <Styled.InputNOI type="text" value={selectedTeam} placeholder="소속 팀을 선택해주세요" readOnly onClick={toggleTeamDropdown} />
                      <Styled.ToggleButton type="button" onClick={toggleTeamDropdown}>
                        ▼
                      </Styled.ToggleButton>
                    </Styled.InputWrapperNoIcon>

                    {teamDropdownVisible && (
                      <Styled.ParticipantOptions>
                        {teams.map((team, index) => (
                          <Styled.Option key={index} onClick={() => handleTeamSelect(`${team}`)}>
                            {team}팀
                          </Styled.Option>
                        ))}
                      </Styled.ParticipantOptions>
                    )}
                  </Styled.UnivAndTeam>
                )}

                {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
                <Styled.LoginButton type="submit" disabled={!isFormValid()} >
                  가입하기
                </Styled.LoginButton>
              </Styled.Form>
            </Styled.LoginBody>
          </Styled.SignUpContainer>
        </Styled.Content>
      </Styled.ContentContainer>

      <Footer />
    </Styled.Wrapper>
  );
};

export default SignUp;
