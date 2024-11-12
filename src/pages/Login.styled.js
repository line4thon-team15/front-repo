import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e9ecef;
`;

export const LoginContainer = styled.div`
  width: 480px;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 250px; /* 사이드바를 고려한 마진 */
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
  margin-left: 5px;
`;

export const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  margin-left: 5px;
`;

export const LoginBody = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #454545;
  margin-top: 30px;
  border-radius: 10px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px;
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

export const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;

  &::placeholder {
    color: #d6d6d6;
  }
`;

export const PasswordField = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 42px;
  top: 25px;
  // top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;

  img {
    width: 20px; /* 이미지 크기 조절 */
    height: 20px;
  }
`;

export const LoginButton = styled.button`
  width: 90%;
  padding: 12px;
  background-color: #03f;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 25px;
`;
