import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Library from './pages/Library.jsx'
import Profile from './pages/Profile.jsx'
import Categories from './pages/Categories.jsx'
import About from './pages/About.jsx'
import Checkout from './pages/Checkout.jsx'
import Success from './pages/Success.jsx'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
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
        </Routes>
      </main>
      <Footer />
      <Toast />
      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 flex justify-around py-2 z-40">
        <a href="/" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">⌂</span>Home</a>
        <a href="/books" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">⌕</span>Explore</a>
        <a href="/library" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">📚</span>Library</a>
        <a href="/profile" className="flex flex-col items-center text-xs font-medium text-slate-600"><span className="text-lg">👤</span>Profile</a>
      </nav>
      <div className="lg:hidden h-[68px]" />
    </div>
  )
}
