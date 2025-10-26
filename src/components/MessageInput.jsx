import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'

export default function MessageInput({ onSend, disabled }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = '0px'
    const scrollHeight = textareaRef.current.scrollHeight
    textareaRef.current.style.height = Math.min(scrollHeight, 160) + 'px'
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = value.trim()
    if (!text || disabled) return
    onSend(text)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="relative flex items-end gap-2 rounded-2xl border border-slate-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/60">
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
            placeholder={disabled ? 'Thinking…' : 'Send a message'}
            className="block w-full resize-none bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={disabled || value.trim().length === 0}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">Press Enter to send • Shift + Enter for new line</p>
      </div>
    </form>
  )
}
