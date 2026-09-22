export default function About(){
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-display font-extrabold text-[28px]">About PageMoor</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-700">PageMoor is a Nigerian-friendly digital bookstore built mobile-first. Our goal is simple: help you discover useful books, understand their value, and access them instantly after payment — on any phone.</p>
      <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="font-semibold">What makes this MVP startup-ready?</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>✓ Clear journey: Home → Discover → Details → Preview → Buy → Library</li>
          <li>✓ Frontend designed for Paystack/Flutterwave backend verification (never trust frontend-only success)</li>
          <li>✓ Reusable components and mock data shaped to be replaced by /api/books, /api/orders, /api/library</li>
          <li>✓ Accessible, fast, low-bandwidth — large tap targets, semantic HTML, lazy images</li>
          <li>✓ No pirated books — only books you own or have licensed. DMCA/contact provided.</li>
        </ul>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4"><strong>Frontend</strong><br/>React + React Router + Tailwind. Mock purchases stored in localStorage. Replace with backend APIs.</div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4"><strong>Future backend</strong><br/>Django (or any) → Auth, Book, Order, Payment verification, Secure download with signed URLs.</div>
      </div>
      <p className="mt-6 text-xs text-slate-500">Contact: hello@pagemoor.ng • This prototype uses sample covers from Unsplash and sample copy for demo only.</p>
    </div>
  )
}
