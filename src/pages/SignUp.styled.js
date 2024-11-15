import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Content = styled.div`
  width: 540px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  margin-bottom: 150px;
`;

export const SignUpContainer = styled.div`
  width: 490px;
  padding: 20px;
  background-color: #ffffff;
`;

export const IDAndPw = styled.div`
  width: 470px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  padding-left: 15px;
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

export const LoginBody = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #454545;
  margin-top: 50px;
  border-radius: 10px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 15px 20px;
  border: none;
  background: ${(props) => (props.active ? "#ffffff" : "#f0f0f0")};
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  outline: none;

  &:first-child {
    border-right: 1px solid #ccc;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto 10px auto;
`;

export const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 35%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const Icon2 = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 430px;
  padding: 12px 12px 12px 45px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &::placeholder {
    color: #d6d6d6;
  }
`;

export const PasswordField1 = styled.div`
  position: relative;
`;

export const PasswordField2 = styled.div`
  position: relative;
`;

export const Ment = styled.div`
  font-size: 13px;
  color: #77a71d;
  margin-top: 4px;
  margin-left: 0;
  text-align: right;
  padding-right: 5px;
  height: 20px;
  line-height: 20px;
`;

export const MentWarning = styled.div`
  font-size: 13px;
  color: red;
  margin-top: 4px;
  margin-left: 0;
  text-align: right;
  padding-right: 5px;
  height: 20px;
  line-height: 20px;
`;

export const Information = styled.div`
  margin-top: 30px;
  width: 470px;
  background-color: white;
`;

export const UnivAndTeam = styled.div`
  margin-top: 30px;
  width: 470px;
  background-color: white;
`;

export const InputWrapperNoIcon = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto 15px auto;
`;

export const InputNOI = styled.input`
  width: 430px;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  margin: 0 auto;

  &::placeholder {
    color: #d6d6d6;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 35%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ToggleButton2 = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ParticipantOptions = styled.div`
  width: 90%;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 25px;
  overflow: hidden;
  margin-top: 0;
`;

export const Option = styled.div`
  padding: 12px;
  text-align: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  background-color: #f5f5f5;
  border-top: 1px solid #f5f5f5;

  &:first-child {
    border-top: none;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const LoginButton = styled.button`
  width: 450px;
  padding: 12px;
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#03f")};
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 100px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 25px;
  transition: background-color 0.3s;
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;
