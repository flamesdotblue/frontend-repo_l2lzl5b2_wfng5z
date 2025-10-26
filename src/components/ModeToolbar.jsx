import { Sparkles, Globe, Camera, Code, Image } from 'lucide-react'

export default function ModeToolbar({ mode, onChange }) {
  const modes = [
    { key: 'chat', label: 'Chat', icon: Sparkles },
    { key: 'browse', label: 'Browse', icon: Globe },
    { key: 'vision', label: 'Vision', icon: Camera },
    { key: 'code', label: 'Code', icon: Code },
    { key: 'image', label: 'Images', icon: Image },
  ]

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="inline-flex gap-2 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => onChange(m.key)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${mode === m.key ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                <m.icon className="h-4 w-4" />
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
