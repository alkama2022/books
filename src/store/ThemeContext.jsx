import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('pm_theme')
      if (saved === 'light' || saved === 'dark') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch { return 'light' }
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try { localStorage.setItem('pm_theme', theme) } catch {}
    // update theme-color meta for mobile browser chrome
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '#020617' : '#0f7a4a'
  }, [theme])

  // sync with OS when no manual choice? keep manual but listen for changes if user hasn't overridden
  useEffect(() => {
    const m = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      try {
        const saved = localStorage.getItem('pm_theme')
        if (!saved) setTheme(e.matches ? 'dark' : 'light')
      } catch {}
    }
    m.addEventListener?.('change', handler)
    return () => m.removeEventListener?.('change', handler)
  }, [])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme outside ThemeProvider')
  return ctx
}
