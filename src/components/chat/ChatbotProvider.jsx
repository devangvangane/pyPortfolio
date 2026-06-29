import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { createEmptyConversation, loadSavedConversations, saveConversations } from './ChatStorageService'

const ChatbotContext = createContext(null)

export function ChatbotProvider({ children }) {
  const [conversations, setConversations] = useState([])
  const [openTabIds, setOpenTabIds] = useState([])
  const [activeConversationId, setActiveConversationId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [drafts, setDrafts] = useState({})

  useEffect(() => {
    const saved = loadSavedConversations()
    if (saved && Array.isArray(saved.conversations) && saved.conversations.length > 0) {
      setConversations(saved.conversations)
      const initialId = saved.activeConversationId || saved.conversations[0].id
      setActiveConversationId(initialId)
      setOpenTabIds(saved.openTabIds && saved.openTabIds.length > 0 ? saved.openTabIds : [initialId])
      setDrafts(saved.drafts || {})
    } else {
      const fresh = createEmptyConversation()
      setConversations([fresh])
      setActiveConversationId(fresh.id)
      setOpenTabIds([fresh.id])
      setDrafts({ [fresh.id]: '' })
    }
  }, [])

  useEffect(() => {
    saveConversations({ conversations, activeConversationId, drafts, openTabIds })
  }, [conversations, activeConversationId, drafts, openTabIds])

  const activeConversation = useMemo(() => {
    if (activeConversationId) {
      return conversations.find((item) => item.id === activeConversationId) ?? null
    }
    return conversations.find((item) => openTabIds.includes(item.id)) ?? conversations[0] ?? null
  }, [conversations, activeConversationId, openTabIds])

  const openChat = () => {
    if (conversations.length === 0) {
      const fresh = createEmptyConversation()
      setConversations([fresh])
      setActiveConversationId(fresh.id)
      setDrafts({ [fresh.id]: '' })
    }
    setIsOpen(true)
  }

  const closeChat = () => setIsOpen(false)

  const createConversation = () => {
    const next = createEmptyConversation()
    setConversations((prev) => [next, ...prev])
    setOpenTabIds((prev) => [next.id, ...prev.filter((id) => id !== next.id)])
    setActiveConversationId(next.id)
    setDrafts((prev) => ({ ...prev, [next.id]: '' }))
    setIsOpen(true)
  }

  const selectConversation = (conversationId) => {
    setActiveConversationId(conversationId)
    setOpenTabIds((prev) => (prev.includes(conversationId) ? prev : [conversationId, ...prev]))
    setIsOpen(true)
  }

  const closeConversation = (conversationId) => {
    setConversations((prev) => {
      const next = prev.filter((item) => item.id !== conversationId)
      setOpenTabIds((tabs) => tabs.filter((id) => id !== conversationId))

      if (next.length === 0) {
        const fresh = createEmptyConversation()
        setActiveConversationId(fresh.id)
        setOpenTabIds([fresh.id])
        setDrafts({ [fresh.id]: '' })
        return [fresh]
      }
      if (conversationId === activeConversationId) {
        setActiveConversationId(next[0].id)
      }
      return next
    })
  }

  const closeTab = (conversationId) => {
    setOpenTabIds((prev) => {
      const next = prev.filter((id) => id !== conversationId)
      if (conversationId === activeConversationId) {
        setActiveConversationId(next[0] ?? null)
      }
      return next
    })
  }

  const updateDraft = (value) => {
    if (!activeConversation) return
    setDrafts((prev) => ({ ...prev, [activeConversation.id]: value }))
  }

  const sendMessage = (text) => {
    if (!activeConversation) return
    const trimmed = text.trim()
    if (!trimmed) return

    const userMessage = {
      id: `${activeConversation.id}-user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      createdAt: Date.now(),
    }

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === activeConversation.id
          ? { ...conversation, messages: [...conversation.messages, userMessage] }
          : conversation,
      ),
    )

    setDrafts((prev) => ({ ...prev, [activeConversation.id]: '' }))

    const reply = {
      id: `${activeConversation.id}-assistant-${Date.now()}`,
      role: 'assistant',
      text: `I received your message: "${trimmed}". I can help explain concepts, suggest next steps, or give ideas for your portfolio site.`,
      createdAt: Date.now() + 1,
    }

    setTimeout(() => {
      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === activeConversation.id
            ? { ...conversation, messages: [...conversation.messages, reply] }
            : conversation,
        ),
      )
    }, 600)
  }

  const openTabs = useMemo(
    () => openTabIds.map((id) => conversations.find((item) => item.id === id)).filter(Boolean),
    [conversations, openTabIds],
  )

  const value = useMemo(
    () => ({
      conversations,
      openTabs,
      activeConversationId,
      activeConversation,
      isOpen,
      drafts,
      openChat,
      closeChat,
      createConversation,
      selectConversation,
      closeConversation,
      closeTab,
      updateDraft,
      sendMessage,
    }),
    [conversations, openTabs, activeConversationId, activeConversation, isOpen, drafts],
  )

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error('useChatbot must be used within ChatbotProvider')
  }
  return context
}
