import React from 'react';
import styled from 'styled-components';
import LeftSidebar from './LeftSidebar';
import VideoArea from './VideoArea';
import ChatArea from './ChatArea';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  margin: 40px;
  display: flex;
  gap: 45px;

  @media (max-width: 1024px) {
    width: calc(100% - 40px);
    height: auto;
    margin: 20px;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    gap: 10px;
  }
`;

const MainSection = styled.div`
  flex: 1;
  display: flex;
  gap: 45px;
  min-width: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const VideoChat: React.FC = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <LeftSidebar />
        <MainSection>
          <VideoArea />
          <ChatArea />
        </MainSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default VideoChat; 