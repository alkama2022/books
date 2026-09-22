import { useParams, Link, useSearchParams } from 'react-router-dom'
import { books } from '../data/books.js'
export default function Success(){
  const { id } = useParams()
  const [params] = useSearchParams()
  const email = params.get('email')
  const book = books.find(b=>b.id===id)
  if(!book) return <div className="p-10 text-center dark:text-slate-100">Book not found</div>
  return (
    <div className="max-w-[640px] mx-auto px-4 py-10 text-center">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-colors">
        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 grid place-items-center mx-auto text-2xl border dark:border-emerald-800">✓</div>
        <h1 className="mt-4 font-display font-extrabold text-2xl dark:text-white">Your book is ready! 🎉</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">You've successfully purchased <strong className="dark:text-slate-100">{book.title}</strong>.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <img src={book.cover} alt={book.title} className="w-24 h-32 object-cover rounded-xl border border-slate-200 dark:border-slate-700" />
          <div className="text-left text-sm">
            <div className="font-semibold dark:text-slate-100">{book.title}</div>
            <div className="text-slate-500 dark:text-slate-400">By {book.author}</div>
            <div className="mt-2 text-xs bg-green-50 dark:bg-emerald-900/30 border border-green-200 dark:border-emerald-800 rounded-full px-3 py-1 inline-block dark:text-emerald-300">Added to My Library</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Link to="/library" className="bg-brand-600 text-white py-3 rounded-full font-semibold text-sm transition-colors">Go to My Library</Link>
          <button onClick={()=>alert('Demo: In production this would stream the PDF from a secure, signed URL.')} className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-3 rounded-full font-semibold text-sm transition-colors">Read Now</button>
          <button onClick={()=>alert('Demo: In production this triggers a secure download with expiring token.')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-3 rounded-full font-semibold text-sm dark:text-slate-100 transition-colors">Download Book</button>
        </div>
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{email ? `Receipt would be sent to ${email} when email delivery is configured.` : 'Receipt email will be enabled when backend email service is connected.'}</p>
        <Link to="/books" className="mt-3 inline-block text-sm font-semibold text-brand-600 dark:text-emerald-400">Continue exploring →</Link>
      </div>
    </div>
  )
}
