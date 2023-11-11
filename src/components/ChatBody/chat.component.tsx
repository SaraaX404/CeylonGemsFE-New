// App.tsx
import React, { useState } from 'react';
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  InfoButton,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const botIco = 'https://th.bing.com/th/id/OIP.C5v0eJ_tW4UiG9zYK6OWcAHaHa?pid=ImgDet&rs=1';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: ChatMessage = { text, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setTyping(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botReply: ChatMessage = { text: 'This is a dummy bot reply.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, botReply]);
      setTyping(false);
    }, 1000);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ChatContainer>
        <ConversationHeader>
          <Avatar src='https://th.bing.com/th/id/R.f8f17e935d16c6627dd37f5c784c3c9e?rik=%2fTOJbw4sTquGLg&pid=ImgRaw&r=0' name="Kasun Kavinda" />
          <ConversationHeader.Content userName="Kasun Kavinda" info="Active" />
          <ConversationHeader.Actions>
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList typingIndicator={typing ? <TypingIndicator content="Bot is typing" /> : null}>
          {messages.map((message, index) => (
            <Message
              key={index}
              model={{
                message: message.text,
                direction: message.isUser ? 'outgoing' : 'incoming',
                position: 'single',
              }}
            >
              {message.isUser ? null : <Avatar src={botIco} name="Bot" />}
            </Message>
          ))}
        </MessageList>
        <MessageInput placeholder="Type a message..." onSend={handleSendMessage} />
      </ChatContainer>
    </div>
  );
};

export default App;
