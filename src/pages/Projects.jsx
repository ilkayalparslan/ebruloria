import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    id: 1,
    title: 'ebruloria 22',
    slug: 'ebruloria-22',
    location: 'Ataşehir',
    description: 'Modern yaşamın kalbi',
    image: 'ebruloria 22',
  },
  {
    id: 2,
    title: 'ebruloria 03',
    slug: 'ebruloria-03',
    location: 'Vadistanbul',
    description: 'Şehrin yeni merkezi',
    image: 'ebruloria 03',
  },
  {
    id: 3,
    title: 'ebruloria 09',
    slug: 'ebruloria-09',
    location: 'Çekmeköy',
    description: 'Doğal yaşam alanı',
    image: 'ebruloria 09',
  },
  {
    id: 4,
    title: 'ebruloria 10',
    slug: 'ebruloria-10',
    location: 'Zekeriyaköy',
    description: 'Prestijli konut projesi',
    image: 'ebruloria 10',
  },
  {
    id: 5,
    title: 'ebruloria 06',
    slug: 'ebruloria-06',
    location: 'Kağıthane',
    description: 'Merkezi konum avantajı',
    image: 'ebruloria 06',
  },
  {
    id: 6,
    title: 'ebruloria 08',
    slug: 'ebruloria-08',
    location: 'Beyoğlu',
    description: 'Tarihi dokunuş',
    image: 'ebruloria 08',
  },
  {
    id: 7,
    title: 'ebruloria 11',
    slug: 'ebruloria-11',
    location: 'Pendik',
    description: 'Marina manzarası',
    image: 'ebruloria 11',
  },
  {
    id: 8,
    title: 'ebruloria 12',
    slug: 'ebruloria-12',
    location: 'Maltepe',
    description: 'Deniz kenarı yaşam',
    image: 'ebruloria 12',
  },
  {
    id: 9,
    title: 'ebruloria 13',
    slug: 'ebruloria-13',
    location: 'Ümraniye',
    description: 'Yüksek kule kompleksi',
    image: 'ebruloria 13',
  },
  {
    id: 10,
    title: 'ebruloria 39',
    slug: 'ebruloria-39',
    location: 'Beşiktaş',
    description: 'Şehir merkezinde lüks',
    image: 'ebruloria 39',
  },
]

