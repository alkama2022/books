import { useParams, useNavigate, Link } from 'react-router-dom'
import { books } from '../data/books.js'
import { useStore } from '../store/StoreContext.jsx'
import { useState } from 'react'

export default function Checkout(){
  const { id } = useParams()
  const nav = useNavigate()
  const book = books.find(b=>b.id===id)
  const { purchaseBook, isPurchased } = useStore()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  if(!book) return <div className="p-10 text-center dark:text-slate-100">Book not found</div>
  if(isPurchased(book.id)) {
    return (
      <div className="max-w-[640px] mx-auto px-4 py-10 text-center">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-colors">
          <h2 className="font-bold text-xl dark:text-white">Already in your library</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">You already own this book.</p>
          <Link to="/library" className="mt-4 inline-block bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold">Go to Library</Link>
        </div>
      </div>
    )
  }
  function pay(){
    if(!email || !email.includes('@')) { alert('Enter a valid email'); return }
    setLoading(true)
    setTimeout(()=>{
      purchaseBook(book)
      nav(`/success/${book.id}?email=${encodeURIComponent(email)}`)
    }, 1100)
  }
  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link to={`/books/${book.id}`} className="text-sm text-slate-500 dark:text-slate-400">← Back</Link>
      <div className="mt-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors">
          <h1 className="font-display font-bold text-xl dark:text-white">Checkout</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Demo checkout — no real money is charged. In production this redirects to Paystack/Flutterwave.</p>
          <div className="mt-6 flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors">
            <img src={book.cover} alt={book.title} className="w-20 h-[108px] object-cover rounded-lg border border-slate-200 dark:border-slate-700" />
            <div>
              <div className="text-xs uppercase tracking-wide font-semibold text-brand-600 dark:text-emerald-400">{book.category}</div>
              <div className="font-semibold dark:text-slate-100">{book.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">By {book.author} • {book.format} • {book.fileSize}</div>
              <div className="mt-2 font-bold dark:text-white">₦{book.price.toLocaleString()}</div>
            </div>
          </div>
          <label className="block mt-6 text-sm font-medium dark:text-slate-100">Email for receipt (demo)</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition-colors" />
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Receipt email would be sent by the backend after verified payment. This demo stores purchase locally.</p>

          <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-3 text-xs leading-relaxed dark:text-amber-100 transition-colors">
            <strong>How payment will work in production:</strong> Frontend → Backend creates order → Redirect to Paystack/Flutterwave → Provider verifies → Backend confirms → Book appears in Library with secure download. Never trust a frontend-only “success”.
          </div>

          <button onClick={pay} disabled={loading} className="mt-6 w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white py-3.5 rounded-full font-semibold text-sm transition-colors">
            {loading ? 'Processing…' : `Continue to Payment — ₦${book.price.toLocaleString()}`}
          </button>
          <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">🔒 Secure checkout architecture ready. This button simulates success.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-fit transition-colors">
          <h3 className="font-semibold dark:text-slate-100">Order summary</h3>
          <div className="mt-3 space-y-2 text-sm dark:text-slate-300">
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Book</span><span className="font-medium dark:text-slate-100">{book.title}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Format</span><span>{book.format}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Access</span><span>Instant • Forever</span></div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between font-bold text-base dark:text-white"><span>Total</span><span>₦{book.price.toLocaleString()}</span></div>
          </div>
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            By continuing you agree to our Terms and acknowledge that this demo does not charge your card. Replace with real payment provider before launch.
          </div>
        </div>
      </div>
    </div>
  )
}
