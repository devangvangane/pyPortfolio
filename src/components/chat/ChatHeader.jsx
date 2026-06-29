import { AiOutlineClose } from 'react-icons/ai'

export default function ChatHeader({ title, onClose }) {
  return (
    <div className="border-b border-slate-800/90 bg-slate-950/95">
      <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">AI Assistant</p>
          <h2 className="mt-1 text-[32px] font-semibold leading-tight text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">Ask questions, get ideas, and refine your portfolio content.</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/90 bg-slate-900 text-slate-300 transition hover:border-red-400 hover:text-white"
          aria-label="Close chat window"
        >
          <AiOutlineClose className="h-5 w-5" />
        </button>
      </div>

    </div>
  )
}
