// Chat.jsx
import React from "react";
import { useChat } from "../components/Groups/ChatContext";
import GroupCardView from "../components/Groups/GroupCardView";
import backgroundImage from "../images/su.jpg";

const Chat = () => {
  const { chats } = useChat();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})`, filter: "brightness(80%)" }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-4">
          {chats.length === 0 ? (
            <div className="container mx-auto px-4 pt-12 flex justify-center items-center h-full">
              <div className="inline-block bg-white text-gray-800 text-center py-2 px-4 rounded-lg shadow">
                No chats joined yet!
              </div>
            </div>
          ) : (
            chats.map((chat, index) => (
              <GroupCardView
                key={index}
                name={chat.name}
                imageUrl={chat.imageUrl}
                link={chat.link}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Chat;
