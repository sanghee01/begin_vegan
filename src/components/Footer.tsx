import styled from "styled-components";

function Footer() {
  return <Container>채식 사이트</Container>;
}

const Container = styled.div`
  width: 100%;
  height: var(--footer-height); //index.css에 변수선언 되어있음
  padding: 30px 0;
  background-color: #f7f7f7;
  color: gray;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid lightgray;
`;

export default Footer;
