// src/components/ChatSidebar.tsx
import { useEffect, useState, useRef } from "react";
import { Menu, Trash2, X } from "lucide-react";
import { getAllChats, deleteChat } from "../utils/storage";

type Props = {
  onSelectChat: (title: string, messages: any[]) => void;
};

const ChatSidebar = ({ onSelectChat }: Props) => {
  const [chats, setChats] = useState<Record<string, any[]>>({});
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setIsOpen(!mobile);
    setChats(getAllChats());
  }, []);

  const handleClick = (title: string) => {
    onSelectChat(title, chats[title]);
  };

  const handleDelete = (title: string) => {
    deleteChat(title);
    const updated = getAllChats();
    setChats(updated);
  };

  return (
    <>
      {!isOpen && (
        <button
          ref={hamburgerRef}
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        >
          <Menu />
        </button>
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg border-r z-40 p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <h2 className="text-lg font-bold text-blue-600 mb-4">Your Trips</h2>
        <ul className="space-y-2">
          {Object.keys(chats).map((title, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
              onClick={() => handleClick(title)}
            >
              <span>{title}</span>
              <button onClick={() => handleDelete(title)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </li>
          ))}

<button
  onClick={() => onSelectChat("", [])}
  className="w-full p-2 bg-blue-500 text-white rounded mb-4"
>
  + New Chat
</button>
        </ul>
      </div>

      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-30"
        />
      )}
    </>
  );
};

export default ChatSidebar;
