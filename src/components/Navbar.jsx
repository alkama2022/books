import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '../store/StoreContext.jsx'
import { useTheme } from '../store/ThemeContext.jsx'

function ThemeToggle(){
  const { theme, toggle, isDark } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-[64px] h-[32px] rounded-full p-1 flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors duration-300 focus-ring shrink-0"
    >
      <span className="absolute left-1.5 text-[11px] opacity-60">☀️</span>
      <span className="absolute right-1.5 text-[11px] opacity-60">🌙</span>
      <span className={`relative z-10 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 shadow-sm flex items-center justify-center text-[12px] transition-all duration-300 ${isDark ? 'translate-x-8' : 'translate-x-0'}`}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const { purchases } = useStore()
  function onSearch(e){
    e.preventDefault()
    if(q.trim()) nav(`/books?q=${encodeURIComponent(q.trim())}`)
  }
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white grid place-items-center font-bold text-[18px] shadow-sm">P</div>
            <span className="font-display font-extrabold text-[20px] tracking-tight dark:text-white">PageMoor</span>
            <span className="hidden sm:inline text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 rounded-full px-2 py-0.5 ml-1 border border-slate-800">NG</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={({isActive})=> isActive? 'text-brand-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}>Home</NavLink>
            <NavLink to="/books" className={({isActive})=> isActive? 'text-brand-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}>Books</NavLink>
            <NavLink to="/categories" className={({isActive})=> isActive? 'text-brand-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}>Categories</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive? 'text-brand-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}>About</NavLink>
          </nav>

          <form onSubmit={onSearch} className="hidden md:flex items-center flex-1 max-w-[380px] mx-4">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">⌕</span>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search books, authors or topics..." className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-colors" />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex"><ThemeToggle /></div>
            <Link to="/library" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 dark:border-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span>📚</span> <span className="hidden lg:inline">My Library</span>
              {purchases.length>0 && <span className="bg-brand-600 text-white text-xs rounded-full px-1.5 py-0.5">{purchases.length}</span>}
            </Link>
            <Link to="/books" className="hidden sm:inline-flex bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold focus-ring shadow-sm transition-colors">Browse Books</Link>
            <button onClick={()=>setOpen(!open)} aria-label="Toggle menu" className="lg:hidden w-10 h-10 grid place-items-center border border-slate-200 dark:border-slate-700 rounded-xl dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="text-lg">{open ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-100 dark:border-slate-800 mt-1 pt-4 space-y-3">
            <form onSubmit={onSearch} className="flex">
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search books..." className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm dark:text-slate-100" />
            </form>
            <div className="flex items-center justify-between py-1">
              <span className="text-sm font-medium dark:text-slate-200">Theme</span>
              <ThemeToggle />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <Link onClick={()=>setOpen(false)} to="/" className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-slate-100">Home</Link>
              <Link onClick={()=>setOpen(false)} to="/books" className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-slate-100">Books</Link>
              <Link onClick={()=>setOpen(false)} to="/categories" className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-slate-100">Categories</Link>
              <Link onClick={()=>setOpen(false)} to="/library" className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl dark:text-slate-100">Library ({purchases.length})</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
