import React, { useState } from 'react';
import styled from 'styled-components';
import Settings from './Settings';

interface User {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  email: string;
}

interface ProfileProps {
  user?: User;
  onBack?: () => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: #4B5563;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    color: #1F2937;
  }
`;

const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #176DEE;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #1252B3;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #E5E7EB;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover::before {
    content: 'Fotoğrafı Değiştir';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-align: center;
    padding: 10px;
  }
`;

const Name = styled.h1`
  font-size: 24px;
  color: #1F2937;
  margin: 0;
`;

const Title = styled.p`
  color: #6B7280;
  margin: 8px 0;
`;

const ProfileSection = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 18px;
    color: #374151;
    margin-bottom: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #176DEE;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #176DEE;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid ${props => props.primary ? '#176DEE' : '#D1D5DB'};
  background: ${props => props.primary ? '#176DEE' : 'white'};
  color: ${props => props.primary ? 'white' : '#374151'};

  &:hover {
    background: ${props => props.primary ? '#1252B3' : '#F3F4F6'};
  }
`;

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [profileData, setProfileData] = useState<User>({
    id: user?.id || '1',
    name: user?.name || 'Ahmet NUR',
    email: user?.email || 'ahmet.nur@example.com',
    avatar: user?.avatar || '',
    title: user?.title || 'Yazılım Geliştirici',
    bio: user?.bio || 'Merhaba! Ben Ahmet. 5 yıldır yazılım geliştirme alanında çalışıyorum. React ve TypeScript konularında uzmanım. Boş zamanlarımda açık kaynak projelere katkıda bulunmayı seviyorum.'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // API call to save profile data
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  if (showSettings) {
    return <Settings onClose={handleCloseSettings} />;
  }

  return (
    <Container>
      <ProfileCard>
        <BackButton onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left" />
          Geri
        </BackButton>
        <EditButton onClick={handleEdit}>
          <i className="fas fa-edit" />
          Düzenle
        </EditButton>
        <ProfileHeader>
          <Avatar>
            {profileData.avatar ? (
              <img src={profileData.avatar} alt={profileData.name} />
            ) : (
              <i className="fas fa-user" style={{ fontSize: '48px', lineHeight: '120px', width: '100%', textAlign: 'center', color: '#9CA3AF' }} />
            )}
          </Avatar>
          {isEditing ? (
            <Input
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              placeholder="İsim"
            />
          ) : (
            <Name>{profileData.name}</Name>
          )}
          {isEditing ? (
            <Input
              value={profileData.title}
              onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
              placeholder="Ünvan"
            />
          ) : (
            <Title>{profileData.title}</Title>
          )}
        </ProfileHeader>

        <ProfileSection>
          <h2>İletişim Bilgileri</h2>
          {isEditing ? (
            <Input
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              placeholder="E-posta"
            />
          ) : (
            <p>{profileData.email}</p>
          )}
        </ProfileSection>

        <ProfileSection>
          <h2>Hakkımda</h2>
          {isEditing ? (
            <TextArea
              value={profileData.bio}
              onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              placeholder="Kendinizi tanıtın..."
            />
          ) : (
            <p>{profileData.bio}</p>
          )}
        </ProfileSection>

        {isEditing && (
          <ButtonGroup>
            <Button onClick={handleCancel}>İptal</Button>
            <Button primary onClick={handleSave}>Kaydet</Button>
          </ButtonGroup>
        )}

        <ButtonGroup>
          <Button onClick={handleSettingsClick}>
            <i className="fas fa-cog" style={{ marginRight: '8px' }} />
            Ayarlar
          </Button>
        </ButtonGroup>
      </ProfileCard>
    </Container>
  );
};

export default Profile; 