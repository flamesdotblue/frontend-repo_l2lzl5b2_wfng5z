import { Bot, User } from 'lucide-react'

export default function ChatMessage({ role, content }) {
  const isUser = role === 'user'
  return (
    <div className={`w-full ${isUser ? 'justify-end' : 'justify-start'} flex`}>      
      <div className={`flex max-w-2xl w-full gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${isUser ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-900 text-white'}`}>
          {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </div>
        <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${isUser ? 'bg-indigo-50 text-slate-800 border border-indigo-100' : 'bg-white text-slate-800 border border-slate-200'}`}>
          {content}
        </div>
      </div>
    </div>
  )
}
