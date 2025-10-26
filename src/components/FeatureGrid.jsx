import { Globe, Camera, Image, Code, Brain, Mic, Plug, Database, Upload, Bot, Settings, Shield } from 'lucide-react'

const features = [
  { icon: Globe, title: 'Browse', desc: 'Search the web to fetch current information and sources.' },
  { icon: Camera, title: 'Vision', desc: 'Understand and describe images, charts, and screenshots.' },
  { icon: Image, title: 'Image Generation', desc: 'Create and edit images from prompts and references.' },
  { icon: Code, title: 'Code Interpreter', desc: 'Run code, analyze data, and generate visualizations.' },
  { icon: Brain, title: 'Memory', desc: 'Remember preferences and context across chats.' },
  { icon: Mic, title: 'Voice', desc: 'Talk naturally with real‑time voice responses.' },
  { icon: Plug, title: 'Plugins & Tools', desc: 'Connect services to take actions beyond chat.' },
  { icon: Database, title: 'Data Analysis', desc: 'Work with CSVs, spreadsheets, and datasets.' },
  { icon: Upload, title: 'File Uploads', desc: 'Attach files for summaries, Q&A, and extraction.' },
  { icon: Bot, title: 'Assistants', desc: 'Structured agents with instructions and tools.' },
  { icon: Settings, title: 'Custom GPTs', desc: 'Create tailored personas with capabilities.' },
  { icon: Shield, title: 'Safety', desc: 'Controls and guardrails for responsible use.' },
]

export default function FeatureGrid() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What you can do</h2>
          <p className="mt-2 text-slate-600">A quick tour of popular ChatGPT capabilities you can explore here.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-sm">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
