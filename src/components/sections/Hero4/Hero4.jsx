import React from 'react'

const Hero4 = () => {
  return (
    <section
      style={{
        width: '100vw',
        minHeight: '50vh',
        background: '#f0f0f0',
        padding: '60px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className='hero4-section'
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            color: '#333',
            fontSize: '2rem',
            fontWeight: '500',
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '1rem',
          }}
        >
          Hero4 - Temporary Component
        </h2>
        <p
          style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.5,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          This is a temporary Hero4 component to provide extra height so you can
          see the complete Hero3 component above. You can remove this when
          you're done testing.
        </p>
      </div>
    </section>
  )
}

export default Hero4
