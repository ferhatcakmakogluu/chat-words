import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './Profile';

interface User {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  email: string;
  isCameraOff?: boolean;
  isMicOff?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1F2937;
  position: relative;
`;

const VideoArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

const VideoBox = styled.div<{ isCameraOff?: boolean }>`
  width: 100%;
  height: 100%;
  background: ${props => props.isCameraOff ? '#374151' : '#000000'};
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ParticipantInfo = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
`;

const ParticipantName = styled.span`
  font-size: 14px;
`;

const MicIcon = styled.div<{ isOff?: boolean }>`
  width: 24px;
  height: 24px;
  background: ${props => props.isOff ? '#EF4444' : '#10B981'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;

const Controls = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  padding: 16px;
  background: rgba(31, 41, 55, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  z-index: 100;
`;

const ControlButton = styled.button<{ isActive?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? '#EF4444' : '#4B5563'};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isActive ? '#DC2626' : '#374151'};
  }
`;

const VideoChat: React.FC = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeView, setActiveView] = useState<'video' | 'profile'>('video');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const participants: User[] = [
    {
      id: '1',
      name: 'Ahmet NUR',
      avatar: '',
      title: 'Yazılım Geliştirici',
      bio: 'Merhaba! Ben Ahmet.',
      email: 'ahmet.nur@example.com',
      isCameraOff: false,
      isMicOff: false
    },
    {
      id: '2',
      name: 'Yeliz KERİM',
      avatar: '',
      title: 'UX Tasarımcı',
      bio: 'Merhaba! Ben Yeliz.',
      email: 'yeliz.kerim@example.com',
      isCameraOff: false,
      isMicOff: false
    },
    {
      id: '3',
      name: 'Serra KÜÇÜK',
      avatar: '',
      title: 'Proje Yöneticisi',
      bio: 'Merhaba! Ben Serra.',
      email: 'serra.kucuk@example.com',
      isCameraOff: false,
      isMicOff: true
    },
    {
      id: '4',
      name: 'Can DİNÇ',
      avatar: '',
      title: 'Frontend Geliştirici',
      bio: 'Merhaba! Ben Can.',
      email: 'can.dinc@example.com',
      isCameraOff: true,
      isMicOff: false
    }
  ];

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setActiveView('profile');
  };

  const handleBackToHome = () => {
    setActiveView('video');
    setSelectedUser(null);
  };

  if (activeView === 'profile' && selectedUser) {
    return <Profile user={selectedUser} onBack={handleBackToHome} />;
  }

  return (
    <Container>
      <VideoArea>
        {participants.map(participant => (
          <VideoBox key={participant.id} isCameraOff={participant.isCameraOff}>
            {!participant.isCameraOff && <video autoPlay muted playsInline />}
            {participant.isCameraOff && (
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#9CA3AF',
                fontSize: '48px'
              }}>
                <i className="fas fa-video-slash" />
              </div>
            )}
            <ParticipantInfo>
              <MicIcon isOff={participant.isMicOff}>
                <i className={`fas fa-microphone${participant.isMicOff ? '-slash' : ''}`} />
              </MicIcon>
              <ParticipantName onClick={() => handleUserClick(participant)}>
                {participant.name}
              </ParticipantName>
            </ParticipantInfo>
          </VideoBox>
        ))}
      </VideoArea>

      <Controls>
        <ControlButton 
          onClick={toggleCamera} 
          isActive={!isCameraOn}
          title={isCameraOn ? 'Kamerayı Kapat' : 'Kamerayı Aç'}
        >
          <i className={`fas fa-video${!isCameraOn ? '-slash' : ''}`} />
        </ControlButton>
        
        <ControlButton 
          onClick={toggleMic} 
          isActive={!isMicOn}
          title={isMicOn ? 'Mikrofonu Kapat' : 'Mikrofonu Aç'}
        >
          <i className={`fas fa-microphone${!isMicOn ? '-slash' : ''}`} />
        </ControlButton>
        
        <ControlButton 
          onClick={toggleScreenShare}
          isActive={isScreenSharing}
          title={isScreenSharing ? 'Ekran Paylaşımını Durdur' : 'Ekran Paylaş'}
        >
          <i className="fas fa-desktop" />
        </ControlButton>
      </Controls>
    </Container>
  );
};

export default VideoChat; 