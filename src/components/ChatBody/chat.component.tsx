// App.tsx
import React, { useState, useEffect } from "react";
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  InfoButton,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import firebase from "../../firebase";
import { useUserContext } from "@/context";

const botIco =
  "https://th.bing.com/th/id/OIP.C5v0eJ_tW4UiG9zYK6OWcAHaHa?pid=ImgDet&rs=1";

interface ChatMessage {
  value:{
    message: string;
    receiver: string;
    sender: string;
  }
  
}

type Props = {
  name?: string;
  id?: string;
};

const App = ({ name, id }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const UserCTX = useUserContext();

  const handleSendMessage = (text: string) => {
    const databaseRef = firebase
      .database()
      .ref(`/chat/${UserCTX.user?._id}/${id}`);
    databaseRef.push({
      value: {
        sender: UserCTX.user?._id || '',
        message: text,
        receiver: id,
      },
    });
  };

  useEffect(() => {
    // Fetch data from Firebase
    const databaseRef = firebase
      .database()
      .ref(`/chat/${UserCTX.user?._id}/${id}`); // Replace with your database path
    databaseRef.on("value", (snapshot) => {
      const dataSnapshot = snapshot.val();
      const dataArray: ChatMessage[] = dataSnapshot
        ? Object.values(dataSnapshot)
        : [];
      setMessages(dataArray)
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      databaseRef.off("value");
    };
  }, []);
  

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ChatContainer>
        <ConversationHeader>
          <Avatar
            src="https://th.bing.com/th/id/R.f8f17e935d16c6627dd37f5c784c3c9e?rik=%2fTOJbw4sTquGLg&pid=ImgRaw&r=0"
            name="Kasun Kavinda"
          />
          <ConversationHeader.Content
            userName={name ? name : "Kasun Kavinda"}
            info="Active"
          />
          <ConversationHeader.Actions>
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList
          typingIndicator={
            typing ? <TypingIndicator content={`${name} is typing`} /> : null
          }
        >
          {messages.map((message, index) => {
            console.log(message)

            return (
              <Message
                key={index}
                model={{
                  message: message.value.message,
                  direction:
                    message.value.sender == UserCTX.user?._id
                      ? "outgoing"
                      : "incoming",
                  position: "single",
                }}
              ></Message>
            );
          })}
        </MessageList>
        <MessageInput
          placeholder="Type a message..."
          onSend={handleSendMessage}
        />
      </ChatContainer>
    </div>
  );
};

export default App;
