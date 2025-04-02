import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 80px;
  height: 100%;
  background-color: #F5F6F6;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  }
`;

const IconButton = styled.button<{ isActive?: boolean }>`
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  color: ${props => props.isActive ? '#176DEE' : '#B9BEC6'};
  margin: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  font-size: 24px;

  &:hover {
    color: #176DEE;
  }

  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 24px;
    background-color: #176DEE;
    border-radius: 3px;
    opacity: ${props => props.isActive ? 1 : 0};
    transition: opacity 0.2s ease;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 20px 0;
  justify-content: center;
  gap: 15px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const ProfileButton = styled(IconButton)`
  margin: 0;
`;

const MenuToggle = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #176DEE;
  color: white;
  cursor: pointer;
  z-index: 1001;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string>('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuToggle onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuToggle>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
      <SidebarContainer isOpen={isOpen}>
        <TopSection>
          <IconButton isActive={activeButton === 'users'} onClick={() => setActiveButton('users')}>
            <i className="fas fa-users"></i>
          </IconButton>
        </TopSection>
        <MiddleSection>
          <IconButton isActive={activeButton === 'home'} onClick={() => setActiveButton('home')}>
            <i className="fas fa-home"></i>
          </IconButton>
          <IconButton isActive={activeButton === 'video'} onClick={() => setActiveButton('video')}>
            <i className="fas fa-video"></i>
          </IconButton>
          <IconButton isActive={activeButton === 'chat'} onClick={() => setActiveButton('chat')}>
            <i className="fas fa-comments"></i>
          </IconButton>
        </MiddleSection>
        <BottomSection>
          <ProfileButton isActive={activeButton === 'profile'} onClick={() => setActiveButton('profile')}>
            <i className="fas fa-user"></i>
          </ProfileButton>
        </BottomSection>
      </SidebarContainer>
    </>
  );
};

export default LeftSidebar; 