import React, { useState, useRef } from 'react'

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
      return next >= SLIDER_ITEMS.length ? 0 : next // Go to next or loop to start
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const previous = prev - 1
      return previous < 0 ? SLIDER_ITEMS.length - 1 : previous // Go to previous or loop to end
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

    // Determine if this is a horizontal swipe
    if (deltaX > deltaY && deltaX > 10) {
      isHorizontalSwipe.current = true
    }
  }

  const handleEnd = (clientX, clientY) => {
    if (!isDragging.current) return

    const deltaX = clientX - startX.current
    const deltaY = Math.abs(clientY - startY.current)

    // Only handle horizontal swipes with sufficient distance
    if (
      isHorizontalSwipe.current &&
      Math.abs(deltaX) > 50 && // Reduced threshold for easier swiping
      Math.abs(deltaX) > deltaY
    ) {
      if (deltaX > 0) {
        // Swipe right = go to previous slide
        prevSlide()
      } else {
        // Swipe left = go to next slide
        nextSlide()
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
        padding: '40px 20px 60px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
      className='hero3-section'
    >
      <div style={{ textAlign: 'left', width: '100%', marginBottom: '1rem' }}>
        <h2
          style={{
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '500',
            lineHeight: 1.3,
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '0.8rem',
          }}
        >
          Birikiminizle Birlikte Hayallerinizi Büyütün
        </h2>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: 1.4,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          2010 yılından beri güvenilir emlak danışmanlığı ile hayallerinizdeki
          evi bulmanıza yardımcı oluyoruz.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '0.5rem',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <button
          style={{
            padding: '0',
            fontSize: '0.9rem',
            background: 'transparent',
            color: '#fff',
            border: 'none',
            outline: 'none',
            fontWeight: '400',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
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
          <span style={{ fontSize: '1rem', marginLeft: '0.2rem' }}>→</span>
        </button>
        <button
          style={{
            padding: '0',
            fontSize: '0.9rem',
            background: 'transparent',
            color: '#fff',
            border: 'none',
            outline: 'none',
            fontWeight: '400',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
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
          <span style={{ fontSize: '1rem', marginLeft: '0.2rem' }}>→</span>
        </button>
      </div>

      <div
        style={{
          width: '100%',
          height: '350px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          cursor: 'grab',
        }}
        ref={sliderRef}
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
            gap: '1rem',
            transform: `translateX(-${currentIndex * 350}px)`,
            transition: 'transform 0.3s ease-out',
            width: 'fit-content',
          }}
        >
          {SLIDER_ITEMS.map((item, index) => {
            const isActive = index === currentIndex
            const isVisible = index >= currentIndex && index <= currentIndex + 1

            if (!isVisible) {
              return (
                <div
                  key={item.id}
                  style={{
                    width: '340px',
                    height: '320px',
                    flexShrink: 0,
                    visibility: 'hidden',
                  }}
                />
              )
            }

            return (
              <div
                key={item.id}
                style={{
                  width: isActive ? '340px' : '280px',
                  height: isActive ? '320px' : '280px',
                  background: '#333',
                  border: '1px solid #fff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isActive ? 1 : 0.8,
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
                    fontSize: isActive ? '1.4rem' : '1.2rem',
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

      <div style={{ textAlign: 'left', width: '100%', marginTop: '1rem' }}>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '3rem',
          }}
        >
          Modern yaşam alanları, premium projeler ve yatırım fırsatları ile
          hayallerinizdeki evi bulmanıza yardımcı oluyoruz. Şehrin kalbinde,
          konforlu ve lüks yaşam alanları. Aileniz için en iyisini hak
          ediyorsunuz.
        </p>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '120px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 999,
        }}
        className='hero3-navigation'
      >
        <button
          onClick={prevSlide}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            border: '2px solid #fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')
          }
        >
          ↑
        </button>
        <button
          onClick={nextSlide}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            border: '2px solid #fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')
          }
        >
          ↓
        </button>
      </div>
    </section>
  )
}

export default Hero3
