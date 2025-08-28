import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const SLIDER_ITEMS = [
  { id: 1, title: 'Picture 1' },
  { id: 2, title: 'Picture 2' },
  { id: 3, title: 'Picture 3' },
  { id: 4, title: 'Picture 4' },
  { id: 5, title: 'Picture 5' },
]

const Hero3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)
  const startX = useRef(0)
  const startY = useRef(0)
  const isDragging = useRef(false)
  const isHorizontalSwipe = useRef(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      return next >= SLIDER_ITEMS.length ? prev : next
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const previous = prev - 1
      return previous < 0 ? prev : previous
    })
  }

  const handleStart = (clientX, clientY) => {
    startX.current = clientX
    startY.current = clientY
    isDragging.current = true
    isHorizontalSwipe.current = false
  }

  const handleMove = (clientX, clientY) => {
    if (!isDragging.current) return

    const deltaX = Math.abs(clientX - startX.current)
    const deltaY = Math.abs(clientY - startY.current)

    if (deltaX > deltaY && deltaX > 10) {
      isHorizontalSwipe.current = true
    }
  }

  const handleEnd = (clientX, clientY) => {
    if (!isDragging.current) return

    const deltaX = clientX - startX.current
    const deltaY = Math.abs(clientY - startY.current)

    if (
      isHorizontalSwipe.current &&
      Math.abs(deltaX) > 50 &&
      Math.abs(deltaX) > deltaY
    ) {
      if (deltaX > 0) {
        if (currentIndex > 0) {
          prevSlide()
        }
      } else {
        if (currentIndex < SLIDER_ITEMS.length - 1) {
          nextSlide()
        }
      }
    }

    isDragging.current = false
    isHorizontalSwipe.current = false
  }

  return (
    <section
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#222',
        padding: '80px 0',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className='hero3-section'
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
        }}
        className='hero3-content'
      >
        {/* Left Side - Content */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2rem',
            minWidth: '400px',
          }}
          className='hero3-left'
        >
          {/* Header */}
          <div style={{ textAlign: 'left', width: '100%' }}>
            <h2
              style={{
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: '500',
                lineHeight: 1.2,
                margin: 0,
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              Birikiminizle Birlikte Hayallerinizi Büyütün
            </h2>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                lineHeight: 1.5,
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '2rem',
              }}
            >
              2010 yılından beri güvenilir emlak danışmanlığı ile
              hayallerinizdeki evi bulmanıza yardımcı oluyoruz.
            </p>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Link
              to='/land'
              style={{
                padding: '0',
                fontSize: '1rem',
                background: 'transparent',
                color: '#fff',
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              EbruLoria Arsa
              <span style={{ fontSize: '1.2rem', marginLeft: '0.2rem' }}>
                →
              </span>
            </Link>
            <Link
              to='/projects'
              style={{
                padding: '0',
                fontSize: '1rem',
                background: 'transparent',
                color: '#fff',
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              Projeler
              <span style={{ fontSize: '1.2rem', marginLeft: '0.2rem' }}>
                →
              </span>
            </Link>
          </div>

          {/* Controller Buttons - Desktop Only */}
          <div
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
            className='hero3-desktop-controls'
          >
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              style={{
                padding: '1rem',
                fontSize: '1.2rem',
                borderRadius: '50%',
                background: 'transparent',
                color: currentIndex === 0 ? 'rgba(255, 255, 255, 0.3)' : '#fff',
                border: '2px solid #fff',
                outline: 'none',
                fontWeight: 'bold',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'color 0.2s, background 0.2s',
                opacity: currentIndex === 0 ? 0.3 : 1,
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === SLIDER_ITEMS.length - 1}
              style={{
                padding: '1rem',
                fontSize: '1.2rem',
                borderRadius: '50%',
                background: 'transparent',
                color:
                  currentIndex === SLIDER_ITEMS.length - 1
                    ? 'rgba(255, 255, 255, 0.3)'
                    : '#fff',
                border: '2px solid #fff',
                outline: 'none',
                fontWeight: 'bold',
                cursor:
                  currentIndex === SLIDER_ITEMS.length - 1
                    ? 'not-allowed'
                    : 'pointer',
                transition: 'color 0.2s, background 0.2s',
                opacity: currentIndex === SLIDER_ITEMS.length - 1 ? 0.3 : 1,
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== SLIDER_ITEMS.length - 1) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== SLIDER_ITEMS.length - 1) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Side - Slider */}
        <div
          style={{
            flex: '1',
            height: '500px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'grab',
          }}
          ref={sliderRef}
          className='hero3-slider-container'
          onTouchStart={(e) => {
            e.preventDefault()
            const touch = e.touches[0]
            handleStart(touch.clientX, touch.clientY)
          }}
          onTouchMove={(e) => {
            if (isDragging.current) {
              const touch = e.touches[0]
              handleMove(touch.clientX, touch.clientY)
            }
          }}
          onTouchEnd={(e) => {
            const touch = e.changedTouches[0]
            handleEnd(touch.clientX, touch.clientY)
          }}
          onMouseDown={(e) => {
            e.preventDefault()
            handleStart(e.clientX, e.clientY)
          }}
          onMouseMove={(e) => {
            if (isDragging.current) {
              handleMove(e.clientX, e.clientY)
            }
          }}
          onMouseUp={(e) => handleEnd(e.clientX, e.clientY)}
          onMouseLeave={(e) => {
            if (isDragging.current) handleEnd(e.clientX, e.clientY)
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              transform: `translateX(-${
                currentIndex *
                (window.innerWidth > 768 ? 420 : window.innerWidth * 0.75 + 16)
              }px)`,
              transition: 'transform 0.3s ease-out',
              width: 'fit-content',
            }}
          >
            {SLIDER_ITEMS.map((item, index) => {
              const isActive = index === currentIndex
              const isVisible =
                index === currentIndex || index === currentIndex + 1

              return (
                <div
                  key={item.id}
                  style={{
                    width: window.innerWidth > 768 ? '400px' : '75vw',
                    height: isActive
                      ? window.innerWidth > 768
                        ? '450px'
                        : '320px'
                      : window.innerWidth > 768
                      ? '380px'
                      : '280px',
                    background: '#333',
                    border: '1px solid #fff',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: isActive ? 1 : isVisible ? 0.7 : 0.3,
                    transform: `scale(${isActive ? 1 : 0.95})`,
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <h3
                    style={{
                      color: '#fff',
                      fontSize: isActive
                        ? window.innerWidth > 768
                          ? '1.8rem'
                          : '1.4rem'
                        : window.innerWidth > 768
                        ? '1.4rem'
                        : '1.2rem',
                      fontWeight: '500',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3
