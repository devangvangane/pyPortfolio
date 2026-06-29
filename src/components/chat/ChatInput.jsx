import { useCallback, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

export default function ChatInput({ value, onChange, onSend }) {
  const [rows, setRows] = useState(2)

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        onSend(value)
      }
    },
    [onSend, value],
  )

  const handleChange = (event) => {
    onChange(event.target.value)
    const lineCount = event.target.value.split('\n').length
    setRows(Math.min(4, Math.max(2, lineCount)))
  }

  return (
    <div className="border-t border-slate-800/90 bg-slate-950/95 px-4 py-3">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 px-3 py-3 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.65)]">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Message</p>
          <p className="text-[0.65rem] text-slate-500">Shift + Enter</p>
        </div>
        <div className="mt-3 flex items-end gap-2">
          <textarea
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={rows}
            placeholder="Type a message..."
            className="min-h-16 w-full resize-none rounded-2xl border border-slate-800/90 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
          />
          <button
            type="button"
            onClick={() => onSend(value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-500 text-white shadow-lg transition hover:from-sky-400 hover:to-cyan-400"
            aria-label="Send message"
          >
            <AiOutlineSend className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
