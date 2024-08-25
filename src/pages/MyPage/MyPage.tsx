import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2a2a2a;
  padding: 20px;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled.img`
  width: 158px;
  height: 158px;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  color: white;
  font-size: 26px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  margin-top: 10px;
`;

const PostCount = styled.div`
  background: #19191b;
  color: white;
  font-size: 24px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 10px;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const PostCard = styled.div`
  background: #181a2a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px #242535 solid;
  position: relative;
  cursor: pointer;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 16px;
`;

const PostTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #97989f;
  font-size: 14px;
  font-family: "Work Sans", sans-serif;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PostCard}:hover & {
    opacity: 1;
  }
`;

interface DetailModalProps {
  show: boolean;
}

const DetailModal = styled.div<DetailModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 33%;
  height: 100%;
  background: rgba(217, 217, 217, 0.3);
  padding: 20px;
  overflow-y: auto;
  transform: translateX(${(props) => (props.show ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const InstagramSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InstagramIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  border-radius: 6px;
  margin-right: 10px;
`;

const InstagramText = styled.div`
  color: white;
  font-size: 18px;
  font-family: "Work Sans", sans-serif;
`;

const TemplateTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const TemplateItem = styled.div`
  position: relative;
`;

const TemplateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const TemplateCheckbox = styled.input`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`;

const TemplateButton = styled.button`
  width: 100%;
  height: 63px;
  background: #3c9c54;
  color: white;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 13px;
  margin-top: 20px;
  cursor: pointer;
`;

const BlogImagesSection = styled.div`
  margin-top: 20px;
`;

const BlogImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const BlogImageItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BlogImageCheckbox = styled.input`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`;

const InsertButton = styled(TemplateButton)`
  background: #4caf50;
  margin-top: 10px;
`;

interface Post {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
}

interface BlogImage {
  id: number;
  url: string;
}

interface Template {
  id: number;
  image: string;
}

const MyPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [blogImages, setBlogImages] = useState<BlogImage[]>([]);
  const [selectedBlogImages, setSelectedBlogImages] = useState<number[]>([]);
  const [selectedTemplates, setSelectedTemplates] = useState<number[]>([]);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0); // 현재 선택 중인 템플릿의 인덱스
  const [loading, setLoading] = useState(false);

  const posts = [
    {
      id: "0090c6ca-8ae9-473e-92cb-d67dde0721fb",
      title: "버섯, 토마토 건강식!",
      image: "/images/1.jpg",
      author: "시차",
      date: "August 20, 2022",
    },
    {
      id: "ed3cf0a2-289c-4627-bf8a-5ed74c89d1db",
      title: "비건 라자냐",
      image: "/images/2.jpg",
      author: "시차",
      date: "August 3, 2022",
    },
    {
      id: "b",
      title: "행복 비건!",
      image: "/images/3.jpg",
      author: "시차",
      date: "August 10, 2022",
    },
    {
      id: "c",
      title: "맛도리 도리 도리",
      image: "/images/4.jpg",
      author: "시차",
      date: "August 15, 2022",
    },
  ];

  const templates: Template[] = [
    { id: 1, image: "/images/template01.png" },
    { id: 2, image: "/images/template02.png" },
  ];

  // Flask 서버로부터 이미지를 가져오는 함수
  const loadBlogImages = async () => {
    if (!selectedPost) {
      alert("먼저 게시글을 선택하세요.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("143.248.198.13:5001/get-images", {
        post_id: selectedPost.id,
      });

      setBlogImages(
        response.data.image_paths.map((url: string, index: number) => ({
          id: index + 1,
          url,
        }))
      );
    } catch (error) {
      console.error("이미지를 불러오는 데 실패했습니다:", error);
      alert("이미지를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 템플릿 선택 로직
  const handleTemplateSelect = (id: number) => {
    setSelectedTemplates((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((templateId) => templateId !== id)
        : [...prevSelected, id]
    );
  };

  // 블로그 이미지 선택 로직
  const handleBlogImageSelect = (id: number) => {
    setSelectedBlogImages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((imageId) => imageId !== id)
        : [...prevSelected, id]
    );
  };

  const handleInsertImage = async () => {
    if (
      selectedPost &&
      selectedBlogImages.length > 0 &&
      selectedTemplates.length > 0
    ) {
      try {
        setLoading(true);

        if (currentTemplateIndex === 0) {
          // 첫 번째 이미지를 처리
          const response = await axios.post(
            "143.248.198.13:5001/process-first-image",
            {
              first_image_url: blogImages[selectedBlogImages[0] - 1].url,
            }
          );
          console.log(response.data);
        } else {
          // 네 개의 이미지를 처리
          const response = await axios.post(
            "143.248.198.13:5001/process-images",
            {
              life4cuts_image_urls: selectedBlogImages.map(
                (id) => blogImages[id - 1].url
              ),
            },
            {
              responseType: "blob", // binary data response
            }
          );

          // 받은 비디오 파일을 다운로드
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "final_video.mp4");
          document.body.appendChild(link);
          link.click();

          alert("영상이 성공적으로 생성되었습니다!");
        }
      } catch (error) {
        console.error("영상 생성 실패:", error);
        alert("영상 생성에 실패했습니다.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("템플릿과 이미지를 모두 선택해주세요.");
    }
  };

  const handleNextTemplate = () => {
    if (currentTemplateIndex === 0) {
      // 첫 번째 템플릿 완료 후 다음 템플릿으로 이동
      setCurrentTemplateIndex(1);
      setSelectedBlogImages([]);
    } else {
      handleInsertImage();
    }
  };

  return (
    <PageContainer>
      <MainContent>
        <ProfileSection>
          <ProfileImage src="/images/profile.png" alt="Profile" />
          <ProfileName>무적의 비건</ProfileName>
          <PostCount>4 Tree Post</PostCount>
        </ProfileSection>
        <PostGrid>
          {posts.map((post) => (
            <PostCard key={post.id} onClick={() => setSelectedPost(post)}>
              <PostImage src={post.image} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostInfo>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </PostInfo>
              </PostContent>
              <HoverOverlay>
                <div style={{ color: "white" }}>자세히 보기</div>
              </HoverOverlay>
            </PostCard>
          ))}
        </PostGrid>
      </MainContent>
      <DetailModal show={selectedPost !== null}>
        {selectedPost && (
          <>
            <CloseButton onClick={() => setSelectedPost(null)}>×</CloseButton>
            <InstagramSection>
              <InstagramIcon />
              <InstagramText>INSTAGRAM REELS / STORY</InstagramText>
            </InstagramSection>
            <TemplateTitle>Template</TemplateTitle>
            <TemplateGrid>
              {templates.map((template) => (
                <TemplateItem key={template.id}>
                  <TemplateImage
                    src={template.image}
                    alt={`Template ${template.id}`}
                    onClick={() => handleTemplateSelect(template.id)}
                  />
                  <TemplateCheckbox
                    type="checkbox"
                    checked={selectedTemplates.includes(template.id)}
                    onChange={() => handleTemplateSelect(template.id)}
                  />
                </TemplateItem>
              ))}
            </TemplateGrid>
            <TemplateButton onClick={loadBlogImages} disabled={loading}>
              {loading ? "이미지 불러오는 중..." : "이미지 불러오기"}
            </TemplateButton>
            {blogImages.length > 0 && (
              <BlogImagesSection>
                <TemplateTitle>Images</TemplateTitle>
                <BlogImageGrid>
                  {blogImages.map((image) => (
                    <BlogImageItem key={image.id}>
                      <BlogImage
                        src={image.url}
                        alt={`Blog Image ${image.id}`}
                        onClick={() => handleBlogImageSelect(image.id)}
                      />
                      <BlogImageCheckbox
                        type="checkbox"
                        checked={selectedBlogImages.includes(image.id)}
                        onChange={() => handleBlogImageSelect(image.id)}
                      />
                    </BlogImageItem>
                  ))}
                </BlogImageGrid>
                <InsertButton
                  onClick={handleNextTemplate}
                  disabled={loading || selectedBlogImages.length === 0}
                >
                  {currentTemplateIndex === 0
                    ? "다음 템플릿"
                    : loading
                    ? "생성 중..."
                    : "템플릿에 삽입"}
                </InsertButton>
              </BlogImagesSection>
            )}
          </>
        )}
      </DetailModal>
    </PageContainer>
  );
};

export default MyPage;
