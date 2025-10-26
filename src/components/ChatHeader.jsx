import { Sparkles } from 'lucide-react'

export default function ChatHeader({ onNewChat }) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800">Vibe Chat</h1>
            <p className="text-xs text-slate-500">An elegant ChatGPT-style experience</p>
          </div>
        </div>
        <button
          onClick={onNewChat}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 active:translate-y-px"
        >
          New chat
        </button>
      </div>
    </header>
  )
}
