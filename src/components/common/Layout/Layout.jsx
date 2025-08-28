import React from 'react'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
