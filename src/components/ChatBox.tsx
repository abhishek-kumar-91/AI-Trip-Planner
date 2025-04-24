// src/components/ChatBox.tsx
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { fetchGeminiResponse } from "../utils/api";
import { saveChatToStorage } from "../utils/storage";

type Message = {
  sender: "user" | "ai";
  text: string;
};

type Props = {
  isSidebarOpen: boolean;
  selectedChatTitle: string;
  selectedMessages: Message[];
  isNewChat: boolean;
  onNewTitle: (title: string) => void;
};

const ChatBox = ({ isSidebarOpen, selectedChatTitle, selectedMessages, isNewChat,onNewTitle  }: Props) => {
  const [messages, setMessages] = useState<Message[]>(selectedMessages || []);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages(selectedMessages);
  }, [selectedMessages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
  
    const userMsg: Message = { sender: "user", text };
    let updatedMessages = [...messages, userMsg];
  
    // 👇 Handle first user message - create a unique title
    if (isNewChat) {
      const title = text.slice(0, 30); // First few words as title
      onNewTitle(title); // Update sidebar title
      saveChatToStorage(title, updatedMessages); // Save
    }
  
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
  
    try {
      const aiText = await fetchGeminiResponse(text);
      const aiMsg: Message = { sender: "ai", text: aiText };
      const final = [...updatedMessages, aiMsg];
      setMessages(final);
  
      const key = isNewChat ? text.slice(0, 30) : selectedChatTitle;
      saveChatToStorage(key, final);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error fetching AI response." }]);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div
      className={`transition-all duration-300 flex flex-col justify-between p-4 ${
        isSidebarOpen ? "md:ml-[280px]" : "md:ml-0 md:mx-auto md:max-w-4xl"
      } min-h-screen bg-gradient-to-br from-blue-50 to-white`}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white rounded shadow">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">Ask me anything about your trip 🌍</div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-lg ${
                msg.sender === "user"
                  ? "bg-blue-100 self-end ml-auto"
                  : "bg-gray-200 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span>AI is typing...</span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          className="flex-1 p-3 rounded-lg border shadow-sm"
          placeholder="Ask about your trip..."
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Send className="w-4 h-4" /> Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
