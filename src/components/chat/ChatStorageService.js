const STORAGE_KEY = 'portfolio-ai-chatbot-state'

export function loadSavedConversations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (error) {
    console.warn('Failed to load chatbot state:', error)
    return null
  }
}

export function saveConversations(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.warn('Failed to save chatbot state:', error)
  }
}

export function createEmptyConversation() {
  const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`
  return {
    id,
    title: 'Hello Stalker',
    createdAt: Date.now(),
    messages: [
      {
        id: `${id}-welcome`,
        role: 'assistant',
        text: 'Hi there! I’m your AI assistant. Ask me anything about AI, development, or your portfolio project.',
        createdAt: Date.now(),
      },
    ],
  }
}
