import Home from './pages/Home'
import { ChatbotProvider } from './components/chat/ChatbotProvider'
import Cursor from "./components/cursor/Cursor";
import FloatingChatButton from './components/chat/FloatingChatButton'
import ChatModal from './components/chat/ChatModal'
import SplashScreen from './components/SplashScreen'  // ← add
import { useState } from 'react'

function App() {
  const [done, setDone] = useState(false)
  return (
    <ChatbotProvider>
       <Cursor />
       {!done && <SplashScreen onComplete={() => setDone(true)} />}
      <Home />
      <FloatingChatButton />
      <ChatModal />
    </ChatbotProvider>
  )
}

export default App