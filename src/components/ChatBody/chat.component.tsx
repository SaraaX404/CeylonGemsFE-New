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
  message: string;
  receiver: string;
  sender: string;
}
type User = {
  name: string;
  id: string;
};

type Props = {
  name?: string;
  id?: string;
  setReceiverID: (x: User) => void;
  receiverID: User;
};

const App = ({ name, id, setReceiverID, receiverID }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const UserCTX = useUserContext();

  useEffect(() => {
    if (!receiverID?.id) {
      setReceiverID(
        {
          id: id || "",
          name: name || "",
        } || ({} as User)
      );
    }
  }, [id]);

  const handleSendMessage = (text: string) => {
    const databaseRef = firebase.database().ref(`/chat/${UserCTX.user?._id}`);
    databaseRef.push({
      value: {
        sender: UserCTX.user?._id || "",
        message: text,
        receiver: receiverID,
      },
    });

    const databaseRef2 = firebase.database().ref(`/chat/${receiverID}`);
    databaseRef2.push({
      value: {
        sender: UserCTX.user?._id || "",
        message: text,
        receiver: receiverID,
      },
    });
  };

  useEffect(() => {
    // Fetch data from Firebase
    console.log(receiverID);
    const databaseRef = firebase.database().ref(`/chat/${UserCTX.user?._id}`);

    const handleSnapshot = (snapshot: { val: () => any }) => {
      const dataSnapshot = snapshot.val();
      const dataArray: ChatMessage[] = dataSnapshot
        ? Object.values(dataSnapshot).map((x: any) => x.value)
        : [];

      setMessages(dataArray);
    };

    // Attach the event listener
    databaseRef.on("value", handleSnapshot);

    // Cleanup the event listener when the component unmounts or when receiverID changes
    return () => {
      databaseRef.off("value", handleSnapshot);
    };
  }, [receiverID, id]); // Include receiverID in the dependency array

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {receiverID.name && (
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              src="https://th.bing.com/th/id/R.f8f17e935d16c6627dd37f5c784c3c9e?rik=%2fTOJbw4sTquGLg&pid=ImgRaw&r=0"
              name="Kasun Kavinda"
            />
            <ConversationHeader.Content
              userName={receiverID?.name || ""}
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
            {messages?.map((message, index) => {
              return (
                <Message
                  key={index}
                  model={{
                    message: message?.message,
                    direction:
                      message?.sender == UserCTX?.user?._id
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
      )}
    </div>
  );
};

export default App;
