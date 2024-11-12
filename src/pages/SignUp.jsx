import React, { useState } from "react";
import * as Styled from "./SignUp.styled";
import { useNavigate } from "react-router-dom";
import Blind from "../assets/Blind.png";
import BlindNone from "../assets/Blind_none.png";
import Lock from "../assets/Lock.png";
import Customer from "../assets/Customer.png";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [isParticipant, setIsParticipant] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [schoolDropdownVisible, setSchoolDropdownVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [schools, setSchools] = useState(["국민대", "덕성여대", "동국대", "서경대", "성균관대", "성신여대", "숙명여대", "한성대"]);

  const [teamDropdownVisible, setTeamDropdownVisible] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [teams, setTeams] = useState([
    "1팀",
    "2팀",
    "3팀",
    "4팀",
    "5팀",
    "6팀",
    "7팀",
    "8팀",
    "9팀",
    "10팀",
    "11팀",
    "12팀",
    "13팀",
    "14팀",
    "15팀",
    "16팀",
    "17팀",
    "18팀",
    "19팀",
    "20팀",
  ]);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 요청:", { username, password, passwordConfirm });
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
      <Styled.Content>
        <Styled.SignUpContainer>
          <Styled.StyledH2>4호선톤 가입하고 피드백 남기러 가자!</Styled.StyledH2>
          <Styled.StyledH1>회원가입 하기</Styled.StyledH1>

          <Styled.LoginBody>
            <Styled.TabContainer>
              <Styled.Tab onClick={() => navigate("/login")}>로그인</Styled.Tab>
              <Styled.Tab active>회원가입</Styled.Tab>
            </Styled.TabContainer>

            <Styled.Form onSubmit={handleLogin}>
              <Styled.IDAndPw>
                <Styled.Title>&nbsp;아이디 및 비밀번호 설정</Styled.Title>

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
              </Styled.IDAndPw>

              {/* 참여자 정보 입력 */}
              <Styled.Information>
                <Styled.Title>&nbsp;참여자 정보 입력</Styled.Title>

                <Styled.InputWrapperNoIcon>
                  <Styled.InputNOI type="text" placeholder="이름을 입력해주세요" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
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
                        <Styled.Option key={index} onClick={() => handleTeamSelect(team)}>
                          {team}
                        </Styled.Option>
                      ))}
                    </Styled.ParticipantOptions>
                  )}
                </Styled.UnivAndTeam>
              )}

              <Styled.LoginButton type="submit" disabled={!isFormValid()} isFormValid={isFormValid()}>
                가입하기
              </Styled.LoginButton>
            </Styled.Form>
          </Styled.LoginBody>
        </Styled.SignUpContainer>
      </Styled.Content>

      <Footer />
    </Styled.Wrapper>
  );
};

export default SignUp;
