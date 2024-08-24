import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2A2A2A;
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
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  margin-top: 10px;
`;

const PostCount = styled.div`
  background: #19191B;
  color: white;
  font-size: 24px;
  font-family: 'Work Sans', sans-serif;
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
  background: #181A2A;
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
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #97989F;
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
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
  transform: translateX(${props => props.show ? '0' : '100%'});
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
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  border-radius: 6px;
  margin-right: 10px;
`;

const InstagramText = styled.div`
  color: white;
  font-size: 18px;
  font-family: 'Work Sans', sans-serif;
`;

const TemplateTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-family: 'Work Sans', sans-serif;
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
  background: #3C9C54;
  color: white;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 13px;
  margin-top: 20px;
  cursor: pointer;
`;

interface Post {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
}

const MyPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState <Post | null>(null);

  const posts = [
    { id: 1, title: "레시피 제목", image: "/images/record-img.jpg", author: "업로드한 사람", date: "August 20, 2022" },
    { id: 2, title: "레시피 제목", image: "/images/record-img.jpg", author: "업로드한 사람", date: "August 20, 2022" },
    { id: 3, title: "레시피 제목", image: "/images/record-img.jpg", author: "업로드한 사람", date: "August 20, 2022" },
    { id: 4, title: "레시피 제목", image: "/images/record-img.jpg", author: "업로드한 사람", date: "August 20, 2022" },
  ];

  const templates = [
    { id: 1, image: "/images/template01.png" },
    { id: 2, image: "/images/template02.png" },
  ];

  return (
    <PageContainer>
      <MainContent>
        <ProfileSection>
          <ProfileImage src="/images/profile.png" alt="Profile" />
          <ProfileName>무적의 비건</ProfileName>
          <PostCount>32 Tree Post</PostCount>
        </ProfileSection>
        <PostGrid>
          {posts.map(post => (
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
                <div style={{color: 'white'}}>자세히 보기</div>
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
              {templates.map(template => (
                <TemplateItem key={template.id}>
                  <TemplateImage src={template.image} alt={`Template ${template.id}`} />
                  <TemplateCheckbox type="checkbox" />
                </TemplateItem>
              ))}
            </TemplateGrid>
            <TemplateButton>템플릿 선택</TemplateButton>
          </>
        )}
      </DetailModal>
    </PageContainer>
  );
};

export default MyPage;