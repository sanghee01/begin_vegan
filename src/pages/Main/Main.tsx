import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { postState } from "../../state/postState";
import { postImgState } from "../../state/postState";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { supabase } from "../../supabaseClient";
import { userState } from "../../state/userState";

interface PostType {
  id: string;
  title: string;
  content: string;
}

interface PostImgType {
  img: string;
}

const Main = () => {
  const [posts, setPosts] = useRecoilState<PostType[] | null>(postState);
  const [postImages, setPostImages] = useRecoilState<PostImgType[] | null>(
    postImgState
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalId, setModalId] = useState<string>();
  const [treeImg, setTreeImg] = useState<string[]>([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    getPost();
  }, []);

  const handleOpenModal = (post: PostType) => {
    setModalId(post.id);
    console.log("모달띄우기", post);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const getPostImg = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from("images")
        .select("image_path")
        .eq("post_id", id);

      if (error) {
        console.log("에러 발생: " + error.message);
        return;
      }
      console.log("이미지데이터", data);

      if (data && data.length === 0) {
        setTreeImg(data[0].image_path);
      } else if (data && data.length > 0) {
        setTreeImg((prev) => [...prev, data[0].image_path]);
      }
    } catch (error) {
      console.log("오류가 발생했습니다.", error);
    }
  };

  console.log("treeImg", treeImg);

  const getPost = async () => {
    try {
      const { data, error } = await supabase
        .from("post")
        .select()
        .eq("user_id", user);

      if (error) {
        console.log("에러 발생: " + error.message);
        return;
      }

      console.log("가져온 데이터:", data);

      setPosts(data);

      if (data) {
        // 각 포스트의 이미지를 순차적으로 가져옵니다.
        for (const post of data) {
          await getPostImg(post.id);
        }
      }
    } catch (error) {
      console.log("오류가 발생했습니다.", error);
    }
  };

  return (
    <Container>
      <Sections>
        <Section>
          <h2>내일을 위한 선택, 오늘 하루 채식으로 시작하세요!</h2>
          <div>
            <span>축산업은 전 세계 온실가스 배출의 약 14.5%를 차지합니다.</span>
            <span>채식 한 끼가 이를 감소시키는 데 기여할 수 있습니다.</span>
            <span>유엔 식량농업기구(FAO)</span>
          </div>
          <div>
            <span>육류 소비를 줄이는 것만으로도 2050년까지 </span>
            <span>2백만 제곱킬로미터의 땅을 보존할 수 있습니다.</span>
            <span>세계 자원 연구소(WRI)의 보고서</span>
          </div>
        </Section>
        <Section>
          <img src="/images/mainImg1.png" />
          <DescWord>
            <div>채식, 다채롭게</div>
            <h1>RECIPE</h1>
          </DescWord>
        </Section>
      </Sections>
      <Sections>
        <Section>
          <BigWord>
            <h1>MEAT</h1>
            <h1>FREE</h1>
            <h1>MONDAY</h1>
          </BigWord>
        </Section>
        <Section>
          <img src="/images/mainImg2.png" />
          <DescWord2>
            <div>집 밖에서 즐기는 채식</div>
            <h1>VEG-Map</h1>
          </DescWord2>
        </Section>
      </Sections>
      <TreeBox>
        <TreeImg src="/images/tree.png" alt="tree" />
        {posts &&
          treeImg &&
          treeImg.map((imgSrc: string, index: number) => (
            <RecordImg
              onClick={() => handleOpenModal(posts[index])}
              key={index}
              src={imgSrc}
              alt="recordImg"
            />
          ))}
        {isOpenModal && (
          <ModalBox>
            <header>
              <IoClose onClick={handleCloseModal} />
            </header>
            <main>
              <img src={treeImg[0]} alt="record-img" />
              <div>
                <h3>{posts[0].title}</h3>
                <span>{posts[0].content}</span>
              </div>
            </main>
          </ModalBox>
        )}
      </TreeBox>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  height: calc(100dvh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Sections = styled.div`
  height: 35dvh;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  font-weight: 600;
`;

const Section = styled.section`
  color: white;

  &:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & div {
      display: flex;
      flex-direction: column;

      & span:last-child {
        color: #7e7e7e;
      }
    }
  }

  &:last-child {
    display: flex;
    justify-content: right;
  }
  & img {
    width: 80%;
    height: 330px;
    object-fit: cover;
    opacity: 0.4;
  }
`;

const BigWord = styled.div`
  margin-top: 70px;
  h1 {
    font-size: 5rem;
    color: #36c50a;
    letter-spacing: 1px;
    line-height: 4.7rem;
  }
`;

const DescWord = styled.div`
  position: absolute;
  text-align: right;
  font-size: 1.3rem;
  padding: 30px;
  font-weight: 600;

  & h1 {
    font-size: 4rem;
    font-weight: 900;
  }
`;

const DescWord2 = styled(DescWord)`
  bottom: 40px;
`;

const TreeBox = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: black;
  border-radius: 50%;
  border: 30px solid var(--background-color);

  @media screen and (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
`;

const TreeImg = styled.img`
  width: 400px;
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
`;

const RecordImg = styled.img`
  position: absolute;
  object-fit: cover;
  width: 60px;
  height: 60px;
  border-radius: 10px;

  &:nth-child(2) {
    top: 50px;
    right: 250px;
  }
  &:nth-child(3) {
    top: 100px;
    right: 100px;
  }
  &:nth-child(4) {
    top: 200px;
    right: 40px;
  }
  &:nth-child(5) {
    top: 200px;
    right: 330px;
  }
  &:nth-child(6) {
    top: 240px;
    right: 440px;
  }
  &:nth-child(7) {
    top: 120px;
    right: 400px;
  }
  &:nth-child(8) {
    top: 190px;
    right: 170px;
  }
`;

const ModalBox = styled.div`
  position: fixed;
  padding: 20px;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  right: 200px;

  & header {
    display: flex;
    justify-content: right;
  }

  & svg {
    font-size: 30px;
  }
  & main {
    padding: 10px;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & span {
      font-size: 0.9rem;
      color: #7f7f7f;
    }
  }

  & img {
    border-radius: 5px;
  }
`;
