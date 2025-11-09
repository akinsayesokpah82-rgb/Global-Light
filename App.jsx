import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Bible from './pages/Bible'
import WAECPrep from './pages/WAECPrep'
import ARView from './pages/ARView'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <header style={{padding:20}}>
        <h1>Global Light</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> | <Link to="/bible">Bible</Link> | <Link to="/waec">WAEC Prep</Link> | <Link to="/ar">AR</Link>
        </nav>
      </header>
      <main style={{padding:20}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/bible" element={<Bible/>} />
          <Route path="/waec" element={<WAECPrep/>} />
          <Route path="/ar" element={<ARView/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
