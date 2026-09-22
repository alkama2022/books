import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, error: null } }
  static getDerivedStateFromError(error){ return { hasError: true, error } }
  componentDidCatch(error, info){
    if (import.meta.env.DEV) console.error(error, info)
  }
  render(){
    if(this.state.hasError){
      return (
        <div className="max-w-[640px] mx-auto px-4 py-10">
          <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 rounded-2xl p-6 text-center transition-colors">
            <h2 className="font-bold text-lg dark:text-white">Something went wrong</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Please refresh the page. If the problem persists, contact support.</p>
            <button onClick={()=> window.location.reload()} className="mt-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Reload page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
