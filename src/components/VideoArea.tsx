import styled from 'styled-components';
import userIcon1 from '../assets/user-icon-1.svg';
import userIcon2 from '../assets/user-icon-2.svg';
import userIcon3 from '../assets/user-icon-3.svg';
import userIcon4 from '../assets/user-icon-4.svg';

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  height: 100%;
  background-color: #F5F6F6;
  border-radius: 16px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #2b2d42;
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #666;
  font-size: 14px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #666;
  border-radius: 50%;
  display: inline-block;
`;

const ShareLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #176DEE;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f7ff;
  }

  i {
    font-size: 16px;
  }
`;

const MainVideo = styled.div`
  width: 75%;
  height: 50%;
  min-height: 280px;
  background-color: #2b2d42;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    width: 85%;
    min-height: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 200px;
    height: 40vh;
  }
`;

const ParticipantsContainer = styled.div`
  display: flex;
  gap: 75px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
  height: 120px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    gap: 40px;
    height: 110px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    height: 90px;
    padding: 0 10px;
  }
`;

const ParticipantVideo = styled.div`
  width: 180px;
  height: 120px;
  background-color: #2b2d42;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 110px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 90px;
  }
`;

const ParticipantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MainParticipantImage = styled(ParticipantImage)``;

const ParticipantName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 10px 0;
  margin-top: auto;
`;

const ControlButton = styled.button<{ isRed?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isRed ? '#FF4B4B' : '#2b2d42'};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isRed ? '#FF3333' : '#176DEE'};
    transform: scale(1.05);
  }

  i {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    
    i {
      font-size: 14px;
    }
  }
`;

const VideoArea: React.FC = () => {
  const handleCopyLink = () => {
    // URL'yi kopyalama işlemi burada yapılacak
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <VideoContainer>
      <Header>
        <TitleSection>
          <Title>Görüşme Konusu: Aile</Title>
          <SubInfo>
            <span>30 May 2022</span>
            <Dot>•</Dot>
            <span>Kaydediliyor 26:32</span>
          </SubInfo>
        </TitleSection>
        <ShareLink onClick={handleCopyLink}>
          <i className="fas fa-link"></i>
          <span>Bağlantıyı Linkini Paylaş</span>
        </ShareLink>
      </Header>
      <MainVideo>
        <MainParticipantImage src={userIcon1} alt="Ana konuşmacı" />
        <ParticipantName>Ahmet NUR</ParticipantName>
      </MainVideo>
      <ParticipantsContainer>
        <ParticipantVideo>
          <ParticipantImage src={userIcon2} alt="Katılımcı 1" />
          <ParticipantName>Yeliz KERİM</ParticipantName>
        </ParticipantVideo>
        <ParticipantVideo>
          <ParticipantImage src={userIcon3} alt="Katılımcı 2" />
          <ParticipantName>Serra KÜÇÜK</ParticipantName>
        </ParticipantVideo>
        <ParticipantVideo>
          <ParticipantImage src={userIcon4} alt="Katılımcı 3" />
          <ParticipantName>Can DİNÇ</ParticipantName>
        </ParticipantVideo>
      </ParticipantsContainer>
      <ControlsContainer>
        <ControlButton>
          <i className="fas fa-video-slash"></i>
        </ControlButton>
        <ControlButton>
          <i className="fas fa-microphone-slash"></i>
        </ControlButton>
        <ControlButton isRed>
          <i className="fas fa-phone-slash"></i>
        </ControlButton>
        <ControlButton>
          <i className="fas fa-desktop"></i>
        </ControlButton>
        <ControlButton>
          <i className="fas fa-info-circle"></i>
        </ControlButton>
      </ControlsContainer>
    </VideoContainer>
  );
};

export default VideoArea; 