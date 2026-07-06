import Home from './pages/Home'
import { ChatbotProvider } from './components/chat/ChatbotProvider'
import Cursor from "./components/cursor/Cursor";
import FloatingChatButton from './components/chat/FloatingChatButton'
import ChatModal from './components/chat/ChatModal'

function App() {
  return (
    <ChatbotProvider>
       <Cursor />
      <Home />
      <FloatingChatButton />
      <ChatModal />
    </ChatbotProvider>
  )
}

export default App