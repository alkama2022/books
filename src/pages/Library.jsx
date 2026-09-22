import { Link } from 'react-router-dom'
import { useStore } from '../store/StoreContext.jsx'
import { useState } from 'react'

export default function Library(){
  const { purchases } = useStore()
  const [q, setQ] = useState('')
  const filtered = purchases.filter(p=> !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.author.toLowerCase().includes(q.toLowerCase()))
  if(purchases.length===0){
    return (
      <div className="max-w-[720px] mx-auto px-4 py-14 text-center">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 grid place-items-center mx-auto text-2xl">📚</div>
          <h1 className="mt-4 font-display font-bold text-xl dark:text-white">Your library is waiting for you.</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Discover your next book. After you buy, it appears here instantly.</p>
          <Link to="/books" className="mt-6 inline-block bg-brand-600 text-white px-7 py-3 rounded-full font-semibold text-sm">Explore Books</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-[26px] dark:text-white">My Library</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{purchases.length} purchased {purchases.length===1?'book':'books'} • Access anytime</p>
        </div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search library..." className="px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm w-full sm:w-[280px] dark:text-slate-100 placeholder:text-slate-400 transition-colors" />
      </div>

      {filtered.length===0 ? (
        <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors">No matches for “{q}”.</div>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(b=>(
            <div key={b.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex gap-4 transition-colors">
              <img src={b.cover} alt={b.title} className="w-20 h-[108px] object-cover rounded-xl border border-slate-200 dark:border-slate-700 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold tracking-wide uppercase text-brand-600 dark:text-emerald-400 truncate">{b.category}</div>
                <div className="font-semibold leading-tight truncate dark:text-slate-100">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">By {b.author}</div>
                <div className="text-xs text-slate-400 mt-1">Purchased: {new Date(b.purchasedAt).toLocaleDateString()}</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={()=>alert('Demo reader: In production, PDF streams from secure signed URL.')} className="flex-1 bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-2 rounded-full text-xs font-semibold transition-colors">Read</button>
                  <button onClick={()=>alert('Demo download: In production, file is served via authenticated, expiring download endpoint.')} className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2 rounded-full text-xs font-semibold dark:text-slate-100 transition-colors">Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
