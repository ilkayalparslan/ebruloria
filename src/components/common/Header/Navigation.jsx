import React from 'react'

const Navigation = ({
  searchOpen,
  setSearchOpen,
  searchValue,
  setSearchValue,
}) => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div
        className='nav-left'
        style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
      >
        <h1
          style={{
            color: '#fff',
            fontWeight: '300',
            fontSize: '2rem',
            letterSpacing: '2px',
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          EbruLoria
        </h1>
        <div
          className='desktop-menu'
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        >
          <a
            href='#'
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '400',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
            }
          >
            Home
          </a>
          <a
            href='#'
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '400',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
            }
          >
            About
          </a>
          <a
            href='#'
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '400',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
            }
          >
            Services
          </a>
          <a
            href='#'
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '400',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
            }
          >
            Projects
          </a>
          <a
            href='#'
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '400',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
            }
          >
            Contact
          </a>
        </div>
      </div>

      <div
        className='nav-right'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          minWidth: '0',
          flexWrap: 'nowrap',
          position: 'relative',
        }}
      >
        {/* Search functionality */}
        {searchOpen ? (
          <div
            className='search-container'
            style={{
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
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontSize: '1.3rem',
                marginRight: '0.5rem',
                cursor: 'pointer',
              }}
              onClick={() => setSearchOpen(false)}
            >
              &#128269;
            </span>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
              placeholder='Search...'
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '1.1rem',
                width: '100%',
                padding: '0.5rem 0',
                fontFamily: 'Montserrat, sans-serif',
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
                marginLeft: '1rem',
                fontFamily: 'Montserrat, sans-serif',
              }}
              onClick={() => {
                console.log('Searching for:', searchValue)
                setSearchOpen(false)
              }}
            >
              Search
            </button>
          </div>
        ) : (
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'transform 0.1s ease, color 0.2s ease',
            }}
            onClick={() => setSearchOpen(true)}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) =>
              (e.target.style.color = 'rgba(255, 255, 255, 0.8)')
            }
          >
            &#128269;
          </span>
        )}

        <span
          className='desktop-menu'
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) =>
            (e.target.style.color = 'rgba(255, 255, 255, 0.8)')
          }
        >
          &#128222;
        </span>
        <span
          className='desktop-menu'
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '400',
            fontSize: '1rem',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          +90 555 55 55
        </span>

        <span
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '400',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontFamily: 'Montserrat, sans-serif',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) =>
            (e.target.style.color = 'rgba(255, 255, 255, 0.9)')
          }
        >
          TR{' '}
          <span
            style={{
              fontSize: '0.8rem',
              display: 'inline-block',
              marginLeft: '2px',
            }}
          >
            &#9662;
          </span>
        </span>

        {/* Hamburger Menu */}
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '20px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#fff'
            Array.from(e.target.children).forEach(
              (child) => (child.style.background = '#fff')
            )
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'rgba(255, 255, 255, 0.8)'
            Array.from(e.target.children).forEach(
              (child) => (child.style.background = 'rgba(255, 255, 255, 0.8)')
            )
          }}
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '1px',
              transition: 'background 0.2s ease',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '1px',
              transition: 'background 0.2s ease',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '1px',
              transition: 'background 0.2s ease',
            }}
          ></div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
