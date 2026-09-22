import { Suspense, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Books = lazy(() => import('./pages/Books.jsx'))
const BookDetails = lazy(() => import('./pages/BookDetails.jsx'))
const Library = lazy(() => import('./pages/Library.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))
const Categories = lazy(() => import('./pages/Categories.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Checkout = lazy(() => import('./pages/Checkout.jsx'))
const Success = lazy(() => import('./pages/Success.jsx'))

function Fallback(){
  return <div className="max-w-[1280px] mx-auto px-4 py-10"><div className="h-32 animate-pulse bg-slate-100 rounded-2xl" /></div>
}

function NotFound(){
  return (
    <div className="max-w-[640px] mx-auto px-4 py-16 text-center">
      <h1 className="font-display font-extrabold text-3xl">Page not found</h1>
      <p className="text-sm text-slate-500 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-flex bg-brand-600 text-white px-6 py-3 rounded-full text-sm font-semibold">Go home</Link>
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/books" element={<Books/>} />
              <Route path="/books/:id" element={<BookDetails/>} />
              <Route path="/checkout/:id" element={<Checkout/>} />
              <Route path="/success/:id" element={<Success/>} />
              <Route path="/library" element={<Library/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/categories" element={<Categories/>} />
              <Route path="/about" element={<About/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <Toast />
      {/* Mobile bottom nav - use Link to avoid full reload in production SPA */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 flex justify-around py-2 z-40">
        <Link to="/" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">⌂</span>Home</Link>
        <Link to="/books" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">⌕</span>Explore</Link>
        <Link to="/library" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">📚</span>Library</Link>
        <Link to="/profile" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">👤</span>Profile</Link>
      </nav>
      <div className="lg:hidden h-[68px]" />
    </div>
  )
}
