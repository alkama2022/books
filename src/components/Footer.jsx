import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold text-lg dark:text-white"><span className="w-8 h-8 rounded-lg bg-brand-600 text-white grid place-items-center">P</span> PageMoor</div>
            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">Affordable digital books for Nigerian readers. Instant access after purchase. Read anywhere.</p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">Demo store — sample books for prototype only. All purchases are simulated locally.</p>
          </div>
          <div>
            <div className="font-semibold dark:text-slate-100">Explore</div>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li><Link to="/books" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Books</Link></li>
              <li><Link to="/categories" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Categories</Link></li>
              <li><Link to="/books?sort=newest" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">New Releases</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold dark:text-slate-100">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Contact: hello@pagemoor.ng</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold dark:text-slate-100">Legal</div>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Copyright / DMCA</a></li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">Only legally distributable books are listed. We respect authors’ rights.</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} PageMoor. All rights reserved.</span>
          <span>Made for Nigeria — mobile-first, fast on slow networks.</span>
        </div>
      </div>
    </footer>
  )
}
