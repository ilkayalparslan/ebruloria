import React from 'react'
import { Link } from 'react-router-dom'

const SlideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1999,
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: window.innerWidth <= 768 ? '100vw' : '25vw',
          minWidth: window.innerWidth <= 768 ? 'auto' : '350px',
          height: '100vh',
          background: '#2a2a2a',
          color: '#fff',
          zIndex: 2000,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          boxSizing: 'border-box',
          overflow: 'auto',
        }}
        className='slide-menu'
      >
        {/* Close Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '2rem',
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <Link
            to='/'
            onClick={onClose}
            style={{
              color: '#fff',
              fontSize: '2rem',
              fontWeight: '300',
              margin: 0,
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '2px',
              textDecoration: 'none',
            }}
          >
            ebruloria
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <Link
            to='/about'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            Biz Kimiz
          </Link>
          <Link
            to='/discoveries'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            EbruLoria Keşifleri
          </Link>
          <Link
            to='/projects'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            Projeler
          </Link>
          <Link
            to='/foundation'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            EbruLoria Vakfı
          </Link>
          <Link
            to='/careers'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            EbruLoria Olmak
          </Link>
          <Link
            to='/media'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            Medya Merkezi
          </Link>
          <Link
            to='/news'
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              padding: '1rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            Haberler ve Duyurular
          </Link>
        </nav>

        {/* Contact Info */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Phone */}
          <a
            href='tel:+905444669633'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '1.5rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <span style={{ fontSize: '1.3rem' }}>📞</span>
            444 9 633
          </a>

          {/* Email */}
          <a
            href='mailto:info@ebruloria.com.tr'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '2rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <span style={{ fontSize: '1.3rem' }}>✉️</span>
            info@ebruloria.com.tr
          </a>

          {/* Social Media */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <a
              href='#'
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '1.1rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fff'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
              }}
            >
              𝕏
            </a>
            <a
              href='#'
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '1.2rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fff'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
              }}
            >
              f
            </a>
            <a
              href='#'
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '1.1rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fff'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
              }}
            >
              📷
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideMenu
