import React, { useState } from 'react';
import styled from 'styled-components';
import DirectMessages from './DirectMessages';

const Container = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #F5F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: none;
  background-color: ${props => props.active ? '#176DEE' : 'transparent'};
  color: ${props => props.active ? '#FFFFFF' : '#818A98'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.2s;
  position: relative;
  overflow: visible;

  &:hover {
    background-color: ${props => props.active ? '#176DEE' : '#E5E7EB'};
  }

  i {
    font-size: 20px;
  }
`;

const DMOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const DMContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.isOpen ? 1 : 0.9});
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  overflow: hidden;
`;

export interface LeftSidebarProps {
  onHomeClick: () => void;
  onVideoClick: () => void;
  onChatClick: () => void;
  onProfileClick: () => void;
  activeView: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onHomeClick,
  onVideoClick,
  onChatClick,
  onProfileClick,
  activeView
}) => {
  const [isDMOpen, setIsDMOpen] = useState(false);

  const handleMessagesClick = () => {
    if (isDMOpen) {
      setIsDMOpen(false);
    } else {
      setIsDMOpen(true);
    }
  };

  return (
    <>
      <Container>
        <NavButton
          active={activeView === 'home'}
          onClick={() => {
            onHomeClick();
            setIsDMOpen(false);
          }}
        >
          <i className="fas fa-home"></i>
        </NavButton>
        <NavButton
          active={activeView === 'video'}
          onClick={() => {
            onVideoClick();
            setIsDMOpen(false);
          }}
        >
          <i className="fas fa-video"></i>
        </NavButton>
        <NavButton
          active={isDMOpen}
          onClick={handleMessagesClick}
        >
          <i className="fas fa-comments"></i>
        </NavButton>
        <NavButton
          active={activeView === 'chat'}
          onClick={() => {
            onChatClick();
            setIsDMOpen(false);
          }}
        >
          <i className="fas fa-users"></i>
        </NavButton>
        <NavButton
          active={activeView === 'profile'}
          onClick={() => {
            onProfileClick();
            setIsDMOpen(false);
          }}
        >
          <i className="fas fa-user"></i>
        </NavButton>
      </Container>
      <DMOverlay isOpen={isDMOpen} onClick={() => setIsDMOpen(false)} />
      <DMContainer isOpen={isDMOpen}>
        {isDMOpen && <DirectMessages />}
      </DMContainer>
    </>
  );
};

export default LeftSidebar; 