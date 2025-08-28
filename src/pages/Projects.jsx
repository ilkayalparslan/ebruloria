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
      {/* Fixed Header Layout */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 1000,
          padding: window.innerWidth > 768 ? '20px 32px' : '15px 20px',
          boxSizing: 'border-box',
          background: 'rgba(0, 0, 0, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {window.innerWidth > 768 ? (
          // Desktop Header - Simple layout
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Logo Only */}
            <Link
              to='/'
              style={{
                color: '#fff',
                fontWeight: '300',
                fontSize: '1.8rem',
                letterSpacing: '2px',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
              }}
            >
              EbruLoria
            </Link>

            {/* Desktop Search Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '25px',
                padding: '0.5rem 1rem',
                minWidth: '400px',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  marginRight: '0.5rem',
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
                    fontSize: '1rem',
                    padding: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </nav>
        ) : (
          // Mobile Header - Fixed Layout
          <div style={{ width: '100%' }}>
            {/* Single Row - Logo, Search, and Hamburger */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                gap: '15px',
              }}
            >
              {/* Logo */}
              <Link
                to='/'
                style={{
                  color: '#fff',
                  fontWeight: '300',
                  fontSize: '1.4rem',
                  letterSpacing: '1px',
                  fontFamily: 'Montserrat, sans-serif',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                EbruLoria
              </Link>

              {/* Mobile Search Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '8px 12px',
                  flex: 1,
                  maxWidth: '200px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem',
                    marginRight: '8px',
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
                    fontSize: '0.8rem',
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
                      fontSize: '0.8rem',
                      padding: 0,
                      marginLeft: '5px',
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Hamburger Menu */}
              <button
                onClick={() => setMenuOpen(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '25px',
                  height: '20px',
                  flexShrink: 0,
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
          </div>
        )}
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

            {/* Menu Items - Only relevant links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
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
                to='/discoveries'
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
                EbruLoria Keşifleri
              </Link>
              <Link
                to='/housing'
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
                EbruLoria Konut
              </Link>
              <Link
                to='/news'
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
                Haberler
              </Link>
              <Link
                to='/offices'
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
                Satış Ofisleri
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

      {/* Main Content - Adjusted padding */}
      <main
        style={{
          paddingTop: '80px',
          width: '100vw',
          background: '#f8f8f8',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Page Title Section */}
        <section
          style={{
            padding:
              window.innerWidth > 768
                ? '60px 48px 40px 48px'
                : '40px 20px 30px 20px',
            textAlign: 'center',
            background: '#fff',
          }}
        >
          <h1
            style={{
              color: '#333',
              fontSize: window.innerWidth > 768 ? '3rem' : '2.2rem',
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
              fontSize: window.innerWidth > 768 ? '1.2rem' : '1rem',
              maxWidth: window.innerWidth > 768 ? '600px' : '300px',
              margin: '0 auto',
              lineHeight: 1.5,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {searchValue
              ? `"${searchValue}" için ${filteredProjects.length} sonuç`
              : window.innerWidth > 768
              ? "Türkiye'nin dört bir yanında hayata geçirdiğimiz kaliteli yaşam alanları"
              : 'Kaliteli yaşam alanlarımızı keşfedin'}
          </p>
        </section>

        {/* Projects Grid - Responsive */}
        <section
          style={{ padding: window.innerWidth > 768 ? '40px 48px' : '20px' }}
        >
          <div
            style={{
              width: window.innerWidth > 768 ? '90vw' : '100%',
              maxWidth: window.innerWidth > 768 ? 'none' : '400px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: window.innerWidth > 768 ? 'row' : 'column',
              flexWrap: window.innerWidth > 768 ? 'wrap' : 'nowrap',
              justifyContent:
                window.innerWidth > 768 ? 'space-between' : 'center',
              gap: window.innerWidth > 768 ? '2rem' : '20px',
            }}
            className='projects-grid'
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
                    height: window.innerWidth > 768 ? '400px' : 'auto',
                    width: window.innerWidth > 768 ? '30vw' : '90vw',
                    maxWidth: window.innerWidth > 768 ? '400px' : 'none',
                    minWidth: window.innerWidth > 768 ? '280px' : 'auto',
                    position: 'relative',
                    margin: window.innerWidth <= 768 ? '0 auto' : '0',
                  }}
                  className='project-card'
                  onMouseEnter={(e) => {
                    if (window.innerWidth > 768) {
                      e.currentTarget.style.transform =
                        'translateY(-10px) scale(1.02)'
                      e.currentTarget.style.boxShadow =
                        '0 20px 40px rgba(0,0,0,0.2)'
                      e.currentTarget.style.zIndex = '10'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.innerWidth > 768) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow =
                        '0 4px 15px rgba(0,0,0,0.1)'
                      e.currentTarget.style.zIndex = '1'
                    }
                  }}
                  onTouchStart={(e) => {
                    if (window.innerWidth <= 768) {
                      e.currentTarget.style.transform = 'scale(0.98)'
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (window.innerWidth <= 768) {
                      e.currentTarget.style.transform = 'scale(1)'
                    }
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      height: window.innerWidth > 768 ? '280px' : '200px',
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
                        fontSize: window.innerWidth > 768 ? '2rem' : '1.5rem',
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
                          fontSize:
                            window.innerWidth > 768 ? '1.8rem' : '1.3rem',
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
                          fontSize: window.innerWidth > 768 ? '1rem' : '0.9rem',
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
                  <div
                    style={{
                      padding: window.innerWidth > 768 ? '1.5rem' : '20px',
                    }}
                  >
                    <p
                      style={{
                        color: '#666',
                        fontSize: '0.95rem',
                        lineHeight: 1.4,
                        margin: window.innerWidth > 768 ? 0 : '0 0 15px 0',
                        fontFamily: 'Montserrat, sans-serif',
                        textAlign: window.innerWidth > 768 ? 'center' : 'left',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Mobile View Details Button */}
                    {window.innerWidth <= 768 && (
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
                    )}
                  </div>

                  {/* Desktop Hover Overlay */}
                  {window.innerWidth > 768 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        borderRadius: '15px',
                      }}
                      className='project-overlay'
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    >
                      <div
                        style={{
                          textAlign: 'center',
                          color: '#fff',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '2rem',
                            fontWeight: '600',
                            margin: '0 0 1rem 0',
                            fontFamily: 'Montserrat, sans-serif',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '1.2rem',
                            margin: '0 0 1rem 0',
                            fontFamily: 'Montserrat, sans-serif',
                            opacity: 0.9,
                          }}
                        >
                          {project.location}
                        </p>
                        <p
                          style={{
                            fontSize: '1rem',
                            margin: '0 0 2rem 0',
                            fontFamily: 'Montserrat, sans-serif',
                            opacity: 0.8,
                          }}
                        >
                          {project.description}
                        </p>
                        <button
                          style={{
                            padding: '0.8rem 2rem',
                            background: 'transparent',
                            color: '#fff',
                            border: '2px solid #fff',
                            borderRadius: '25px',
                            fontSize: '1rem',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fff'
                            e.currentTarget.style.color = '#333'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#fff'
                          }}
                        >
                          Detayları Gör
                        </button>
                      </div>
                    </div>
                  )}
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
