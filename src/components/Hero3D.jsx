import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero3D() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients and copy overlay - pointer events disabled so 3D stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white"></div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-indigo-600" />
            Futuristic 3D • Interactive • Aesthetic
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            ChatGPT, reimagined for modern conversations
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Ask, learn, code, and create across text, images, voice, and files — all in a sleek, immersive interface.
          </p>
        </div>
      </div>
    </section>
  )
}
