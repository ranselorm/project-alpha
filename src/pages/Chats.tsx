import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "antd";
import React, { useState } from "react";

interface MessageType {
  id: number;
  sender: string;
  text: string;
  time: string;
}

interface ChatType {
  id: number;
  name: string;
  lastMessage: string;
  messages: MessageType[];
}

const chatsData: ChatType[] = [
  {
    id: 1,
    name: "Lyla",
    lastMessage: "Can I have your name?",
    messages: [
      {
        id: 1,
        sender: "Lyla",
        text: "Hi! I need support for...",
        time: "10:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "Welcome to our service, Lyla!",
        time: "10:32 AM",
      },
      {
        id: 3,
        sender: "Lyla",
        text: "Can I have your name?",
        time: "10:33 AM",
      },
      {
        id: 4,
        sender: "You",
        text: "My name is Ranselorm",
        time: "10:34 AM",
      },
      {
        id: 5,
        sender: "You",
        text: "My name is Ranselorm",
        time: "10:34 AM",
      },
      // {
      //   id: 5,
      //   sender: "Lyla",
      //   text: "Thank you for the response",
      //   time: "10:33 AM",
      // },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    lastMessage: "Thank you!",
    messages: [
      { id: 1, sender: "John Doe", text: "Hello!", time: "Yesterday" },
      { id: 2, sender: "You", text: "How can I help you?", time: "Yesterday" },
      { id: 3, sender: "John Doe", text: "Thank you!", time: "Yesterday" },
    ],
  },
];

interface ChatListItemProps {
  chat: ChatType;
  isActive: boolean;
  onClick: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  chat,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-3 py-1 border-b border-gray-200 flex items-center ${
        isActive ? "bg-white" : "hover:bg-gray-100"
      }`}
    >
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base font-bold mr-3">
        {chat.name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-base">{chat.name}</div>
        <div className="text-sm text-gray-500 truncate max-w-xs">
          {chat.lastMessage}
        </div>
      </div>
    </div>
  );
};

interface MessageProps {
  message: MessageType;
  isOwn: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isOwn }) => {
  return (
    <div
      className={`max-w-xs my-2 px-4 py-2 rounded-lg ${
        isOwn
          ? "bg-main text-white self-end"
          : "bg-gray-200 text-gray-800 self-start"
      }`}
    >
      <div>{message.text}</div>
      <div className="text-xs mt-1 text-right">{message.time}</div>
    </div>
  );
};

interface ConversationProps {
  chat: ChatType | null;
}

const Conversation: React.FC<ConversationProps> = ({ chat }) => {
  if (!chat)
    return (
      <div className="p-6 text-gray-500 bg-white h-[70vh] flex items-center justify-center">
        <p>Select a chat to start conversation</p>
      </div>
    );

  return (
    <div className="flex flex-col p-6 h-[76vh] bg-white rounded-md">
      <div className="mb-4 font-bold text-xl border-b pb-2">{chat.name}</div>
      <div className="overflow-auto">
        <div className="flex flex-col space-y-1">
          {chat.messages.map((msg) => (
            <Message key={msg.id} message={msg} isOwn={msg.sender === "You"} />
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4 border-t">
        <input
          type="text"
          placeholder="Type your message here"
          disabled
          className="w-full p-3 border rounded-md text-gray-400 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

interface SidebarProps {
  chats: ChatType[];
  activeChatId: number | null;
  onSelectChat: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  chats,
  activeChatId,
  onSelectChat,
}) => {
  return (
    <div className="w-60 border-r border-gray-300 flex flex-col bg-white rounded-md py-4 h-[76vh] overflow-auto">
      <div className="text-center mx-auto w-full">
        {/* <Icon
          icon="material-symbols-light:search-rounded"
          className="absolute right-3 cursor-pointer size-5 text-main"
        /> */}
        <Input
          placeholder="Search"
          className="bg-white !px-4 !py-1 border-none focus:ring-2 focus:ring-red-500 !rounded-md !w-[90%] !text-sm placeholder:text-sm"
        />
      </div>
      <div className="overflow-y-auto flex-grow mt-8">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            isActive={chat.id === activeChatId}
            onClick={() => onSelectChat(chat.id)}
          />
        ))}
      </div>
    </div>
  );
};

const Chat: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const activeChat = chatsData.find((c) => c.id === activeChatId) ?? null;

  return (
    <section className="px-4 rounded-md">
      <div className="container mx-auto border border-red-400">
        <h1 className="text-2xl font-semibold mb-2">Inbox</h1>

        <div className="flex gap-x-4">
          <Sidebar
            chats={chatsData}
            activeChatId={activeChatId}
            onSelectChat={setActiveChatId}
          />
          <div className="flex-grow flex flex-col">
            <Conversation chat={activeChat} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
