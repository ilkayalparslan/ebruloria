import React from 'react'
import { Link } from 'react-router-dom'

const Hero4 = () => {
  return (
    <section
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#f8f8f8',
        padding: '60px 48px 80px 48px', // Reduced top padding
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Changed from center to flex-start
        position: 'relative',
      }}
      className='hero4-section'
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1600px', // Increased from 1400px
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          margin: '0 auto',
          paddingTop: '2rem', // Small top padding for spacing
        }}
        className='hero4-container'
      >
        {/* Header and Button */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem', // Reduced gap
            width: '100%',
          }}
          className='hero4-header'
        >
          <h2
            style={{
              color: '#333',
              fontSize: '3rem',
              fontWeight: '300',
              margin: 0,
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: 1.2,
              letterSpacing: '-1px',
            }}
            className='hero4-title'
          >
            EbruLoria Konut
          </h2>

          <Link
            to='/housing'
            style={{
              padding: '0',
              fontSize: '1.1rem',
              background: 'transparent',
              color: '#333',
              border: 'none',
              outline: 'none',
              fontWeight: '400',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
              textDecoration: 'none',
            }}
            className='hero4-button'
            onMouseEnter={(e) => (e.currentTarget.style.color = '#666')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
          >
            Keşfet
            <span style={{ fontSize: '1.3rem', marginLeft: '0.2rem' }}>→</span>
          </Link>
        </div>

        {/* Two Side-by-Side Images */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '1rem', // Reduced from 2rem to 1rem
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '1400px', // Added max-width for images container
          }}
          className='hero4-images'
        >
          {/* Left Image */}
          <div
            style={{
              flex: '1',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
            className='hero4-image-card'
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {/* EbruLoria text overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  zIndex: 2,
                }}
                className='hero4-brand-text'
              >
                EbruLoria
              </div>

              {/* Placeholder content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.2rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Picture 1
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              flex: '1',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
            className='hero4-image-card'
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {/* EbruLoria text overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  zIndex: 2,
                }}
                className='hero4-brand-text'
              >
                EbruLoria
              </div>

              {/* Placeholder content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.2rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Picture 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero4
