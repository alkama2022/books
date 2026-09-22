import { Link } from 'react-router-dom'
import { useStore } from '../store/StoreContext.jsx'

function formatNaira(n){ return '₦' + n.toLocaleString('en-NG') }

export default function BookCard({ book }){
  const { isPurchased } = useStore()
  const owned = isPurchased(book.id)
  return (
    <Link to={`/books/${book.id}`} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all focus-ring">
      <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
        <img src={book.cover} alt={book.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
        {book.popular && <span className="absolute top-2 left-2 bg-amber-400 text-slate-900 text-[11px] font-bold px-2 py-1 rounded-full">Popular</span>}
        {owned && <span className="absolute top-2 right-2 bg-brand-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">Owned</span>}
        {book.originalPrice && <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full border">Save ₦{(book.originalPrice - book.price).toLocaleString()}</span>}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <div className="text-[11px] font-semibold tracking-wide uppercase text-brand-600">{book.category}</div>
        <h3 className="mt-1 font-semibold leading-tight line-clamp-2 text-[15px]">{book.title}</h3>
        <p className="text-xs text-slate-500 mt-1">By {book.author}</p>
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed hidden sm:block">{book.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="font-bold text-[16px]">{formatNaira(book.price)}</div>
            {book.originalPrice && <div className="text-xs text-slate-400 line-through">{formatNaira(book.originalPrice)}</div>}
          </div>
          <span className={`text-xs font-semibold px-3 py-2 rounded-full ${owned ? 'bg-slate-900 text-white' : 'bg-brand-600 text-white group-hover:bg-brand-700'}`}>{owned ? 'Open' : 'View Book'}</span>
        </div>
      </div>
    </Link>
  )
}
export { formatNaira }
