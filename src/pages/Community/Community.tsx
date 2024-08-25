import styled from "styled-components";

const Community = () => {
  return (
    <Container>
      <header>
        <StoryBox>
          <StoryImg src="/images/record-img.jpg" />
          <StoryImg src="/images/blogimage02.jpeg" />
          <StoryImg src="/images/story1.jpeg" />
          <StoryImg src="/images/story2.jpg" />
        </StoryBox>
        <Anounce>
          <h3>공지사항</h3>
          <p>비건의 날 인스타그램 스토리 공유 행사!</p>
        </Anounce>
      </header>
    </Container>
  );
};

export default Community;

const Container = styled.main`
  height: calc(100dvh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & header {
    display: flex;
    gap: 30px;
    margin-top: 50px;
  }
`;

const StoryBox = styled.div`
  display: flex;
  gap: 10px;
`;

const StoryImg = styled.img`
  object-fit: cover;
  height: 300px;
  width: 170px;
  border-radius: 5px;
`;

const Anounce = styled.div`
  height: 300px;
  width: 400px;
  border-radius: 10px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  & p {
    color: rgba(0, 0, 0, 0.7);
  }
`;
