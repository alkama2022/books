import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, error: null } }
  static getDerivedStateFromError(error){ return { hasError: true, error } }
  componentDidCatch(error, info){
    // In production you would report to Sentry / logging service
    // eslint-disable-next-line no-console
    if (import.meta.env.DEV) console.error(error, info)
  }
  render(){
    if(this.state.hasError){
      return (
        <div className="max-w-[640px] mx-auto px-4 py-10">
          <div className="bg-white border border-red-200 rounded-2xl p-6 text-center">
            <h2 className="font-bold text-lg">Something went wrong</h2>
            <p className="text-sm text-slate-500 mt-2">Please refresh the page. If the problem persists, contact support.</p>
            <button onClick={()=> window.location.reload()} className="mt-4 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Reload page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
