import { Link } from 'react-router-dom'
import { books, categories } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'

export default function Home(){
  const featured = books.filter(b=>b.featured)
  const popular = books.filter(b=>b.popular).slice(0,4)
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Instant access • Pay with Paystack / Flutterwave (when connected)
              </div>
              <h1 className="mt-4 font-display font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[0.95] tracking-tight dark:text-white">
                Discover Books <br/><span className="text-brand-600 dark:text-emerald-400">That Move You Forward.</span>
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-[15px] sm:text-[17px] leading-relaxed max-w-[560px]">
                Learn, grow and explore with affordable digital books you can access instantly. Reading on any phone, even with slow internet.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/books" className="bg-brand-600 hover:bg-brand-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm focus-ring shadow-sm transition-colors">Explore Books →</Link>
                <Link to="/categories" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-7 py-3.5 rounded-full font-semibold text-sm focus-ring dark:text-slate-100 transition-colors">Browse Categories</Link>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                <span>✓ No pirated books</span><span>✓ Demo purchases saved locally</span>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-[520px] mx-auto">
                {books.slice(0,6).map(b=>(
                  <div key={b.id} className="rounded-2xl overflow-hidden shadow-md border border-white dark:border-slate-700 aspect-[3/4] bg-slate-100 dark:bg-slate-800">
                    <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy"/>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 text-sm border dark:border-slate-200">
                <span className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white grid place-items-center font-bold">12</span>
                <div className="text-left leading-tight"><div className="font-semibold">Curated for Nigeria</div><div className="text-xs text-white/70 dark:text-slate-500">Sample catalogue — replace with real books later</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            ['⚡','Instant digital access','Get your book seconds after payment'],
            ['🔒','Secure checkout','Architecture ready for Paystack / Flutterwave'],
            ['₦','Affordable books','From ₦1,800 — built for students'],
            ['📱','Read anywhere','Phone, tablet or laptop'],
            ['♻️','Access anytime','Your Library never expires'],
          ].map(([icon,title,desc])=>(
            <div key={title} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid place-items-center">{icon}</div>
              <div className="mt-2 font-semibold text-sm dark:text-slate-100">{title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-[22px] dark:text-white">Featured Books</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Hand-picked for you — real value, clear outcomes.</p>
          </div>
          <Link to="/books" className="hidden sm:inline-flex text-sm font-semibold text-brand-600 dark:text-emerald-400 hover:text-brand-700">View all →</Link>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {featured.map(b=> <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-display font-bold text-[22px] dark:text-white">Browse by Category</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map(c=>(
            <Link key={c.id} to={`/books?category=${c.id}`} className={`border rounded-2xl p-4 flex items-center gap-3 hover:shadow-sm transition dark:border-slate-800 ${c.color} dark:!bg-slate-900 dark:!border-slate-800`}>
              <span className="text-xl w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid place-items-center">{c.icon}</span>
              <span className="font-semibold text-sm leading-tight dark:text-slate-100">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="font-display font-bold text-[22px] dark:text-white">Most Popular</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {popular.map(b=> <BookCard key={b.id} book={b} />)}
        </div>
        <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl p-4 text-sm text-slate-700 dark:text-amber-100 flex flex-col sm:flex-row justify-between gap-3 transition-colors">
          <span>All books shown are <strong>demo/sample content</strong>. Replace with books you own or have licensed. We do not support pirated distribution.</span>
          <Link to="/about" className="font-semibold text-brand-700 dark:text-amber-400 whitespace-nowrap">How it works →</Link>
        </div>
      </section>
    </div>
  )
}
