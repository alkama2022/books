import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { books, categories } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'

export default function Books(){
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const cat = params.get('category') || 'all'
  const sort = params.get('sort') || 'recommended'
  const [price, setPrice] = useState(params.get('price') || 'all')
  const [search, setSearch] = useState(q)

  function update(next){
    const p = new URLSearchParams(params)
    Object.entries(next).forEach(([k,v])=>{
      if(!v || v==='all') p.delete(k); else p.set(k,v)
    })
    setParams(p)
  }

  const filtered = useMemo(()=>{
    let list = [...books]
    if(q) {
      const s = q.toLowerCase()
      list = list.filter(b=> b.title.toLowerCase().includes(s) || b.author.toLowerCase().includes(s) || b.category.includes(s) || b.description.toLowerCase().includes(s))
    }
    if(cat!=='all') list = list.filter(b=>b.category===cat)
    if(price==='under3k') list = list.filter(b=>b.price<3000)
    if(price==='3k-4k') list = list.filter(b=>b.price>=3000 && b.price<=4000)
    if(price==='above4k') list = list.filter(b=>b.price>4000)
    if(sort==='newest') list.sort((a,b)=> new Date(b.publishedAt)-new Date(a.publishedAt))
    if(sort==='price-low') list.sort((a,b)=>a.price-b.price)
    if(sort==='price-high') list.sort((a,b)=>b.price-a.price)
    if(sort==='popular') list.sort((a,b)=> (b.popular?1:0)-(a.popular?1:0))
    return list
  },[q,cat,sort,price])

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-[28px]">Explore Books</h1>
          <p className="text-sm text-slate-500">{filtered.length} {filtered.length===1?'book':'books'} found {q && <>for “{q}”</>}</p>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); update({q:search})}} className="flex gap-2 w-full lg:w-auto">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search books, authors or topics..." className="flex-1 lg:w-[360px] px-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20" />
          <button className="bg-slate-900 text-white px-6 rounded-full text-sm font-semibold">Search</button>
        </form>
      </div>

      <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-6">
        {/* Filters */}
        <aside className="lg:sticky lg:top-[72px] h-fit space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4">
            <div className="font-semibold text-sm">Category</div>
            <div className="mt-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
              <button onClick={()=>update({category:'all'})} className={`text-left px-3 py-2 rounded-xl text-sm border ${cat==='all'?'bg-slate-900 text-white border-slate-900':'bg-slate-50 border-slate-200'}`}>All</button>
              {categories.map(c=>(
                <button key={c.id} onClick={()=>update({category:c.id})} className={`text-left px-3 py-2 rounded-xl text-sm border flex items-center gap-2 ${cat===c.id?'bg-slate-900 text-white border-slate-900':'bg-slate-50 border-slate-200'}`}>
                  <span>{c.icon}</span> {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4">
            <div className="font-semibold text-sm">Price</div>
            <select value={price} onChange={e=>{setPrice(e.target.value); update({price:e.target.value})}} className="mt-2 w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm">
              <option value="all">All prices</option>
              <option value="under3k">Under ₦3,000</option>
              <option value="3k-4k">₦3,000 — ₦4,000</option>
              <option value="above4k">Above ₦4,000</option>
            </select>

            <div className="font-semibold text-sm mt-4">Sort by</div>
            <select value={sort} onChange={e=>update({sort:e.target.value})} className="mt-2 w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm">
              <option value="recommended">Recommended</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {q && <button onClick={()=>{setSearch(''); update({q:''})}} className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium">Clear search</button>}
        </aside>

        {/* Grid */}
        <div>
          {filtered.length===0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 grid place-items-center mx-auto text-xl">🔍</div>
              <h3 className="mt-4 font-semibold">No books found.</h3>
              <p className="text-sm text-slate-500 mt-1">Try another title, author or topic.</p>
              <button onClick={()=>{setSearch(''); update({q:'',category:'all',price:'all'})}} className="mt-4 bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Browse all books</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5">
              {filtered.map(b=> <BookCard key={b.id} book={b} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
