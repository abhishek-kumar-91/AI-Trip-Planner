import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import ChatPage from "./pages/Chat";


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App
