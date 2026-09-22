import { Link } from 'react-router-dom'
import { useStore } from '../store/StoreContext.jsx'
export default function Profile(){
  const { purchases } = useStore()
  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="font-display font-extrabold text-[26px]">Profile</h1>
      <div className="mt-6 grid lg:grid-cols-[280px_1fr] gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white grid place-items-center mx-auto text-xl font-bold">GA</div>
          <div className="mt-3 font-semibold">Guest Account</div>
          <div className="text-xs text-slate-500">Demo — no authentication yet. In production this shows real user, email, and purchase history via User API.</div>
          <button onClick={()=>alert('Demo: Authentication (signup/login) will be connected to backend Auth API.')} className="mt-4 w-full bg-brand-600 text-white py-2.5 rounded-full text-sm font-semibold">Sign in (coming soon)</button>
        </div>
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-sm">Purchase history</h3>
            {purchases.length===0 ? <p className="text-sm text-slate-500 mt-2">No purchases yet.</p> : (
              <ul className="mt-3 divide-y divide-slate-100">
                {purchases.map(p=> <li key={p.id} className="py-3 flex justify-between gap-4 text-sm"><span>{p.title} • ₦{p.price.toLocaleString()}</span><span className="text-slate-400 text-xs">{new Date(p.purchasedAt).toLocaleDateString()}</span></li>)}
              </ul>
            )}
            <Link to="/library" className="mt-4 inline-block text-sm font-semibold text-brand-600">Go to Library →</Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-sm">Account</h3>
            <div className="mt-3 grid gap-2 text-sm">
              <button className="text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">Help & Support — hello@pagemoor.ng</button>
              <button onClick={()=>{localStorage.removeItem('pm_purchases'); location.reload()}} className="text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-red-600">Clear demo purchases (local only)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
