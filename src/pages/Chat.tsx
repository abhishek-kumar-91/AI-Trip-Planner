import { useEffect, useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatBox from "../components/ChatBox";
import { Shimmer } from "react-shimmer"; // Import Simmer or create your own spinner


const Chat = () => {
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<string>(""); // chat title
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [isNewChat, setIsNewChat] = useState<boolean>(true); // NEW: Track new chat

  const handleSelectChat = (title: string, messages: any[]) => {
    setSelectedChat(title);
    setChatMessages(messages);
    setIsNewChat(false); // NOT a new chat anymore
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time for the chat page
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {loading ? (
        <Shimmer width={800} height={600}/> // Display loading spinner when the page is loading
      ) : (
        <>
            <ChatSidebar onSelectChat={handleSelectChat} />
      <ChatBox
        isSidebarOpen={true}
        selectedChatTitle={selectedChat}
        selectedMessages={chatMessages}
        isNewChat={isNewChat}
        onNewTitle={(title: string) => {
          setSelectedChat(title); // update sidebar with new title
          setIsNewChat(false);
        }}
      />
        </>
      )}
    </div>
  );
};

export default Chat;
