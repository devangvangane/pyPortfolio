import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useChatbot } from './ChatbotProvider'
import ChatHeader from './ChatHeader'
import ChatSidebar from './ChatSidebar'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

export default function ChatModal() {
  const { isOpen, closeChat, activeConversation, conversations, createConversation, selectConversation, closeConversation, closeTab, openTabs, drafts, updateDraft, sendMessage } = useChatbot()
  const modalRef = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeChat()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeChat])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
          onClick={closeChat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          ref={modalRef}
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="relative z-10 mx-auto grid h-[calc(100vh-3rem)] max-h-[900px] w-2/3 max-w-[1400px] overflow-hidden rounded-4xl border border-slate-800/90 bg-slate-950/95 shadow-[0_32px_100px_-36px_rgba(15,23,42,0.85)] backdrop-blur-sm grid-cols-1"
        >

          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
            <ChatHeader
              title={'Hello Stalker'}
              openTabs={openTabs}
              activeConversationId={activeConversation?.id}
              onNewChat={createConversation}
              onClose={closeChat}
              onSelectConversation={selectConversation}
              onCloseTab={closeTab}
              onToggleSidebar={() => setSidebarOpen(true)}
            />

            <div className="flex flex-1 min-h-0 flex-col overflow-hidden">
              <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 pt-2 sm:px-5">
                <ChatMessages messages={activeConversation?.messages || []} />
              </div>
              <ChatInput
                value={drafts[activeConversation?.id] || ''}
                onChange={(value) => updateDraft(value)}
                onSend={sendMessage}
              />
            </div>
          </div>

          {sidebarOpen && (
            <motion.div
              className="absolute inset-0 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
              <div className="relative z-50 h-full w-full overflow-hidden bg-slate-950/95 p-4">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/90 bg-slate-900 text-slate-300 transition hover:border-sky-400 hover:text-white"
                  aria-label="Close sidebar"
                >
                  <AiOutlineClose className="h-4 w-4" />
                </button>
                <div className="h-full overflow-hidden pt-4">
                  <ChatSidebar
                    conversations={conversations}
                    activeConversationId={activeConversation?.id}
                    onSelect={(id) => {
                      selectConversation(id)
                      setSidebarOpen(false)
                    }}
                    onCloseConversation={(id) => {
                      closeConversation(id)
                      setSidebarOpen(false)
                    }}
                    onNewChat={() => {
                      createConversation()
                      setSidebarOpen(false)
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
