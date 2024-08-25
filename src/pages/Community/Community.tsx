import styled from "styled-components";
import { FaVideo } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";

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
      <main>
        <LeftBox>
          <WriteBox>
            <div>
              <img src="/images/profile1.png" />
              <p>비건으로 즐기는 하루, 공유하시겠어요?</p>
            </div>
            <div>
              <div>
                <FaVideo />
                <div>영상 첨부하기</div>
              </div>
              <div>
                <MdAddPhotoAlternate />
                <div>사진 추가하기</div>
              </div>
            </div>
          </WriteBox>
          <PostImg src="/images/community.png" />
        </LeftBox>
        <RightBox>
          <PostImg src="/images/community2.png" />
        </RightBox>
      </main>
    </Container>
  );
};

export default Community;

const Container = styled.main`
  height: calc(100dvh - var(--header-height));
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & header {
    display: flex;
    gap: 30px;
    margin-top: 50px;
  }

  & main {
    height: 50%;
    width: 70%;
    margin-top: 50px;
    display: flex;
    gap: 50px;
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

const WriteBox = styled.section`
  padding: 20px 0;
  border-radius: 10px;
  background-color: #222324;

  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  & > div {
    display: flex;
    gap: 10px;
    justify-content: center;

    & p {
      width: 80%;
      background-color: #333435;
      border-radius: 50px;
      color: gray;
      line-height: 60px;
      padding-left: 20px;
    }
  }

  & > div:last-child {
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;

    & svg {
      font-size: 30px;
      color: #d41967;
    }
    & div {
      width: 45%;
      background-color: #333435;
      border-radius: 10px;
      color: gray;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      padding: 6px;
      cursor: pointer;
    }
  }
`;

const LeftBox = styled.article`
  width: 65%;
`;

const PostImg = styled.img`
  margin-top: 30px;
`;

const RightBox = styled.article`
  width: 35%;
`;
