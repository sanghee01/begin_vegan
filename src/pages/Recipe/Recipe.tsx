// import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px; // 헤더 높이만큼 여백 추가
  background: #2A2A2A;
  color: white;
  font-family: 'Work Sans', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  position: relative;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const BestRecipeOverlay = styled.div`
  width: 400px;
  padding: 20px;
  position: absolute;
  left: 20px;
  top: 20px; // 위치를 상단으로 변경
  background: rgba(124, 138, 245, 0.70);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Badge = styled.div`
  padding: 4px 10px;
  background: #4B6BFB;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-start;
`;

const BestRecipeTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #FFFFFF;
  font-size: 14px;
`;

const AuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const LatestPostTitle = styled.h2`
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 700;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const RecipeCard = styled.div`
  background: #181A2A;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #242535;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RecipeTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
`;

const ViewAllButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 12px 20px;
  background: transparent;
  border: 1px solid rgba(105, 106, 117, 0.30);
  border-radius: 6px;
  color: #696A75;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const categories = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACK'];

const RecipePage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <MainImageContainer>
          <MainImage src="images/mainImg1.png" alt="Main recipe" />
          <BestRecipeOverlay>
            <Badge>BEST RECIPE</Badge>
            <BestRecipeTitle>이번주 BEST RECIPE</BestRecipeTitle>
            <AuthorInfo>
              <AuthorImage src="images/profile.png" alt="Author" />
              <span>Jason Francisco</span>
              <span>•</span>
              <span>August 20, 2022</span>
            </AuthorInfo>
          </BestRecipeOverlay>
        </MainImageContainer>
        <LatestPostTitle>Latest Post</LatestPostTitle>
        <RecipeGrid>
          {[...Array(6)].map((_, index) => (
            <RecipeCard key={index}>
              <RecipeImage src={index % 2 === 0 ? "images/mainImg1.png" : "images/record-img.jpg"} alt={`Recipe ${index + 1}`} />
              <RecipeContent>
                <Badge>{categories[index % categories.length]}</Badge>
                <RecipeTitle>레시피 제목 {index + 1}</RecipeTitle>
                <AuthorInfo>
                  <AuthorImage src="images/profile.png" alt="Author" />
                  <span>업로드한 사람</span>
                  <span>•</span>
                  <span>August 20, 2022</span>
                </AuthorInfo>
              </RecipeContent>
            </RecipeCard>
          ))}
        </RecipeGrid>
        <ViewAllButton>View All Post</ViewAllButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default RecipePage;