const Projects = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)
  const [showContactForm, setShowContactForm] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredProjects(PROJECTS)
    } else {
      const filtered = PROJECTS.filter(
        (project) =>
          project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          project.location.toLowerCase().includes(searchValue.toLowerCase()) ||
          project.description.toLowerCase().includes(searchValue.toLowerCase())
      )
      setFilteredProjects(filtered)
    }
  }, [searchValue])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.')
    setShowContactForm(false)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {/* Mobile-First Header - Updated Layout */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 1000,
          padding: '15px 20px 20px 20px',
          boxSizing: 'border-box',
          background: 'rgba(0, 0, 0, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Top Row - Logo and Hamburger */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '15px',
          }}
        >
          {/* Logo */}
          <Link
            to='/'
            style={{
              color: '#fff',
              fontWeight: '300',
              fontSize: '1.5rem',
              letterSpacing: '1px',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
            }}
          >
            EbruLoria
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25px',
              height: '20px',
            }}
          >
            <div
              style={{
                width: '18px',
                height: '2px',
                background: '#fff',
                borderRadius: '1px',
              }}
            ></div>
            <div
              style={{
                width: '18px',
                height: '2px',
                background: '#fff',
                borderRadius: '1px',
              }}
            ></div>
            <div
              style={{
                width: '18px',
                height: '2px',
                background: '#fff',
                borderRadius: '1px',
              }}
            ></div>
          </button>
        </div>

        {/* Bottom Row - Search Bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              padding: '10px 15px',
              width: '100%',
              maxWidth: '300px',
              transition: 'border-color 0.2s ease',
            }}
            onFocus={() => {
              // Add focus styles if needed
            }}
          >
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                marginRight: '10px',
              }}
            >
              🔍
            </span>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Proje ara...'
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '0.9rem',
                width: '100%',
                fontFamily: 'Montserrat, sans-serif',
              }}
            />
            {searchValue && (
              <button
                onClick={() => setSearchValue('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: 0,
                  marginLeft: '8px',
                  minWidth: '20px',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Slide Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1999,
            }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80vw',
              maxWidth: '300px',
              height: '100vh',
              background: '#2a2a2a',
              color: '#fff',
              zIndex: 2000,
              transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              boxSizing: 'border-box',
              overflow: 'auto',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                alignSelf: 'flex-end',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginBottom: '2rem',
              }}
            >
              ✕
            </button>

            {/* Menu Items */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <Link
                to='/'
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                Ana Sayfa
              </Link>
              <Link
                to='/projects'
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                Projeler
              </Link>
              <Link
                to='/about'
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                Hakkımızda
              </Link>
              <Link
                to='/contact'
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                İletişim
              </Link>
            </nav>
          </div>
        </>
      )}

      {/* Main Content - Adjusted padding for new header height */}
      <main
        style={{
          paddingTop: '100px', // Increased to accommodate taller header
          width: '100vw',
          background: '#f8f8f8',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Page Title Section */}
        <section
          style={{
            padding: '40px 20px 30px 20px',
            textAlign: 'center',
            background: '#fff',
          }}
        >
          <h1
            style={{
              color: '#333',
              fontSize: '2.2rem',
              fontWeight: '300',
              margin: '0 0 1rem 0',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-1px',
              lineHeight: 1.2,
            }}
          >
            Projelerimiz
          </h1>
          <p
            style={{
              color: '#666',
              fontSize: '1rem',
              maxWidth: '300px',
              margin: '0 auto',
              lineHeight: 1.5,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {searchValue
              ? `"${searchValue}" için ${filteredProjects.length} sonuç`
              : 'Kaliteli yaşam alanlarımızı keşfedin'}
          </p>
        </section>

        {/* Mobile Projects Grid */}
        <section style={{ padding: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.98)'
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      height: '200px',
                      background: `linear-gradient(135deg, 
                        ${
                          index % 6 === 0
                            ? '#667eea 0%, #764ba2 100%'
                            : index % 6 === 1
                            ? '#f093fb 0%, #f5576c 100%'
                            : index % 6 === 2
                            ? '#4facfe 0%, #00f2fe 100%'
                            : index % 6 === 3
                            ? '#43e97b 0%, #38f9d7 100%'
                            : index % 6 === 4
                            ? '#fa709a 0%, #fee140 100%'
                            : '#a8edea 0%, #fed6e3 100%'
                        })`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        color: '#fff',
                        fontSize: '1.5rem',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '300',
                        textAlign: 'center',
                      }}
                    >
                      {project.image}
                    </span>

                    {/* Project Title Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '15px',
                        right: '15px',
                      }}
                    >
                      <h3
                        style={{
                          color: '#fff',
                          fontSize: '1.3rem',
                          fontWeight: '600',
                          margin: 0,
                          fontFamily: 'Montserrat, sans-serif',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '0.9rem',
                          margin: '5px 0 0 0',
                          fontFamily: 'Montserrat, sans-serif',
                          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                        }}
                      >
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div style={{ padding: '20px' }}>
                    <p
                      style={{
                        color: '#666',
                        fontSize: '0.95rem',
                        lineHeight: 1.4,
                        margin: '0 0 15px 0',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* View Details Button */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          color: '#333',
                          fontSize: '0.9rem',
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        Detayları Gör
                      </span>
                      <span
                        style={{
                          color: '#333',
                          fontSize: '1.2rem',
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <section
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#666',
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                margin: '0 0 10px 0',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Proje bulunamadı
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Farklı arama terimleri deneyebilirsiniz
            </p>
          </section>
        )}

        {/* Call to Action Section */}
        <section
          style={{
            background: '#fff',
            padding: '40px 20px',
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          <h2
            style={{
              color: '#333',
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 15px 0',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Sizi Arayalım
          </h2>
          <p
            style={{
              color: '#666',
              fontSize: '0.9rem',
              maxWidth: '300px',
              margin: '0 auto 25px auto',
              lineHeight: 1.5,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Projelerimiz hakkında detaylı bilgi almak için bizimle iletişime
            geçin.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            style={{
              padding: '12px 30px',
              background: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'translateY(1px)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            📞 İletişim Formu
          </button>
        </section>
      </main>

      {/* Contact Form Modal - Mobile Optimized */}
      {showContactForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
          }}
          onClick={() => setShowContactForm(false)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '15px',
              width: '100%',
              maxWidth: '400px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 20px 15px 20px',
                borderBottom: '1px solid #f0f0f0',
                position: 'relative',
              }}
            >
              <h3
                style={{
                  color: '#333',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  margin: 0,
                  fontFamily: 'Montserrat, sans-serif',
                  textAlign: 'center',
                }}
              >
                İletişim Formu
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'transparent',
                  border: 'none',
                  color: '#999',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleFormSubmit} style={{ padding: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                {/* Name Field */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: '#333',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      marginBottom: '8px',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Ad Soyad *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Adınızı ve soyadınızı giriniz'
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: '#333',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      marginBottom: '8px',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Telefon Numarası *
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    placeholder='0555 123 45 67'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: '#333',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      marginBottom: '8px',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    E-posta Adresi *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    placeholder='ornek@email.com'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: '#333',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      marginBottom: '8px',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Mesajınız
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows='3'
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontFamily: 'Montserrat, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'vertical',
                      minHeight: '80px',
                      boxSizing: 'border-box',
                    }}
                    placeholder='İlgilendiğiniz projeler hakkında mesajınız...'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  📤 Gönder
                </button>
              </div>
            </form>

            {/* Privacy Notice */}
            <div
              style={{
                padding: '15px 20px 20px 20px',
                borderTop: '1px solid #f0f0f0',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  color: '#666',
                  fontSize: '0.7rem',
                  margin: 0,
                  lineHeight: 1.3,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Formu göndererek Kişisel Verilerin Korunması politikamızı kabul
                etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
