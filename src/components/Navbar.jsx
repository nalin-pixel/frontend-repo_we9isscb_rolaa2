import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-bold tracking-tight text-slate-900">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-6 w-px bg-slate-200" />
            <a href="mailto:you@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="flex items-center gap-4 pt-2">
                <a href="mailto:you@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
