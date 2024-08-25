import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: #2a2a2a;
  color: white;
  font-family: "Work Sans", sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 572px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

const MapLink = styled.a`
  display: block;
  position: relative;
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1320px;
  max-height: 572px;
  object-fit: cover;
`;

const MapAttribution = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 7px 11px;
  background-color: rgba(249, 249, 249, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KakaoLogo = styled.img`
  width: 72px;
  height: 16px;
`;

const ViewLargeMapLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #000;
`;

const FilterBar = styled.div`
  width: 100%;
  height: 88px;
  background: rgba(79, 79, 79, 0.78);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const FilterText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const LatestPostTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const RecipeCard = styled.div`
  background: #181a2a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #242535;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 16px;
`;

const RecipeTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
`;

const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #97989f;
  font-size: 16px;
`;

const AuthorImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const ViewAllButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 12px 20px;
  background: transparent;
  border: 1px solid rgba(105, 106, 117, 0.3);
  border-radius: 6px;
  color: #696a75;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
const MapPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <MapContainer>
          <MapLink
            href="https://map.kakao.com/?target=other&folderid=1074289"
            target="_blank"
          >
            <MapImage
              src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=640&MX=657381&MY=890543&S=0&IW=1320&IH=572&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
              alt="대전 지도"
            />
            <MapAttribution>
              <KakaoLogo
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
              />
              <ViewLargeMapLink
                href="https://map.kakao.com/?target=other&folderid=1074289"
                target="_blank"
              >
                지도 크게 보기
              </ViewLargeMapLink>
            </MapAttribution>
          </MapLink>
        </MapContainer>
        <FilterBar>
          <FilterText>FILTER</FilterText>
        </FilterBar>
        <LatestPostTitle>Latest Post</LatestPostTitle>
        <RecipeGrid>
          {[...Array(6)].map((_, index) => (
            <RecipeCard key={index}>
              <RecipeImage
                src={
                  index % 2 === 0 ? "images/place01.jpg" : "images/place02.jpg"
                }
                alt={`Recipe ${index + 1}`}
              />
              <RecipeContent>
                <RecipeTitle>비건 식당</RecipeTitle>
                <RecipeInfo>
                  <AuthorImage src="image/profile.png" alt="Author" />
                  <span>업로드한 사람</span>
                  <span>August 20, 2022</span>
                </RecipeInfo>
              </RecipeContent>
            </RecipeCard>
          ))}
        </RecipeGrid>
        <ViewAllButton>View All Post</ViewAllButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default MapPage;
