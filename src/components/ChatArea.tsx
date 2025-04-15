import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8f9fa;

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

const Message = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    font-size: 16px;
    color: #adb5bd;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: calc(100% - 40px);
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .name {
    font-weight: 500;
    color: #1a1a1a;
  }

  .time {
    font-size: 12px;
    color: #6b7280;
  }
`;

const MessageText = styled.div`
  color: #4b5563;
  font-size: 14px;
  background: white;
  padding: 8px 12px;
  border-radius: 12px;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const InputContainer = styled.div`
  padding: 16px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: #f3f4f6;
  font-size: 14px;

  &::placeholder {
    color: #9ca3af;
  }
`;

const SendButton = styled.button`
  background-color: #176DEE;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1458C0;
  }

  i {
    font-size: 14px;
  }
`;

const ChatArea: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: { name: 'Ahmet NUR' },
      text: 'Merhaba, nasılsınız?',
      time: '9:20'
    },
    {
      id: 2,
      user: { name: 'Yeliz KERİM' },
      text: 'Teşekkür ederiz 😊',
      time: '9:21'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: { name: 'Ben' },
        text: message,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <Container>
      <MessagesContainer>
        {messages.map((msg) => (
          <Message key={msg.id}>
            <Avatar>
              <i className="fas fa-user" />
            </Avatar>
            <MessageContent>
              <MessageHeader>
                <span className="name">{msg.user.name}</span>
                <span className="time">{msg.time}</span>
              </MessageHeader>
              <MessageText>{msg.text}</MessageText>
            </MessageContent>
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Mesaj gönder..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendButton onClick={handleSend}>
          <i className="fas fa-paper-plane" />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatArea; 