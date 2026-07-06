import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { createEmptyConversation, loadSavedConversations, saveConversations } from './ChatStorageService'

const ChatbotContext = createContext(null)
const CHAT_API_URL = import.meta.env.VITE_API_URL;

export function ChatbotProvider({ children }) {
  const [conversations, setConversations] = useState([])
  const [openTabIds, setOpenTabIds] = useState([])
  const [activeConversationId, setActiveConversationId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [drafts, setDrafts] = useState({})
  const [typingConversationId, setTypingConversationId] = useState(null)

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

  const sendMessage = async (text) => {
    if (!activeConversation) return
    const trimmed = text.trim()
    if (!trimmed) return

    const conversationId = activeConversation.id
    const userMessage = {
      id: `${conversationId}-user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      createdAt: Date.now(),
    }

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, messages: [...conversation.messages, userMessage] }
          : conversation,
      ),
    )

    setDrafts((prev) => ({ ...prev, [conversationId]: '' }))
    setTypingConversationId(conversationId)

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: trimmed }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      const assistantText = data?.response || data?.message || 'No response received.'

      const assistantMessage = {
        id: `${conversationId}-assistant-${Date.now()}`,
        role: 'assistant',
        text: assistantText,
        createdAt: Date.now() + 1,
      }

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === conversationId
            ? { ...conversation, messages: [...conversation.messages, assistantMessage] }
            : conversation,
        ),
      )
    } catch (error) {
      const assistantMessage = {
        id: `${conversationId}-assistant-${Date.now()}`,
        role: 'assistant',
        text: `Sorry, I could not reach the assistant right now. ${error.message}`,
        createdAt: Date.now() + 1,
      }

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === conversationId
            ? { ...conversation, messages: [...conversation.messages, assistantMessage] }
            : conversation,
        ),
      )
    } finally {
      setTypingConversationId((prev) => (prev === conversationId ? null : prev))
    }
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
      typingConversationId,
      openChat,
      closeChat,
      createConversation,
      selectConversation,
      closeConversation,
      closeTab,
      updateDraft,
      sendMessage,
    }),
    [conversations, openTabs, activeConversationId, activeConversation, isOpen, drafts, typingConversationId],
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
