import Home from './pages/Home'
import { ChatbotProvider } from './components/chat/ChatbotProvider'
import FloatingChatButton from './components/chat/FloatingChatButton'
import ChatModal from './components/chat/ChatModal'

function App() {
  return (
    <ChatbotProvider>
      <Home />
      <FloatingChatButton />
      <ChatModal />
    </ChatbotProvider>
  )
}

export default App