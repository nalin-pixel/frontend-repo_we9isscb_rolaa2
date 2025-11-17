export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="text-sm text-slate-500">Built with love, coffee, and a sprinkle of motion.</div>
      </div>
    </footer>
  )
}
