import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export default function ChatSidebar()  {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-slate-950/95 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]">
      <div className="flex items-start justify-between gap-3 border-b border-slate-800/90 px-4 py-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Conversations</p>
        </div>
      </div>
      <div className="border-t border-slate-800/80 px-4 py-3 text-xs text-slate-500">
        Need ideas? Start a fresh chat and ask for portfolio suggestions.
      </div>
    </div>
  )
}
