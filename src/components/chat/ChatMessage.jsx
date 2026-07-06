import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownComponents = {
  a: ({ node, ...props }) => <a {...props} target="_blank" rel="noreferrer" className="text-sky-300 underline decoration-sky-500/30" />,
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-7">{children}</p>,
  ul: ({ children }) => <ul className="ml-5 list-disc space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="ml-5 list-decimal space-y-1">{children}</ol>,
  li: ({ children }) => <li className="leading-7">{children}</li>,
  h1: ({ children }) => <h1 className="mb-2 text-lg font-semibold text-slate-100">{children}</h1>,
  h2: ({ children }) => <h2 className="mb-2 text-base font-semibold text-slate-100">{children}</h2>,
  h3: ({ children }) => <h3 className="mb-2 text-sm font-semibold text-slate-100">{children}</h3>,
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code className="rounded-md bg-slate-950/80 px-1.5 py-0.5 text-[0.82rem] text-sky-300" {...props}>
          {children}
        </code>
      )
    }

    return (
      <pre className="overflow-x-auto rounded-2xl bg-slate-950/90 p-3 text-sm text-slate-100">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    )
  },
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  if (message.isTyping) {
    return (
      <div className="flex justify-start">
        <div className="max-w-[70%] space-y-2">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
            <span className="inline-flex rounded-full bg-slate-800/80 px-2 py-1 font-semibold text-slate-400">Assistant</span>
          </div>
          <div className="rounded-2xl rounded-bl-lg border border-slate-800/90 bg-slate-900/95 px-3 py-3 shadow-sm">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-2.5 w-2.5 rounded-full bg-slate-400"
                  animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.12 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

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
          <div className="prose prose-invert max-w-none break-words text-inherit">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {message.text}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
