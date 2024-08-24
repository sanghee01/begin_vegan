import { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>Login</Title>
      <LoginForm onSubmit={handleLoginSubmit}>
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호"
        />
        {/* <KeepLoginCheckBox>
          <input type="checkbox" />
          <span>로그인 상태 유지</span>
        </KeepLoginCheckBox> */}
        <Button type="submit">로그인</Button>
        <PageLink>
          <span onClick={() => navigate("/signup")}>회원가입</span>
          <span>|</span>
          <span>아이디/비밀번호 찾기</span>
        </PageLink>
      </LoginForm>
    </Container>
  );
};

const centeredFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${centeredFlex}
  height: calc(100dvh - var(--header-height) - 100px);
`;

const LoginForm = styled.form`
  ${centeredFlex}
  width: 100%;
  max-width: 400px;
  padding: 50px 30px;
  border: solid #ccd1d9 1px;
  border-radius: 15px;
  background-color: #a3a3a3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 30px;
  color: white;
  border-bottom: 1px solid var(--base-color);
  line-height: 2.3rem;
  letter-spacing: 1px;
`;

const Input = styled.input`
  width: 95%;
  height: 50px;
  padding: 0 30px;
  border: 1px solid #ccd1d9;
  border-radius: 30px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  &:focus {
    border-color: #0288d1;
    outline: none;
  }
`;

const Button = styled.button`
  width: 95%;
  height: 50px;
  background-color: var(--base-color);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    filter: brightness(90%);
  }
`;

// const KeepLoginCheckBox = styled.div`
//   display: flex;
//   justify-content: left;
//   font-size: 0.9rem;
//   color: white;
// `;

const PageLink = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.9rem;
  color: white;

  cursor: pointer;
`;

export default Login;
