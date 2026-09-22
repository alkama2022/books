import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold text-lg"><span className="w-8 h-8 rounded-lg bg-brand-600 text-white grid place-items-center">P</span> PageMoor</div>
            <p className="mt-3 text-slate-600 leading-relaxed">Affordable digital books for Nigerian readers. Instant access after purchase. Read anywhere.</p>
            <p className="mt-3 text-xs text-slate-500">Demo store — sample books for prototype only. All purchases are simulated locally.</p>
          </div>
          <div>
            <div className="font-semibold">Explore</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><Link to="/books" className="hover:text-slate-900">Books</Link></li>
              <li><Link to="/categories" className="hover:text-slate-900">Categories</Link></li>
              <li><Link to="/books?sort=newest" className="hover:text-slate-900">New Releases</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><Link to="/about" className="hover:text-slate-900">About</Link></li>
              <li><a href="#" className="hover:text-slate-900">Contact: hello@pagemoor.ng</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Copyright / DMCA</a></li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">Only legally distributable books are listed. We respect authors’ rights.</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} PageMoor. All rights reserved.</span>
          <span>Made for Nigeria — mobile-first, fast on slow networks.</span>
        </div>
      </div>
    </footer>
  )
}
