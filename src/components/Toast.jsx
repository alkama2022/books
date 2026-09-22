import { useStore } from '../store/StoreContext.jsx'
export default function Toast(){
  const { toasts } = useStore()
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 space-y-2 w-[92%] max-w-sm">
      {toasts.map(t=>(
        <div key={t.id} className={`px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${t.type==='success'?'bg-green-600 text-white border-green-700':'bg-slate-900 text-white border-slate-800'}`}>
          {t.message}
        </div>
      ))}
    </div>
  )
}
