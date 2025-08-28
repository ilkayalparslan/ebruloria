import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100vw',
        background: '#2a2a2a',
        color: '#fff',
        padding: '60px 48px 40px 48px',
        boxSizing: 'border-box',
      }}
      className='footer-section'
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
        className='footer-container'
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
          className='footer-main'
        >
          {/* Left Side - Logo and Social */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              flex: '1',
              minWidth: '300px',
            }}
            className='footer-left'
          >
            {/* Logo */}
            <h2
              style={{
                color: '#fff',
                fontSize: '3rem',
                fontWeight: '300',
                margin: 0,
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '2px',
                textAlign: 'center',
              }}
            >
              ebruloria
            </h2>

            {/* Social Media Icons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              className='footer-social'
            >
              {/* Twitter/X */}
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

              {/* Facebook */}
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

              {/* YouTube */}
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
                ▶
              </a>

              {/* LinkedIn */}
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
                in
              </a>

              {/* Instagram */}
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

          {/* Right Side - Navigation Links */}
          <div
            style={{
              display: 'flex',
              gap: '4rem',
              flex: '2',
              justifyContent: 'space-around',
              minWidth: '400px',
              flexWrap: 'wrap',
            }}
            className='footer-nav'
          >
            {/* Biz Kimiz */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                Biz Kimiz
              </h4>
            </div>

            {/* EbruLoria Keşifleri */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                EbruLoria Keşifleri
              </h4>
            </div>

            {/* Projeler */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                Projeler
              </h4>
            </div>

            {/* EbruLoria Vakfı */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                EbruLoria Vakfı
              </h4>
            </div>

            {/* EbruLoria Olmak */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                EbruLoria Olmak
              </h4>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
          }}
          className='footer-contact'
        >
          <a
            href='tel:+905444669633'
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'all 0.2s ease',
              marginBottom: '2rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fff'
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            📞 444 9 633
          </a>

          {/* Email Addresses */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
            className='footer-emails'
          >
            <a
              href='mailto:info@ebruloria.com.tr'
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
              }
            >
              info@ebruloria.com.tr
            </a>
            <a
              href='mailto:talep@ebruloria.com.tr'
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
              }
            >
              talep@ebruloria.com.tr
            </a>
            <a
              href='mailto:musteri.iliskileri@ebruloria.com.tr'
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')
              }
            >
              musteri.iliskileri@ebruloria.com.tr
            </a>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
          className='footer-bottom'
        >
          {/* Legal Links */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
            className='footer-legal'
          >
            <a
              href='#'
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')
              }
            >
              Gizlilik Politikası ve Kişisel Verilerin Korunması
            </a>
            <a
              href='#'
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')
              }
            >
              Kişisel Verilerin İşlenmesi
            </a>
            <a
              href='#'
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')
              }
            >
              Ticari İletişim İzni
            </a>
            <a
              href='#'
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')
              }
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>

          {/* Copyright */}
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Copyright © 2025 EbruLoria Real Estate
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
