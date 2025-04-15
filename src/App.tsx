import React, { useState } from 'react';
import styled from 'styled-components';
import LeftSidebar from './components/LeftSidebar';
import VideoChat from './components/VideoChat';
import Profile from './components/Profile';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f0f2f5;
`;

const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  margin-left: 80px;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #dee2e6;
    border-radius: 3px;
  }
`;

const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 40px;
  background: #ffffff;
`;

const WelcomeTitle = styled.h1`
  font-size: 48px;
  color: #1a1a1a;
  margin-bottom: 24px;
  font-weight: 700;
`;

const WelcomeText = styled.p`
  font-size: 18px;
  color: #65676b;
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.6;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  width: 100%;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    font-size: 40px;
    color: #176DEE;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: #65676b;
    line-height: 1.6;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;

  h2 {
    margin: 0;
    font-size: 20px;
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const ShareLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #176DEE;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f0f7ff;
  transition: background 0.2s;

  &:hover {
    background: #e6f0ff;
  }

  i {
    font-size: 16px;
  }
`;

const CommunityPage = styled.div`
  padding: 40px;
  background: #ffffff;
  min-height: 100vh;
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const CommunityCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  h3 {
    font-size: 18px;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #65676b;
    margin-bottom: 16px;
  }

  .members {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    font-size: 14px;

    i {
      color: #176DEE;
    }
  }
`;

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');

  const handleHomeClick = () => setActiveView('home');
  const handleVideoClick = () => setActiveView('video');
  const handleChatClick = () => setActiveView('community');
  const handleProfileClick = () => setActiveView('profile');

  const communities = [
    { id: 1, name: 'Yazılımcılar Topluluğu', members: 1250, description: 'Yazılım geliştirme hakkında her şey' },
    { id: 2, name: 'Kitap Kulübü', members: 850, description: 'Kitap önerileri ve tartışmalar' },
    { id: 3, name: 'Fotoğrafçılık', members: 2100, description: 'Fotoğraf teknikleri ve paylaşımlar' },
    { id: 4, name: 'Müzik Severler', members: 1500, description: 'Her tür müzik ve sohbet' },
    { id: 5, name: 'Yemek Tarifleri', members: 3200, description: 'Lezzetli tarifler ve püf noktaları' },
    { id: 6, name: 'Spor ve Sağlık', members: 1800, description: 'Sağlıklı yaşam için ipuçları' }
  ];

  return (
    <Container>
      <LeftSidebar
        onHomeClick={handleHomeClick}
        onVideoClick={handleVideoClick}
        onChatClick={handleChatClick}
        onProfileClick={handleProfileClick}
        activeView={activeView}
      />
      <MainContent>
        {activeView === 'home' && (
          <WelcomePage>
            <WelcomeTitle>Chat Words'e Hoş Geldiniz</WelcomeTitle>
            <WelcomeText>
              Arkadaşlarınızla görüntülü sohbet edin, mesajlaşın ve bağlantıda kalın.
              Modern ve kullanıcı dostu arayüzümüzle iletişim kurmanın en kolay yolu!
            </WelcomeText>
            <FeatureGrid>
              <FeatureCard>
                <i className="fas fa-video" />
                <h3>Video Görüşme</h3>
                <p>HD kalitesinde görüntülü görüşme yapın</p>
              </FeatureCard>
              <FeatureCard>
                <i className="fas fa-comments" />
                <h3>Anlık Mesajlaşma</h3>
                <p>Hızlı ve güvenli mesajlaşma deneyimi</p>
              </FeatureCard>
              <FeatureCard>
                <i className="fas fa-users" />
                <h3>Topluluklar</h3>
                <p>İlgi alanlarınıza göre topluluklara katılın</p>
              </FeatureCard>
            </FeatureGrid>
          </WelcomePage>
        )}
        {activeView === 'video' && (
          <>
            <TopBar>
              <h2>Görüşme Konusu: Aile</h2>
              <ShareLink>
                <i className="fas fa-link" />
                Bağlantıyı Linkini Paylaş
              </ShareLink>
            </TopBar>
            <VideoChat />
          </>
        )}
        {activeView === 'community' && (
          <CommunityPage>
            <TopBar>
              <h2>Topluluklar</h2>
            </TopBar>
            <CommunityGrid>
              {communities.map(community => (
                <CommunityCard key={community.id}>
                  <h3>{community.name}</h3>
                  <p>{community.description}</p>
                  <div className="members">
                    <i className="fas fa-users" />
                    {community.members.toLocaleString()} üye
                  </div>
                </CommunityCard>
              ))}
            </CommunityGrid>
          </CommunityPage>
        )}
        {activeView === 'profile' && <Profile />}
      </MainContent>
    </Container>
  );
};

export default App;
