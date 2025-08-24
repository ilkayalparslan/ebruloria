import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const SLIDES = [
  'Picture 1',
  'Picture 2',
  'Picture 3',
  'Picture 4',
  'Picture 5',
  'Picture 6',
];

function App() {
  const [current, setCurrent] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const timerRef = useRef(null);

  // Auto-advance every 5 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOpen && !event.target.closest('.search-container')) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  // Manual navigation resets timer
  const goToSlide = (idx) => {
    clearTimeout(timerRef.current);
    setCurrent(idx);
  };
  const nextSlide = () => goToSlide((current + 1) % SLIDES.length);
  const prevSlide = () => goToSlide((current - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#222' }}>
      {/* Top Navigation Bar */}
      <div className="navbar" style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px 32px', boxSizing: 'border-box' }}>
        <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px', margin: 0 }}>EbruLoria</h1>
          <nav className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}>Menu 1</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}>Menu 2</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}>Menu 3</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}>Menu 4</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}>Menu 5</a>
          </nav>
        </div>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '0', flexWrap: 'nowrap', position: 'relative' }}>
          {/* Search Icon and Input */}
          {searchOpen ? (
            <div className="search-container" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: 'rgba(0,0,0,0.3)', 
              borderRadius: '15px', 
              padding: '1rem 1.5rem', 
              width: '80vw', 
              position: 'fixed', 
              left: '50%',
              transform: 'translateX(-50%)',
              top: '80px',
              zIndex: 30,
              animation: 'searchExpand 0.3s ease-out',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              <span style={{ color: '#fff', fontSize: '1.3rem', marginRight: '0.5rem', cursor: 'pointer' }} aria-label="Search" onClick={() => setSearchOpen(false)}>&#128269;</span>
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                autoFocus
                placeholder="Search..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '1.1rem',
                  width: '100%',
                  padding: '0.5rem 0',
                }}
              />
              <button
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  marginLeft: '1rem'
                }}
                onClick={() => {
                  // Handle search action here
                  console.log('Searching for:', searchValue);
                  setSearchOpen(false);
                }}
              >
                Search
              </button>
            </div>
          ) : (
            <span 
              style={{ color: '#fff', fontSize: '1.3rem', cursor: 'pointer', transition: 'transform 0.1s ease' }} 
              aria-label="Search" 
              onClick={() => setSearchOpen(true)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >&#128269;</span>
          )}
          {/* Phone Icon - hide on mobile */}
          <span className="desktop-menu" style={{ color: '#fff', fontSize: '1.3rem', cursor: 'pointer' }} aria-label="Phone">&#128222;</span>
          {/* Phone Number - hide on mobile */}
          <span className="desktop-menu" style={{ color: '#fff', fontWeight: '500', fontSize: '1.1rem' }}>+90 555 55 55</span>
          {/* Language Selector */}
          <span style={{ color: '#fff', fontWeight: '500', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            TR <span style={{ fontSize: '1rem', display: 'inline-block', marginLeft: '2px' }}>&#9662;</span>
          </span>
          {/* Hamburger Menu */}
          <div style={{ 
            color: '#fff', 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '20px'
          }} aria-label="Menu">
            <div style={{ width: '100%', height: '2px', background: '#fff', borderRadius: '1px' }}></div>
            <div style={{ width: '100%', height: '2px', background: '#fff', borderRadius: '1px' }}></div>
            <div style={{ width: '100%', height: '2px', background: '#fff', borderRadius: '1px' }}></div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div 
        style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.5s', background: `linear-gradient(120deg, #${(current+1)*2}a${(current+1)*3}f${(current+1)*4}b, #222)` }}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          const startX = touch.clientX;
          e.currentTarget.addEventListener('touchend', (endEvent) => {
            const endTouch = endEvent.changedTouches[0];
            const deltaX = endTouch.clientX - startX;
            if (Math.abs(deltaX) > 50) { // minimum swipe distance
              if (deltaX > 0) {
                prevSlide();
              } else {
                nextSlide();
              }
            }
          }, { once: true });
        }}
      >
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: '#fff', fontWeight: 'bold', userSelect: 'none', transition: 'opacity 0.5s' }}>
          {SLIDES[current]}
        </div>
      </div>

      {/* Controls bottom left */}
      <div className="content-bottom" style={{ position: 'absolute', bottom: 48, left: 48, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', maxWidth: '480px' }}>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', margin: 0, textAlign: 'left', width: '100%', fontFamily: 'Delius, cursive' }}>{`Slider ${current + 1} Header`}</h2>
        <div className="subtitle" style={{ color: '#fff', fontSize: '1.1rem', opacity: 0.8, marginBottom: '1.5rem', lineHeight: 1.5, textAlign: 'left', width: '100%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <button
            className="desktop-menu"
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
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Button <span style={{ fontSize: '1.5rem', display: 'inline-block' }}>&#8594;</span>
          </button>
          <div className="slider-controls" style={{ display: 'flex', gap: '1rem' }}>
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
              aria-label="Previous Slide"
              onMouseEnter={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.background = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'transparent'; }}
            >&#8592;</button>
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
              aria-label="Next Slide"
              onMouseEnter={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.background = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'transparent'; }}
            >&#8594;</button>
          </div>
        </div>
      </div>

      {/* Vertical Fixed Position Buttons */}
      <div className="vertical-buttons" style={{
        position: 'fixed',
        top: '202px', // 32px (nav top) + 170px offset
        right: '-40px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '9rem'
      }}>
        {/* Phone Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '0.8rem 1.2rem',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          gap: '0.5rem',
          transform: 'rotate(90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.9)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
        }}
        >
          <span style={{ fontSize: '1.2rem' }}>📞</span>
          <span>Sizi Arayalım</span>
        </div>

        {/* Map Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '0.8rem 1.2rem',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          gap: '0.5rem',
          transform: 'rotate(90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.9)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
        }}
        >
          <span style={{ fontSize: '1.2rem' }}>📍</span>
          <span>EbruLoria Online</span>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="whatsapp-button" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        cursor: 'pointer',
      }}>
        <div style={{
          position: 'relative',
          width: '60px',
          height: '60px',
        }}>
          {/* Animated Border */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.7)',
            animation: 'pulseRing 5s infinite',
          }}></div>
          
          {/* Main Button */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
            zIndex: 2,
            cursor: 'pointer'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1.1)'}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Buttons */}
      <div className="mobile-bottom-buttons" style={{ display: 'none' }}>
        <div className="mobile-bottom-button" style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.9)',
          color: '#fff',
          padding: '0.8rem 1.2rem',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          gap: '0.5rem',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '1.2rem' }}>📞</span>
          <span>Sizi Arayalım</span>
        </div>

        <div className="mobile-bottom-button" style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          padding: '0.8rem 1.2rem',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          gap: '0.5rem',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '1.2rem' }}>📍</span>
          <span>EbruLoria Online</span>
        </div>
      </div>
    </div>
  );
}

export default App
