import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Projects />
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="mt-3 text-slate-700">I’m a creative developer focused on crafting interactive experiences. I love the intersection of design and engineering — especially where 3D, motion, and polish meet practical product thinking.</p>
            <ul className="mt-4 text-slate-700 list-disc list-inside space-y-1">
              <li>Front‑end Engineering (React, Tailwind)</li>
              <li>3D & Motion (Spline, Framer Motion)</li>
              <li>APIs & Backends (FastAPI, MongoDB)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h4 className="font-semibold text-slate-900">Highlights</h4>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-50 to-cyan-50 border border-slate-200">
                <div className="text-3xl font-extrabold">20+</div>
                <div className="text-sm text-slate-600">Projects shipped</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-fuchsia-50 to-amber-50 border border-slate-200">
                <div className="text-3xl font-extrabold">5yrs</div>
                <div className="text-sm text-slate-600">Experience</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-emerald-50 to-sky-50 border border-slate-200">
                <div className="text-3xl font-extrabold">3D</div>
                <div className="text-sm text-slate-600">Playful & modern</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-rose-50 to-indigo-50 border border-slate-200">
                <div className="text-3xl font-extrabold">UX</div>
                <div className="text-sm text-slate-600">Thoughtful details</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Let’s build something delightful</h3>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Open to freelance, full‑time roles, and fun collaborations. Drop a note and I’ll get back to you soon.</p>
          <a href="mailto:you@example.com" className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
            Email me
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
