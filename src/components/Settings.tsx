import React, { useState } from 'react';
import styled from 'styled-components';

interface SettingsProps {
  onClose?: () => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const SettingsCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #1F2937;
  margin: 0;
`;

const Section = styled.div`
  margin-bottom: 32px;

  h2 {
    font-size: 18px;
    color: #374151;
    margin-bottom: 16px;
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.div`
  h3 {
    font-size: 16px;
    color: #1F2937;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #6B7280;
    margin: 4px 0 0 0;
  }
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E5E7EB;
    transition: .3s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .3s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #176DEE;
  }

  input:checked + span:before {
    transform: translateX(24px);
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #176DEE;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background: #176DEE;
  color: white;

  &:hover {
    background: #1252B3;
  }
`;

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    soundEffects: true,
    onlineStatus: true,
    readReceipts: true,
    messagePreview: true,
    fontSize: 'medium',
    language: 'tr'
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleChange = (setting: keyof typeof settings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    // API call to save settings
    if (onClose) onClose();
  };

  return (
    <Container>
      <SettingsCard>
        <Header>
          <i className="fas fa-cog" style={{ fontSize: '24px', color: '#176DEE' }} />
          <Title>Ayarlar</Title>
        </Header>

        <Section>
          <h2>Görünüm</h2>
          <SettingItem>
            <SettingLabel>
              <h3>Koyu Tema</h3>
              <p>Koyu renk teması kullan</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
              <span />
            </Toggle>
          </SettingItem>
          <SettingItem>
            <SettingLabel>
              <h3>Yazı Boyutu</h3>
              <p>Uygulama yazı boyutunu ayarla</p>
            </SettingLabel>
            <Select
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', e.target.value)}
            >
              <option value="small">Küçük</option>
              <option value="medium">Orta</option>
              <option value="large">Büyük</option>
            </Select>
          </SettingItem>
        </Section>

        <Section>
          <h2>Bildirimler</h2>
          <SettingItem>
            <SettingLabel>
              <h3>Bildirimler</h3>
              <p>Yeni mesaj bildirimlerini göster</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
              />
              <span />
            </Toggle>
          </SettingItem>
          <SettingItem>
            <SettingLabel>
              <h3>Ses Efektleri</h3>
              <p>Bildirim seslerini çal</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.soundEffects}
                onChange={() => handleToggle('soundEffects')}
              />
              <span />
            </Toggle>
          </SettingItem>
        </Section>

        <Section>
          <h2>Gizlilik</h2>
          <SettingItem>
            <SettingLabel>
              <h3>Çevrimiçi Durumu</h3>
              <p>Çevrimiçi olduğunu göster</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.onlineStatus}
                onChange={() => handleToggle('onlineStatus')}
              />
              <span />
            </Toggle>
          </SettingItem>
          <SettingItem>
            <SettingLabel>
              <h3>Okundu Bilgisi</h3>
              <p>Mesajların okunduğunu göster</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.readReceipts}
                onChange={() => handleToggle('readReceipts')}
              />
              <span />
            </Toggle>
          </SettingItem>
          <SettingItem>
            <SettingLabel>
              <h3>Mesaj Önizleme</h3>
              <p>Bildirimlerde mesaj içeriğini göster</p>
            </SettingLabel>
            <Toggle>
              <input
                type="checkbox"
                checked={settings.messagePreview}
                onChange={() => handleToggle('messagePreview')}
              />
              <span />
            </Toggle>
          </SettingItem>
        </Section>

        <Section>
          <h2>Dil</h2>
          <SettingItem>
            <SettingLabel>
              <h3>Uygulama Dili</h3>
              <p>Tercih ettiğiniz dili seçin</p>
            </SettingLabel>
            <Select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
            </Select>
          </SettingItem>
        </Section>

        <Button onClick={handleSave}>Kaydet</Button>
      </SettingsCard>
    </Container>
  );
};

export default Settings; 