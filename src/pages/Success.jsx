import { useParams, Link, useSearchParams } from 'react-router-dom'
import { books } from '../data/books.js'
export default function Success(){
  const { id } = useParams()
  const [params] = useSearchParams()
  const email = params.get('email')
  const book = books.find(b=>b.id===id)
  if(!book) return <div className="p-10 text-center">Book not found</div>
  return (
    <div className="max-w-[640px] mx-auto px-4 py-10 text-center">
      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 grid place-items-center mx-auto text-2xl">✓</div>
        <h1 className="mt-4 font-display font-extrabold text-2xl">Your book is ready! 🎉</h1>
        <p className="mt-2 text-sm text-slate-600">You've successfully purchased <strong>{book.title}</strong>.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <img src={book.cover} alt={book.title} className="w-24 h-32 object-cover rounded-xl border border-slate-200" />
          <div className="text-left text-sm">
            <div className="font-semibold">{book.title}</div>
            <div className="text-slate-500">By {book.author}</div>
            <div className="mt-2 text-xs bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block">Added to My Library</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Link to="/library" className="bg-brand-600 text-white py-3 rounded-full font-semibold text-sm">Go to My Library</Link>
          <button onClick={()=>alert('Demo: In production this would stream the PDF from a secure, signed URL.')} className="bg-slate-900 text-white py-3 rounded-full font-semibold text-sm">Read Now</button>
          <button onClick={()=>alert('Demo: In production this triggers a secure download with expiring token.')} className="bg-white border border-slate-200 py-3 rounded-full font-semibold text-sm">Download Book</button>
        </div>
        <p className="mt-4 text-xs text-slate-500">{email ? `Receipt would be sent to ${email} when email delivery is configured.` : 'Receipt email will be enabled when backend email service is connected.'}</p>
        <Link to="/books" className="mt-3 inline-block text-sm font-semibold text-brand-600">Continue exploring →</Link>
      </div>
    </div>
  )
}
