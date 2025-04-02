import React from 'react';
import styled from 'styled-components';
import userIcon1 from '../assets/user-icon-1.svg';
import userIcon2 from '../assets/user-icon-2.svg';

const ChatContainer = styled.div`
  width: 320px;
  height: 100%;
  background-color: #F5F6F6;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  @media (max-width: 1400px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ChatHeader = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 9px;
    color: #818A98;
    line-height: 1.4;
    max-width: 240px;
    margin: 0 auto;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #B9BEC6;
    border-radius: 3px;
  }
`;

const MessageGroup = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const MessageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MessageBubble = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  max-width: 100%;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const SenderName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #176DEE;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: #818A98;
  margin-left: 12px;
`;

const MessageText = styled.div`
  font-size: 14px;
  color: #2b2d42;
`;

const InputContainer = styled.div`
  padding: 16px 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
`;

const AttachButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: #FDB022;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  padding: 0;

  &:hover {
    color: #E99E1F;
  }

  i {
    font-size: 20px;
  }
`;

const MessageInput = styled.input`
  flex: 1;
  height: 32px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #2b2d42;
  outline: none;
  padding: 0;

  &::placeholder {
    color: #818A98;
  }
`;

const SendButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: #176DEE;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: #1557B8;
  }

  i {
    font-size: 14px;
  }
`;

const ChatArea: React.FC = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <h2>Grup Sohbeti</h2>
        <p>Toplantı sırasında diğer üyelerle burada sohbet edebilirsiniz ve toplantıdan sonra silinirler.</p>
      </ChatHeader>
      <MessagesContainer>
        <MessageGroup>
          <Avatar>
            <img src={userIcon1} alt="Ahmet NUR avatar" />
          </Avatar>
          <MessageContent>
            <MessageBubble>
              <MessageHeader>
                <SenderName>Ahmet NUR</SenderName>
                <MessageTime>9:20</MessageTime>
              </MessageHeader>
              <MessageText>Merhaba, nasılsınız?</MessageText>
            </MessageBubble>
          </MessageContent>
        </MessageGroup>
        <MessageGroup>
          <Avatar>
            <img src={userIcon2} alt="Yeliz KERİM avatar" />
          </Avatar>
          <MessageContent>
            <MessageBubble>
              <MessageHeader>
                <SenderName>Yeliz KERİM</SenderName>
                <MessageTime>9:21</MessageTime>
              </MessageHeader>
              <MessageText>Teşekkür ederiz 😊</MessageText>
            </MessageBubble>
          </MessageContent>
        </MessageGroup>
      </MessagesContainer>
      <InputContainer>
        <InputWrapper>
          <AttachButton>
            <i className="fas fa-face-smile"></i>
          </AttachButton>
          <MessageInput placeholder="Mesaj gönderin..." />
          <SendButton>
            <i className="fas fa-paper-plane"></i>
          </SendButton>
        </InputWrapper>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatArea; 