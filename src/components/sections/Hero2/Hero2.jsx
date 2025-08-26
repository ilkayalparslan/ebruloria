import React from 'react'

const Hero2 = () => {
  return (
    <section
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#fff',
        padding: '100px 48px 48px 48px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
      className='hero2-section'
    >
      {/* Header and Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '3rem',
          width: '100%',
          flexWrap: 'wrap',
        }}
        className='hero2-content'
      >
        <h2
          style={{
            color: '#333',
            fontSize: '2rem',
            fontWeight: '500',
            lineHeight: 1.4,
            textAlign: 'left',
            flex: '1',
            minWidth: '300px',
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
          }}
          className='hero2-heading'
        >
          2010 yılından beri metrekarelerle değil santimetrekarelerle çalışarak,
          ince düşünülmüş yaşam alanları tasarlıyoruz.
        </h2>

        <button
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.2rem',
            borderRadius: '50px',
            background: 'linear-gradient(90deg, #333 0%, #555 100%)',
            color: '#fff',
            border: 'none',
            outline: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            whiteSpace: 'nowrap',
            fontFamily: 'Montserrat, sans-serif',
            alignSelf: 'flex-start',
          }}
          className='hero2-button'
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Keşfet
          <span style={{ fontSize: '1.3rem' }}>→</span>
        </button>
      </div>

      {/* Video */}
      <div
        style={{
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        }}
        className='hero2-video-container'
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '400px',
            objectFit: 'cover',
            display: 'block',
          }}
          className='hero2-video'
        >
          <source src='/images/videos/media-1.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default Hero2
