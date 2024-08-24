import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src="/images/logo.png" alt="logo" onClick={() => navigate("/")} />
      <Tabs>
        <Tab>
          <Link to="/community">커뮤니티</Link>
        </Tab>
        <Tab>
          <Link to="/record">내 인증</Link>
        </Tab>
        <Tab>
          <Link to="/map">지도</Link>
        </Tab>
        <Tab>
          <Link to="/recipe">레시피</Link>
        </Tab>
      </Tabs>
      <LoginBtn>로그인</LoginBtn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: var(--header-height);
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: white;
  padding: 15px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: background-color 0.5s, backdrop-filter 0.5s, box-shadow 0.5s;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 230px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1400px) {
    padding-left: 30px;
  }
`;

const Tabs = styled.div`
  height: 54px;
  padding: 0 20%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
`;

const Tab = styled.div`
  position: relative;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.15rem;
    padding: 15px 0;
    position: relative;
    transition: color 0.3s;
  }
`;

const LoginBtn = styled.button`
  padding: 10px 15px;
  background-color: var(--base-color);
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
  }
`;
