import React, { useState } from 'react'

const OFFICES = [
  {
    id: 1,
    title: 'EbruLoria Satış Ofisi İstanbul Vadi',
    address:
      'Avcılar İstanbul, Huzur Mah. Azerbaycan Cad. Dış Kapı:28 A Blok No:2 Sarıyer, İstanbul',
    workingDays: 'Haftanın 7 Günü',
    workingHours: '10:00 - 19:00',
    email: 'vadi.res@ebruloria.com.tr',
  },
  {
    id: 2,
    title: 'EbruLoria Satış Ofisi Etiler',
    address: 'Etiler, Tanburi Ali Efendi Sk. No:3, 34337 Beşiktaş/İstanbul',
    workingDays: 'Haftanın 7 Günü',
    workingHours: '10:00 - 19:00',
    email: 'etiler.res@ebruloria.com.tr',
  },
  {
    id: 3,
    title: 'EbruLoria Satış Ofisi Başakşehir',
    address: 'Kayabaşı, Gazi Yaşargil Cd No:12C Adım İstanbul/Başakşehir',
    workingDays: 'Haftanın 7 Günü',
    workingHours: '10:00 - 19:00',
    email: 'basaksehir.res@ebruloria.com.tr',
  },
]

const Hero6 = () => {
  const [selectedOffice, setSelectedOffice] = useState(null)

  return (
    <section
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#f8f8f8',
        padding: '60px 48px 80px 48px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className='hero6-section'
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: selectedOffice ? 'flex-start' : 'center',
          gap: '2rem',
          margin: '0 auto',
          minHeight: selectedOffice ? 'auto' : '60vh',
        }}
        className='hero6-container'
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            width: '100%',
          }}
          className='hero6-header'
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
            className='hero6-title'
          >
            Satış Ofisleri
          </h2>
        </div>

        {/* Mobile Select Input */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            display: 'none',
            margin: '0 auto',
          }}
          className='hero6-mobile-select'
        >
          <select
            value={selectedOffice?.id || ''}
            onChange={(e) => {
              const officeId = parseInt(e.target.value)
              const office = OFFICES.find((o) => o.id === officeId)
              setSelectedOffice(office)
            }}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              fontFamily: 'Montserrat, sans-serif',
              border: '2px solid #ddd',
              borderRadius: '8px',
              background: '#fff',
              color: '#333',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value=''>Ofis Seçiniz</option>
            {OFFICES.map((office) => (
              <option key={office.id} value={office.id}>
                {office.title}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop - Horizontal Office Cards */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '2rem',
            alignItems: 'stretch',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          className='hero6-desktop-cards'
        >
          {OFFICES.map((office) => (
            <div
              key={office.id}
              style={{
                flex: '1',
                minWidth: '350px',
                maxWidth: '400px',
                background: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              className='hero6-office-card'
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
              }}
            >
              {/* Office Title */}
              <h3
                style={{
                  color: '#333',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: 1.3,
                }}
              >
                {office.title}
              </h3>

              {/* Address */}
              <p
                style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: 1.5,
                }}
              >
                {office.address}
              </p>

              {/* Working Days */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <strong
                    style={{
                      color: '#333',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Çalışma Günleri:
                  </strong>
                  <span
                    style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {office.workingDays}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <strong
                    style={{
                      color: '#333',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Çalışma Saatleri:
                  </strong>
                  <span
                    style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {office.workingHours}
                  </span>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${office.email}`}
                style={{
                  color: '#4A90E2',
                  fontSize: '0.95rem',
                  fontFamily: 'Montserrat, sans-serif',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#357ABD')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A90E2')}
              >
                {office.email}
              </a>

              {/* CTA Button */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  background: 'transparent',
                  color: '#333',
                  border: '2px solid #333',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginTop: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#333'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#333'
                }}
              >
                <span style={{ fontSize: '1rem' }}>📍</span>
                Yol Tarifi Al
              </button>
            </div>
          ))}
        </div>

        {/* Mobile - Selected Office Card */}
        {selectedOffice && (
          <div
            style={{
              width: '100%',
              maxWidth: '400px',
              background: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              display: 'none',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'fadeInUp 0.5s ease-out',
              margin: '0 auto',
              marginBottom: '2rem',
            }}
            className='hero6-mobile-card'
          >
            {/* Office Title */}
            <h3
              style={{
                color: '#333',
                fontSize: '1.2rem',
                fontWeight: '600',
                margin: 0,
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: 1.3,
              }}
            >
              {selectedOffice.title}
            </h3>

            {/* Address */}
            <p
              style={{
                color: '#666',
                fontSize: '0.9rem',
                margin: 0,
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: 1.5,
              }}
            >
              {selectedOffice.address}
            </p>

            {/* Working Info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
              >
                <strong
                  style={{
                    color: '#333',
                    fontSize: '0.85rem',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Çalışma Günleri:
                </strong>
                <span
                  style={{
                    color: '#666',
                    fontSize: '0.85rem',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {selectedOffice.workingDays}
                </span>
              </div>

              <div
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
              >
                <strong
                  style={{
                    color: '#333',
                    fontSize: '0.85rem',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Çalışma Saatleri:
                </strong>
                <span
                  style={{
                    color: '#666',
                    fontSize: '0.85rem',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {selectedOffice.workingHours}
                </span>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${selectedOffice.email}`}
              style={{
                color: '#4A90E2',
                fontSize: '0.9rem',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
              }}
            >
              {selectedOffice.email}
            </a>

            {/* CTA Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 1.5rem',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#555')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#333')}
            >
              <span style={{ fontSize: '1rem' }}>📍</span>
              Yol Tarifi Al
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero6
