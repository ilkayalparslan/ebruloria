import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Hedeflerin Konuşulduğu Nef Vizyon 2024 Çalıştayı Gerçekleştirildi',
    description:
      'EbruLoria ailesinin 2024 vizyonu ve hedeflerinin belirlendiği önemli çalıştay başarıyla tamamlandı.',
    image: 'Picture 1',
  },
  {
    id: 2,
    title: 'EbruLoria Markası Sinema Perdesinde',
    description:
      'Markamız sinema dünyasında yerini alarak geniş kitlelere ulaşmaya devam ediyor.',
    image: 'Picture 2',
  },
  {
    id: 3,
    title: "23 Nisan'da EbruLoria Coşkusu",
    description:
      "Ulusal Egemenlik ve Çocuk Bayramı'nı EbruLoria ailesi olarak coşkuyla kutladık.",
    image: 'Picture 3',
  },
]

const Hero5 = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <section
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#f8f8f8',
        padding: '80px 48px 60px 48px', // Reduced bottom padding from 80px to 60px
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className='hero5-section'
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
        }}
        className='hero5-container'
      >
        {/* Header and Button */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '100%',
          }}
          className='hero5-header'
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
            className='hero5-title'
          >
            Haberler ve Duyurular
          </h2>

          <Link
            to='/news'
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
            className='hero5-button'
            onMouseEnter={(e) => (e.currentTarget.style.color = '#666')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
          >
            Keşfet
            <span style={{ fontSize: '1.3rem', marginLeft: '0.2rem' }}>→</span>
          </Link>
        </div>

        {/* News Items List */}
        <div
          style={{
            width: '100%',
            maxWidth: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            position: 'relative',
          }}
          className='hero5-news-list'
        >
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2rem 0',
                borderBottom:
                  index < NEWS_ITEMS.length - 1 ? '1px solid #e0e0e0' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                gap: '2rem',
                position: 'relative',
              }}
              className='hero5-news-item'
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5'
                e.currentTarget.style.paddingLeft = '1rem'
                e.currentTarget.style.paddingRight = '1rem'
                e.currentTarget.style.borderRadius = '8px'
                setHoveredItem(item.id)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.paddingLeft = '0'
                e.currentTarget.style.paddingRight = '0'
                e.currentTarget.style.borderRadius = '0'
                setHoveredItem(null)
              }}
            >
              {/* Content */}
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <h3
                  style={{
                    color: '#333',
                    fontSize: '1.3rem',
                    fontWeight: '500',
                    margin: 0,
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: 1.4,
                  }}
                  className='hero5-news-title'
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#666',
                    fontSize: '1rem',
                    margin: 0,
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: 1.5,
                    opacity: 0.8,
                  }}
                  className='hero5-news-description'
                >
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  color: '#333',
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0,
                  transform:
                    hoveredItem === item.id
                      ? 'translateX(5px)'
                      : 'translateX(0)',
                }}
                className='hero5-news-arrow'
              >
                →
              </div>

              {/* Hover Image - Fixed positioning and visibility */}
              <div
                style={{
                  position: 'absolute',
                  right: '80px',
                  bottom: '100%',
                  marginBottom: '1rem',
                  width: '300px',
                  height: '200px',
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : index === 1
                      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '12px',
                  border: '3px solid #fff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                  opacity: hoveredItem === item.id ? 1 : 0,
                  transform:
                    hoveredItem === item.id
                      ? 'translateY(0)'
                      : 'translateY(20px)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    fontFamily: 'Montserrat, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {item.image}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero5
