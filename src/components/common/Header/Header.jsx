import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'

const Header = ({ searchOpen, setSearchOpen, searchValue, setSearchValue }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPoint = window.innerHeight * 0.1 // 10vh

      setIsScrolled(scrollPosition > triggerPoint)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 1000,
        padding: '32px 32px',
        boxSizing: 'border-box',
        marginTop: isMobile ? '0' : isScrolled ? '-120px' : '0',
        transition:
          'margin-top 0.3s ease-in-out, background 0.3s ease-in-out, border-bottom 0.3s ease-in-out',
        background: isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        borderBottom: isScrolled ? '1px solid #fff' : '1px solid transparent',
      }}
    >
      <Navigation
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </header>
  )
}

export default Header
