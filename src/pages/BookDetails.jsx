import { useParams, Link, useNavigate } from 'react-router-dom'
import { books } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'
import { useStore } from '../store/StoreContext.jsx'
import { useState } from 'react'

export default function BookDetails(){
  const { id } = useParams()
  const nav = useNavigate()
  const book = books.find(b=>b.id===id)
  const { isPurchased, addToast } = useStore()
  const [showPreview, setShowPreview] = useState(false)
  if(!book) return <div className="max-w-[1280px] mx-auto px-4 py-16 text-center dark:text-slate-100"><p>Something went wrong while loading this book.</p><Link to="/books" className="mt-4 inline-block bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2 rounded-full">Browse books</Link></div>
  const owned = isPurchased(book.id)
  const related = books.filter(b=>b.category===book.category && b.id!==book.id).slice(0,4)

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link to="/books" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">← Back to books</Link>
      <div className="mt-4 grid lg:grid-cols-[420px_1fr] gap-8">
        <div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">📄 {book.pages} pages</span>
              <span className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">📦 {book.format}</span>
              <span className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">🌐 {book.language}</span>
              <span className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">💾 {book.fileSize}</span>
            </div>
          </div>
          {book.previewAvailable && (
            <button onClick={()=>setShowPreview(v=>!v)} className="mt-3 w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-100 transition-colors">
              {showPreview ? 'Hide preview' : 'Read Preview (limited)'}
            </button>
          )}
        </div>

        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand-600 dark:text-emerald-400">{book.category} • {new Date(book.publishedAt).toLocaleDateString()}</div>
          <h1 className="mt-2 font-display font-extrabold text-[28px] sm:text-[32px] leading-tight dark:text-white">{book.title}</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">By <span className="font-semibold text-slate-900 dark:text-slate-100">{book.author}</span></p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{book.longDescription}</p>

          <div className="mt-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold dark:text-white">₦{book.price.toLocaleString()}</span>
              {book.originalPrice && <span className="text-sm line-through text-slate-400">₦{book.originalPrice.toLocaleString()}</span>}
              {book.popular && <span className="ml-auto bg-amber-400 text-xs font-bold px-2 py-1 rounded-full">Popular</span>}
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-2">
              {owned ? (
                <Link to="/library" className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-center py-3.5 rounded-full font-semibold text-sm transition-colors">Go to Library →</Link>
              ) : (
                <button onClick={()=>nav(`/checkout/${book.id}`)} className="bg-brand-600 hover:bg-brand-700 text-white py-3.5 rounded-full font-semibold text-sm transition-colors">Buy Now — ₦{book.price.toLocaleString()}</button>
              )}
              <button onClick={()=>{ if(!book.previewAvailable) addToast('Preview not available for this book','info'); else setShowPreview(true); document.getElementById('preview')?.scrollIntoView({behavior:'smooth'})}} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-3.5 rounded-full font-semibold text-sm dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Read Preview</button>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">Demo checkout — payment is simulated. In production this connects to Paystack/Flutterwave → verification → library access.</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors">
              <h3 className="font-semibold text-sm dark:text-slate-100">What you'll learn</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {book.learn.map(l=> <li key={l} className="flex gap-2"><span className="text-green-600 dark:text-emerald-400">✓</span>{l}</li>)}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors">
              <h3 className="font-semibold text-sm dark:text-slate-100">Who is this for?</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{book.forWho}</p>
              <h3 className="font-semibold text-sm mt-4 dark:text-slate-100">About the author</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{book.aboutAuthor}</p>
            </div>
          </div>

          {showPreview && (
            <div id="preview" className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors">
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span className="font-semibold text-sm dark:text-slate-100">Preview — {book.title} (first pages)</span>
                <span className="text-xs bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 px-2 py-1 rounded-full dark:text-amber-200">Limited preview</span>
              </div>
              <div className="p-6 sm:p-8 leading-relaxed text-slate-700 dark:text-slate-300 text-sm max-h-[420px] overflow-auto bg-slate-50 dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white">Chapter 1 — Introduction</h4>
                <p className="mt-3">This is a simulated preview. In production, the backend would serve a watermarked excerpt, not the full PDF. The reader here demonstrates the intended UX: paginated, readable, and clearly limited.</p>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
                <p className="mt-3">Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <div className="mt-6 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-center">
                  <p className="font-semibold dark:text-slate-100">Enjoying the preview?</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Get the full book instantly after payment.</p>
                  <button onClick={()=>nav(`/checkout/${book.id}`)} className="mt-3 bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Get the full book — ₦{book.price.toLocaleString()}</button>
                </div>
              </div>
            </div>
          )}

          {related.length>0 && (
            <div className="mt-8">
              <h3 className="font-semibold dark:text-slate-100">Related books</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {related.map(b=> <BookCard key={b.id} book={b} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
