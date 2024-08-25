import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../state/userState";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <Container>
      <Tabs>
        <Tab isactive={location.pathname === "/community"}>
          <Link to="/community">Community</Link>
        </Tab>
        <Tab isactive={location.pathname === "/map"}>
          <Link to="/map">MAP</Link>
        </Tab>
        <Tab isactive={location.pathname === "/recipe"}>
          <Link to="/recipe">RECIPE</Link>
        </Tab>
        <Tab isactive={location.pathname === "/mypage"}>
          <Link to="/mypage">My page</Link>
        </Tab>
      </Tabs>
      {user ? (
        <LoginBtn>안녕하세요</LoginBtn>
      ) : (
        <LoginBtn onClick={() => navigate("/login")}>Log in!</LoginBtn>
      )}
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

const Tab = styled.div<{ isactive: boolean }>`
  & a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => (props.isactive ? "#00820F" : "white")};
    background-color: ${(props) => props.isactive && "white"};
    border-radius: 10px;
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
