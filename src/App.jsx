import { useEffect, useRef, useState } from 'react'
import ChatHeader from './components/ChatHeader'
import ModeToolbar from './components/ModeToolbar'
import Hero3D from './components/Hero3D'
import FeatureGrid from './components/FeatureGrid'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'

// Simple mock brain to simulate ChatGPT-like responses without a backend
function generateAssistantReply(prompt, history, mode) {
  const lower = prompt.toLowerCase()
  const modeTag = mode === 'browse' ? '[Browsing simulated] ' : mode === 'vision' ? '[Vision simulated] ' : mode === 'code' ? '[Code mode] ' : mode === 'image' ? '[Image mode simulated] ' : ''

  if (lower.includes('hello') || lower.includes('hi')) {
    return modeTag + "Hello! How can I help you today?"
  }
  if (lower.startsWith('explain') || lower.includes('what is')) {
    return (
      modeTag +
      "Here’s a concise explanation:\n\n" +
      "• I break complex ideas into simple steps.\n" +
      "• I can give examples, analogies, or code.\n" +
      "• Tell me your goal and constraints for a tailored answer."
    )
  }
  if (lower.includes('code') || lower.includes('javascript') || lower.includes('python')) {
    return (
      modeTag +
      "Here’s a quick snippet to get you started:\n\n" +
      "JavaScript example:\n" +
      "function greet(name){\n  return `Hello, ${name}!`\n}\n\n" +
      "Python example:\n" +
      "def greet(name):\n    return f'Hello, {name}!'"
    )
  }
  if (lower.includes('tips') || lower.includes('best practices')) {
    return (
      modeTag +
      "Some practical tips:\n\n" +
      "1) Start with the simplest working version.\n" +
      "2) Measure before optimizing.\n" +
      "3) Write for humans: clear names, small functions.\n" +
      "4) Add tests for critical paths."
    )
  }
  // Default helpful reply
  const lastUser = history.filter(m => m.role === 'user').slice(-1)[0]?.content || ''
  return (
    modeTag +
    "Here’s a thoughtful response based on your message:\n\n" +
    `“${lastUser}”\n\n` +
    "• I can break this down step-by-step.\n" +
    "• Ask for examples, code, or a summary.\n" +
    "• If you share context and constraints, I’ll tailor the answer."
  )
}

export default function App() {
  const [mode, setMode] = useState('chat')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Welcome! Choose a mode above and ask me anything — writing, code, images, or research." }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const abortRef = useRef(null)
  const listRef = useRef(null)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, isTyping])

  const handleNewChat = () => {
    if (abortRef.current) abortRef.current()
    setMessages([{ role: 'assistant', content: 'New chat started. How can I help?' }])
    setIsTyping(false)
  }

  const streamAssistant = (fullText) => {
    let i = 0
    const step = Math.max(2, Math.floor(fullText.length / 80))
    return new Promise((resolve) => {
      const pushChunk = () => {
        i = Math.min(fullText.length, i + step)
        setMessages(prev => {
          const copy = [...prev]
          const last = copy[copy.length - 1]
          // last is assistant placeholder
          copy[copy.length - 1] = { ...last, content: fullText.slice(0, i) }
          return copy
        })
        if (i >= fullText.length) {
          setIsTyping(false)
          resolve()
        } else {
          timer = setTimeout(pushChunk, 25)
        }
      }
      let timer = setTimeout(pushChunk, 250)
      abortRef.current = () => {
        clearTimeout(timer)
        setIsTyping(false)
      }
    })
  }

  const onSend = async (text) => {
    // Push user message
    setMessages(prev => [...prev, { role: 'user', content: text }])

    // Create assistant placeholder
    setIsTyping(true)
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    // Generate mock response and stream it
    const reply = generateAssistantReply(text, [...messages, { role: 'user', content: text }], mode)
    await streamAssistant(reply)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-indigo-50 text-slate-900 flex flex-col">
      <ChatHeader onNewChat={handleNewChat} />

      <Hero3D />

      <FeatureGrid />

      <div className="py-6">
        <ModeToolbar mode={mode} onChange={setMode} />
      </div>

      <section className="flex-1">
        <div className="max-w-5xl mx-auto h-full">
          <div ref={listRef} className="h-full overflow-y-auto">
            <MessageList messages={messages} isTyping={isTyping} />
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-white/70 backdrop-blur sticky bottom-0">
        <MessageInput onSend={onSend} disabled={isTyping} />
      </div>
    </div>
  )
}
