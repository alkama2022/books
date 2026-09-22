export default function About(){
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-display font-extrabold text-[28px] dark:text-white">About PageMoor</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">PageMoor is a Nigerian-friendly digital bookstore built mobile-first. Our goal is simple: help you discover useful books, understand their value, and access them instantly after payment — on any phone.</p>
      <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors">
        <h2 className="font-semibold dark:text-slate-100">What makes this MVP startup-ready?</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>✓ Clear journey: Home → Discover → Details → Preview → Buy → Library</li>
          <li>✓ Frontend designed for Paystack/Flutterwave backend verification (never trust frontend-only success)</li>
          <li>✓ Reusable components and mock data shaped to be replaced by /api/books, /api/orders, /api/library</li>
          <li>✓ Accessible, fast, low-bandwidth — large tap targets, semantic HTML, lazy images</li>
          <li>✓ No pirated books — only books you own or have licensed. DMCA/contact provided.</li>
        </ul>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 dark:text-slate-300 transition-colors"><strong className="dark:text-white">Frontend</strong><br/>React + React Router + Tailwind. Mock purchases stored in localStorage. Replace with backend APIs.</div>
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 dark:text-slate-300 transition-colors"><strong className="dark:text-white">Future backend</strong><br/>Django (or any) → Auth, Book, Order, Payment verification, Secure download with signed URLs.</div>
      </div>
      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">Contact: hello@pagemoor.ng • This prototype uses sample covers from Unsplash and sample copy for demo only.</p>
    </div>
  )
}
