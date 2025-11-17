import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful 3D hero built with Spline and smooth motion transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Realtime Dashboard',
    description: 'A modern analytics dashboard with live updates and delightful micro-interactions.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#',
    repo: '#'
  },
  {
    title: 'AI Content Studio',
    description: 'A content generation tool powered by AI with a minimal, focused UX.',
    tags: ['FastAPI', 'Vite', 'OpenAI'],
    link: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600">A few favorites that mix design, code, and play.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-medium">Contact</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center text-slate-800 hover:text-slate-900 font-medium">
                  Live <ExternalLink size={16} className="ml-1" />
                </a>
                <a href={p.repo} className="inline-flex items-center text-slate-800 hover:text-slate-900 font-medium">
                  Code <Github size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
