export function CardSkeleton(){
  return <div className="animate-pulse bg-white border border-slate-200 rounded-2xl overflow-hidden"><div className="aspect-[3/4] bg-slate-100"/><div className="p-4 space-y-3"><div className="h-3 bg-slate-100 rounded"/><div className="h-4 bg-slate-100 rounded w-3/4"/><div className="h-3 bg-slate-100 rounded w-1/2"/></div></div>
}
export function GridSkeleton({ count=8 }){
  return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">{Array.from({length:count}).map((_,i)=><CardSkeleton key={i}/>)}</div>
}
