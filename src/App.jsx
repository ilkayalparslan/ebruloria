import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './components/About.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Footer from './components/Footer.jsx'
import Hotels from './pages/Hotels.jsx'
import './index.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navigation />
              <Home />
              <Footer />
              <FloatingButtons />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <Navigation />
              <About />
              <Footer />
              <FloatingButtons />
            </>
          }
        />
        <Route path='/hotels' element={<Hotels />} />
      </Routes>
    </div>
  )
}

export default App
