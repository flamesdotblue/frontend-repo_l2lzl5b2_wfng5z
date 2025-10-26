import ChatMessage from './ChatMessage'

export default function MessageList({ messages, isTyping }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 space-y-6">
      {messages.map((m, i) => (
        <ChatMessage key={i} role={m.role} content={m.content} />
      ))}
      {isTyping && (
        <div className="w-full flex justify-start">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.2s]"></div>
            <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
            <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></div>
          </div>
        </div>
      )}
    </div>
  )
}
