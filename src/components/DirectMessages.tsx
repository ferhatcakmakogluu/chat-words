import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import userIcon1 from '../assets/user-icon-1.svg';
import userIcon2 from '../assets/user-icon-2.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  width: 320px;
  min-width: 320px;
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
`;

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const Username = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

const NewMessageButton = styled.button`
  background: none;
  border: none;
  color: #176DEE;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  transition: background-color 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: #f0f2f5;
  }
`;

const SearchBar = styled.div`
  padding: 12px;
  border-bottom: 1px solid #dbdbdb;
  background: white;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: #f5f6f6;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    border-color: #176DEE;
  }
`;

const ConversationList = styled.div`
  flex: 1;
  overflow-y: auto;
  background: white;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 3px;
  }
`;

const ConversationItem = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background-color: ${props => props.active ? '#f0f2f5' : 'transparent'};
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f2f5;
  }
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #dbdbdb;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ConversationInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  color: #1a1a1a;
`;

const LastMessage = styled.div`
  font-size: 13px;
  color: #65676b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  min-width: 0;
`;

const ChatHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #176DEE;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f2f5;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 3px;
  }
`;

const MessageWrapper = styled.div<{ isMine?: boolean }>`
  display: flex;
  flex-direction: ${props => props.isMine ? 'row-reverse' : 'row'};
  align-items: flex-end;
  margin-bottom: 8px;
  gap: 8px;
  padding: 0 8px;
`;

const MessageAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #dbdbdb;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Message = styled.div<{ isMine?: boolean }>`
  max-width: 60%;
  min-width: 50px;
  padding: 12px 16px;
  background-color: ${props => props.isMine ? '#176DEE' : '#f0f2f5'};
  color: ${props => props.isMine ? '#fff' : '#1a1a1a'};
  border-radius: ${props => props.isMine ? '18px 18px 4px 18px' : '18px 18px 18px 4px'};
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1.4;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MessageTime = styled.span<{ isMine?: boolean }>`
  font-size: 11px;
  color: #65676b;
  margin: ${props => props.isMine ? '0 8px 0 0' : '0 0 0 8px'};
  align-self: flex-end;
`;

const InputContainer = styled.div`
  padding: 16px;
  border-top: 1px solid #dbdbdb;
  background: white;
`;

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f0f2f5;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #176DEE;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  padding: 8px 0;
  font-size: 15px;
  outline: none;
  min-width: 0;

  &::placeholder {
    color: #65676b;
  }
`;

interface User {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: string;
  lastMessageTime?: string;
  online?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

const DirectMessages: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const users: User[] = [
    {
      id: '1',
      name: 'Ahmet NUR',
      avatar: userIcon1,
      lastMessage: 'Yarınki toplantı hakkında konuşabilir miyiz?',
      lastMessageTime: '14:30',
      online: true
    },
    {
      id: '2',
      name: 'Yeliz KERİM',
      avatar: userIcon2,
      lastMessage: 'Projeyi tamamladım, kontrol eder misin?',
      lastMessageTime: '12:45',
      online: false
    },
    // Daha fazla örnek kullanıcı eklenebilir
  ];

  useEffect(() => {
    if (activeChat) {
      // Örnek mesajları yükle
      setMessages([
        {
          id: '1',
          senderId: '1',
          content: 'Merhaba, müsait misin?',
          timestamp: '14:25'
        },
        {
          id: '2',
          senderId: 'current_user',
          content: 'Evet, buyur',
          timestamp: '14:26'
        },
        {
          id: '3',
          senderId: '1',
          content: 'Yarınki toplantı hakkında konuşabilir miyiz?',
          timestamp: '14:30'
        }
      ]);
    }
  }, [activeChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        senderId: 'current_user',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <LeftPanel>
        <Header>
          <HeaderTitle>
            <Username>Mesajlar</Username>
          </HeaderTitle>
          <NewMessageButton>
            <i className="fas fa-edit"></i>
          </NewMessageButton>
        </Header>
        <SearchBar>
          <SearchInput
            placeholder="Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        <ConversationList>
          {filteredUsers.map(user => (
            <ConversationItem
              key={user.id}
              active={activeChat === user.id}
              onClick={() => setActiveChat(user.id)}
            >
              <Avatar>
                <img src={user.avatar} alt={user.name} />
              </Avatar>
              <ConversationInfo>
                <UserName>{user.name}</UserName>
                <LastMessage>{user.lastMessage}</LastMessage>
              </ConversationInfo>
            </ConversationItem>
          ))}
        </ConversationList>
      </LeftPanel>

      <ChatPanel>
        {activeChat ? (
          <>
            <ChatHeader>
              <Avatar>
                <img
                  src={users.find(u => u.id === activeChat)?.avatar}
                  alt="User avatar"
                />
              </Avatar>
              <ChatInfo>
                <UserName>
                  {users.find(u => u.id === activeChat)?.name}
                </UserName>
              </ChatInfo>
              <Actions>
                <ActionButton>
                  <i className="fas fa-phone"></i>
                </ActionButton>
                <ActionButton>
                  <i className="fas fa-video"></i>
                </ActionButton>
                <ActionButton>
                  <i className="fas fa-info-circle"></i>
                </ActionButton>
              </Actions>
            </ChatHeader>
            <MessagesContainer>
              {messages.map(message => (
                <MessageWrapper key={message.id} isMine={message.senderId === 'current_user'}>
                  {!message.senderId.includes('current_user') && (
                    <MessageAvatar>
                      <img src={users.find(u => u.id === message.senderId)?.avatar} alt="Avatar" />
                    </MessageAvatar>
                  )}
                  <Message isMine={message.senderId === 'current_user'}>
                    {message.content}
                  </Message>
                  <MessageTime isMine={message.senderId === 'current_user'}>
                    {message.timestamp}
                  </MessageTime>
                </MessageWrapper>
              ))}
            </MessagesContainer>
            <InputContainer>
              <InputWrapper onSubmit={handleSendMessage}>
                <ActionButton type="button">
                  <i className="fas fa-face-smile"></i>
                </ActionButton>
                <Input
                  placeholder="Mesaj yaz..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <ActionButton type="button">
                  <i className="fas fa-image"></i>
                </ActionButton>
                <ActionButton type="submit">
                  <i className="fas fa-paper-plane"></i>
                </ActionButton>
              </InputWrapper>
            </InputContainer>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <p>Mesajlaşmak için bir sohbet seçin</p>
          </div>
        )}
      </ChatPanel>
    </Container>
  );
};

export default DirectMessages; 