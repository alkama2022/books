import { Link } from 'react-router-dom'
import { useStore } from '../store/StoreContext.jsx'

function formatNaira(n){ return '₦' + n.toLocaleString('en-NG') }

export default function BookCard({ book }){
  const { isPurchased } = useStore()
  const owned = isPurchased(book.id)
  return (
    <Link to={`/books/${book.id}`} className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 dark:hover:shadow-slate-900/50 transition-all focus-ring">
      <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img src={book.cover} alt={book.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300" />
        {book.popular && <span className="absolute top-2 left-2 bg-amber-400 text-slate-900 text-[11px] font-bold px-2 py-1 rounded-full shadow-sm">Popular</span>}
        {owned && <span className="absolute top-2 right-2 bg-brand-600 text-white text-[11px] font-bold px-2 py-1 rounded-full shadow-sm">Owned</span>}
        {book.originalPrice && <span className="absolute bottom-2 right-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-900 dark:text-slate-100 text-xs font-semibold px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">Save ₦{(book.originalPrice - book.price).toLocaleString()}</span>}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <div className="text-[11px] font-semibold tracking-wide uppercase text-brand-600 dark:text-emerald-400">{book.category}</div>
        <h3 className="mt-1 font-semibold leading-tight line-clamp-2 text-[15px] dark:text-slate-100">{book.title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">By {book.author}</p>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed hidden sm:block">{book.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="font-bold text-[16px] dark:text-white">{formatNaira(book.price)}</div>
            {book.originalPrice && <div className="text-xs text-slate-400 line-through dark:text-slate-500">{formatNaira(book.originalPrice)}</div>}
          </div>
          <span className={`text-xs font-semibold px-3 py-2 rounded-full transition-colors ${owned ? 'bg-slate-900 dark:bg-slate-700 text-white' : 'bg-brand-600 text-white group-hover:bg-brand-700'}`}>{owned ? 'Open' : 'View Book'}</span>
        </div>
      </div>
    </Link>
  )
}
export { formatNaira }
