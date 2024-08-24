import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Tabs>
        <Tab>
          <Link to="/community">Community</Link>
        </Tab>
        <Tab>
          <Link to="/map">MAP</Link>
        </Tab>
        <Tab>
          <Link to="/recipe">RECIPE</Link>
        </Tab>
        <Tab>
          <Link to="/mypage">My page</Link>
        </Tab>
      </Tabs>
      <LoginBtn>Log in!</LoginBtn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: right;
  gap: 10px;
  align-items: center;
  height: var(--header-height);
`;

const Tabs = styled.div`
  display: grid;
  background-color: #808080;
  grid-template-columns: repeat(4, 1fr);
  width: 35%;
  border-radius: 10px;
  height: 45px;
`;

const Tab = styled.div`
  & a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
  }
`;
const LoginBtn = styled.button`
  padding: 10px 40px;
  background-color: var(--base-color);
  border: none;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
  }
`;
