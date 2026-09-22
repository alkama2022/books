import { createContext, useContext, useEffect, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [purchases, setPurchases] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pm_purchases') || '[]') } catch { return [] }
  })
  const [toasts, setToasts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{ localStorage.setItem('pm_purchases', JSON.stringify(purchases)) },[purchases])

  function addToast(message, type='info'){
    const id = Date.now()+Math.random()
    setToasts(t=>[...t,{id,message,type}])
    setTimeout(()=> setToasts(t=>t.filter(x=>x.id!==id)), 3000)
  }
  function purchaseBook(book){
    if(purchases.find(p=>p.id===book.id)) { addToast('Already in your library','info'); return }
    const entry = { ...book, purchasedAt: new Date().toISOString() }
    setPurchases(p=>[entry, ...p])
    addToast('Book added to your library','success')
  }
  function isPurchased(id){ return purchases.some(p=>p.id===id) }

  return (
    <StoreContext.Provider value={{ purchases, purchaseBook, isPurchased, toasts, addToast, cart, setCart }}>
      {children}
    </StoreContext.Provider>
  )
}
export const useStore = () => {
  const ctx = useContext(StoreContext)
  if(!ctx) throw new Error('useStore outside provider')
  return ctx
}
