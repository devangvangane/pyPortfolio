import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

export default function ChatMessages({ messages, isTyping }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isTyping])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {messages.length === 0 && !isTyping ? (
        <div className="flex h-full min-h-56 items-center justify-center rounded-3xl border border-slate-800/90 bg-slate-950/90 px-2 py text-center text-sm text-slate-400 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)]">
          <div className="max-w-lg space-y-3">
            <p className="text-base font-semibold text-slate-100">Your AI workspace is ready.</p>
            <p className="leading-6 text-slate-400">Start a new conversation or choose an existing chat to see suggestions, content ideas, and portfolio guidance.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <ChatMessage message={{ id: 'typing-indicator', role: 'assistant', isTyping: true }} />}
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  )
}
