import { motion } from 'framer-motion'
import { AiFillRobot } from 'react-icons/ai'
import { useChatbot } from './ChatbotProvider'

export default function FloatingChatButton() {
  const { openChat } = useChatbot()

  return (
    <motion.button
      type="button"
      onClick={openChat}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full border border-slate-800/70 bg-slate-950/95 text-white shadow-[0_24px_80px_-32px_rgba(14,165,233,0.9)] transition hover:bg-slate-900 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
      aria-label="Open AI chat"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-500 text-slate-950 shadow-lg">
        <AiFillRobot className="h-6 w-6" />
      </span>
    </motion.button>
  )
}
