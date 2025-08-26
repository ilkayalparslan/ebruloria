import React, { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/common/Layout/Layout'
import Header from './components/common/Header/Header'
import Home from './pages/Home'
import FloatingButtons from './components/ui/FloatingButtons/FloatingButtons'

function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOpen && !event.target.closest('.search-container')) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchOpen])

  return (
    <Layout>
      <Header
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <Home />

      <FloatingButtons />
    </Layout>
  )
}

export default App
