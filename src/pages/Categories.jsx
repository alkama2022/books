import { Link } from 'react-router-dom'
import { categories, books } from '../data/books.js'
export default function Categories(){
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="font-display font-extrabold text-[26px]">Categories</h1>
      <p className="text-sm text-slate-500">Find books by what you want to achieve.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(c=>{
          const count = books.filter(b=>b.category===c.id).length
          return (
            <Link key={c.id} to={`/books?category=${c.id}`} className={`border rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm ${c.color}`}>
              <span className="text-2xl w-12 h-12 rounded-xl bg-white border border-slate-200 grid place-items-center">{c.icon}</span>
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-slate-500">{count} {count===1?'book':'books'}</div>
              </div>
              <span className="ml-auto text-slate-400">→</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
