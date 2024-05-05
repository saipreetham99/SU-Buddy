import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  const addChat = (chat) => {
    if (!chats.some(c => c.name === chat.name)) {
      setChats(prev => [...prev, chat]);
    }
  };

  const isChatAdded = (name) => {
    return chats.some(c => c.name === name);
  };

  return (
    <ChatContext.Provider value={{ chats, addChat, isChatAdded }}>
      {children}
    </ChatContext.Provider>
  );
};
