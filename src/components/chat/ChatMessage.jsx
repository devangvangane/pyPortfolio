function formatMarkdown(text) {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/```([\s\S]*?)```/g, '<pre class="rounded-3xl bg-slate-900 px-4 py-3 text-sm text-slate-100 overflow-x-auto"><code>$1</code></pre>')
    .replace(/`([^`\n]+?)`/g, '<code class="rounded-md bg-slate-900 px-1 py-0.5 text-[0.82rem] text-sky-300">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer" class="text-sky-300 underline decoration-sky-500/30">$1</a>')
    .replace(/\n/g, '<br/>')
  return { __html: escaped }
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[70%] space-y-2">
        <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
          <span className={`inline-flex rounded-full px-2 py-1 font-semibold ${isUser ? 'bg-sky-500/10 text-sky-300' : 'bg-slate-800/80 text-slate-400'}`}>
            {isUser ? 'You' : 'Assistant'}
          </span>
        </div>
        <div
          className={`rounded-2xl border px-3 py-2 text-sm leading-6 shadow-sm ${
            isUser
              ? 'border-sky-400/15 bg-linear-to-br from-sky-500/20 to-cyan-500/10 text-slate-100'
              : 'border-slate-800/90 bg-slate-900/95 text-slate-200'
          } ${isUser ? 'rounded-br-lg' : 'rounded-bl-lg'}`}
        >
          <div className="whitespace-pre-wrap wrap-break-word" dangerouslySetInnerHTML={formatMarkdown(message.text)} />
        </div>
      </div>
    </div>
  )
}
