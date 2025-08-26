import React, { useState, useEffect, useRef } from 'react'

const SLIDES = [
  '/images/hero/hero1.jpeg',
  '/images/hero/hero2.jpg',
  'Picture 3',
  'Picture 4',
  'Picture 5',
  'Picture 6',
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  // Auto-advance every 5 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearTimeout(timerRef.current)
  }, [current])

  // Manual navigation resets timer
  const goToSlide = (idx) => {
    clearTimeout(timerRef.current)
    setCurrent(idx)
  }
  const nextSlide = () => goToSlide((current + 1) % SLIDES.length)
  const prevSlide = () =>
    goToSlide((current - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'block',
      }}
    >
      {/* Slider */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.5s',
          background: `linear-gradient(120deg, #${(current + 1) * 2}a${
            (current + 1) * 3
          }f${(current + 1) * 4}b, #222)`,
          position: 'relative',
        }}
        onTouchStart={(e) => {
          const touch = e.touches[0]
          const startX = touch.clientX
          e.currentTarget.addEventListener(
            'touchend',
            (endEvent) => {
              const endTouch = endEvent.changedTouches[0]
              const deltaX = endTouch.clientX - startX
              if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                  prevSlide()
                } else {
                  nextSlide()
                }
              }
            },
            { once: true }
          )
        }}
      >
        {SLIDES[current].startsWith('/images/') ? (
          <>
            <img
              src={SLIDES[current]}
              alt={`Slide ${current + 1}`}
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1,
              }}
            />
          </>
        ) : (
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              color: '#fff',
              fontWeight: 'bold',
              userSelect: 'none',
              transition: 'opacity 0.5s',
            }}
          >
            {SLIDES[current]}
          </div>
        )}
      </div>

      {/* Controls bottom left */}
      <div
        className='content-bottom'
        style={{
          position: 'absolute',
          bottom: 48,
          left: 48,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
          maxWidth: '480px',
        }}
      >
        <h2
          style={{
            color: '#fff',
            fontSize: '2.5rem',
            margin: 0,
            textAlign: 'left',
            width: '100%',
            fontFamily: 'Delius, cursive',
          }}
        >{`Slider ${current + 1} Header`}</h2>
        <div
          className='subtitle'
          style={{
            color: '#fff',
            fontSize: '1.1rem',
            opacity: 0.8,
            marginBottom: '1.5rem',
            lineHeight: 1.5,
            textAlign: 'left',
            width: '100%',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <button
            className='desktop-menu'
            style={{
              padding: '1rem 3rem 1rem 2rem',
              fontSize: '1.2rem',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, #ffffff 0%, #f0f0f0 100%)',
              color: '#333',
              border: 'none',
              outline: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 0.1s ease',
            }}
          >
            Button{' '}
            <span style={{ fontSize: '1.5rem', display: 'inline-block' }}>
              &#8594;
            </span>
          </button>
          <div
            className='slider-controls'
            style={{ display: 'flex', gap: '1rem' }}
          >
            <button
              onClick={prevSlide}
              style={{
                padding: '1rem',
                fontSize: '1.2rem',
                borderRadius: '50%',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                outline: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              style={{
                padding: '1rem',
                fontSize: '1.2rem',
                borderRadius: '50%',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                outline: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
