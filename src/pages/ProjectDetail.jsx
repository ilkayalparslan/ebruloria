import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

// Extended project data with full details
const PROJECTS_DATA = {
  'ebruloria-22': {
    id: 1,
    slug: 'ebruloria-22',
    title: 'EbruLoria 22',
    location: 'Ataşehir, İstanbul',
    status: 'Tamamlandı',
    type: 'Konut',
    units: '120 Konut',
    floors: '22 Kat',
    startDate: '2020',
    completionDate: '2023',
    description:
      "Modern yaşamın kalbi olan EbruLoria 22, Ataşehir'in prestijli lokasyonunda yer alan lüks konut projesidir.",
    longDescription: `EbruLoria 22, İstanbul'un en değerli bölgelerinden Ataşehir'de konumlanan, modern mimarisi ve üstün yaşam kalitesiyle öne çıkan prestijli bir konut projesidir. 
    
    22 katlı bu muhteşem yapı, 120 konuyla ailelere geniş ve konforlu yaşam alanları sunmaktadır. Proje, hem şehir merkezine yakınlığı hem de çevresindeki yeşil alanlarla doğal yaşam imkanı sağlaması açısından eşsiz bir konuma sahiptir.`,

    features: [
      'Smart Home Sistemi',
      'Kapalı Otopark',
      'Fitness Center',
      '7/24 Güvenlik',
      'Landscaped Gardens',
      'Swimming Pool',
      'Children Playground',
      'Concierge Service',
    ],

    images: [
      'Project Image 1',
      'Project Image 2',
      'Project Image 3',
      'Project Image 4',
    ],

    floorPlans: [
      { type: '1+1', area: '75m²', count: 30 },
      { type: '2+1', area: '110m²', count: 45 },
      { type: '3+1', area: '145m²', count: 35 },
      { type: '4+1', area: '180m²', count: 10 },
    ],

    nearby: [
      { name: 'Ataşehir Metro', distance: '500m', type: 'transportation' },
      { name: 'Palladium AVM', distance: '1.2km', type: 'shopping' },
      { name: 'Acıbadem Hastanesi', distance: '2km', type: 'hospital' },
      { name: 'Ataşehir Belediyesi', distance: '800m', type: 'government' },
    ],

    contact: {
      phone: '+90 216 123 45 67',
      email: 'atasehir@ebruloria.com.tr',
      address: 'Ataşehir Bulvarı No:123 Ataşehir/İstanbul',
    },
  },

  'ebruloria-03': {
    id: 2,
    slug: 'ebruloria-03',
    title: 'EbruLoria 03',
    location: 'Vadistanbul, İstanbul',
    status: 'Devam Ediyor',
    type: 'Karma',
    units: '200 Ünite',
    floors: '25 Kat',
    startDate: '2023',
    completionDate: '2025',
    description:
      "Şehrin yeni merkezi Vadistanbul'da yükselen modern yaşam projesi.",
    longDescription: `EbruLoria 03, İstanbul'un geleceğinin şekillendiği Vadistanbul bölgesinde inşa edilen karma kullanımlı prestijli bir projedir. 
    
    25 katlı bu muhteşem kompleks, konut ve ticari alanları bir araya getirerek sakinlerine tam entegre bir yaşam deneyimi sunmaktadır.`,

    features: [
      'Karma Kullanım',
      'Ticari Alanlar',
      'Ofis Katları',
      'Residence',
      'SPA & Wellness',
      'Çatı Terası',
      'Valet Parking',
      'Business Center',
    ],

    images: ['Project Image 1', 'Project Image 2', 'Project Image 3'],

    floorPlans: [
      { type: 'Studio', area: '45m²', count: 40 },
      { type: '1+1', area: '65m²', count: 60 },
      { type: '2+1', area: '95m²', count: 70 },
      { type: '3+1', area: '125m²', count: 30 },
    ],

    nearby: [
      { name: 'Vadistanbul AVM', distance: '200m', type: 'shopping' },
      { name: 'Metro İstasyonu', distance: '300m', type: 'transportation' },
      { name: 'Business District', distance: '500m', type: 'business' },
    ],

    contact: {
      phone: '+90 212 987 65 43',
      email: 'vadistanbul@ebruloria.com.tr',
      address: 'Vadistanbul Bulvarı No:456 Sarıyer/İstanbul',
    },
  },

  // Add more projects as needed...
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    const projectData = PROJECTS_DATA[slug]
    if (projectData) {
      setProject(projectData)
    } else {
      // Redirect to projects page if project not found
      navigate('/projects')
    }
  }, [slug, navigate])

  if (!project) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          color: '#666',
        }}
      >
        Proje yükleniyor...
      </div>
    )
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingTop: '120px' }}>
      {/* Hero Section */}
      <section
        style={{
          width: '100vw',
          height: '60vh',
          background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: '#fff',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            zIndex: 2,
            maxWidth: '800px',
            padding: '0 2rem',
          }}
        >
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              margin: '0 0 1rem 0',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              margin: '0 0 2rem 0',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            📍 {project.location}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
              }}
            >
              {project.status}
            </span>
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
              }}
            >
              {project.units}
            </span>
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
              }}
            >
              {project.floors}
            </span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section style={{ padding: '80px 2rem', background: '#fff' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '4rem',
          }}
        >
          {/* Left Column - Main Content */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            {/* Description */}
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Proje Hakkında
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#666',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {project.longDescription}
              </p>
            </div>

            {/* Image Gallery */}
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Proje Görselleri
              </h2>

              {/* Main Image */}
              <div
                style={{
                  height: '400px',
                  background:
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: '#fff',
                  fontSize: '2rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {project.images[activeImage]}
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    style={{
                      width: '100px',
                      height: '80px',
                      background:
                        activeImage === index
                          ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                          : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: activeImage === index ? '#fff' : '#666',
                      fontSize: '0.8rem',
                      border:
                        activeImage === index
                          ? '2px solid #333'
                          : '2px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {image}
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Kat Planları
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                {project.floorPlans.map((plan, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#f8f8f8',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: '#333',
                      }}
                    >
                      {plan.type}
                    </h4>
                    <p
                      style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        margin: '0.5rem 0',
                      }}
                    >
                      {plan.area}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#999', margin: 0 }}>
                      {plan.count} adet
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Quick Info */}
            <div
              style={{
                background: '#f8f8f8',
                padding: '2rem',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Proje Bilgileri
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span style={{ color: '#666' }}>Durum:</span>
                  <strong
                    style={{
                      color:
                        project.status === 'Tamamlandı' ? '#4CAF50' : '#FF9800',
                    }}
                  >
                    {project.status}
                  </strong>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span style={{ color: '#666' }}>Tür:</span>
                  <strong>{project.type}</strong>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span style={{ color: '#666' }}>Başlangıç:</span>
                  <strong>{project.startDate}</strong>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span style={{ color: '#666' }}>Tamamlanma:</span>
                  <strong>{project.completionDate}</strong>
                </div>
              </div>
            </div>

            {/* Features */}
            <div
              style={{
                background: '#f8f8f8',
                padding: '2rem',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Özellikler
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    style={{
                      background: '#333',
                      color: '#fff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Places */}
            <div
              style={{
                background: '#f8f8f8',
                padding: '2rem',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Çevredeki Mekanlar
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                {project.nearby.map((place, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: '#333', fontSize: '0.9rem' }}>
                      {place.name}
                    </span>
                    <span
                      style={{
                        color: '#666',
                        fontSize: '0.8rem',
                        background: '#e0e0e0',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                      }}
                    >
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div
              style={{
                background: '#333',
                color: '#fff',
                padding: '2rem',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                İletişim
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <a
                  href={`tel:${project.contact.phone}`}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  📞 {project.contact.phone}
                </a>
                <a
                  href={`mailto:${project.contact.email}`}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  ✉️ {project.contact.email}
                </a>

                <button
                  onClick={() => setShowContactForm(true)}
                  style={{
                    background: '#fff',
                    color: '#333',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'translateY(-2px)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'translateY(0)')
                  }
                >
                  📝 Bilgi Talep Et
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section
        style={{ padding: '2rem', textAlign: 'center', background: '#f8f8f8' }}
      >
        <Link
          to='/projects'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#333',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontFamily: 'Montserrat, sans-serif',
            padding: '1rem 2rem',
            border: '2px solid #333',
            borderRadius: '25px',
            transition: 'all 0.2s ease',
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
          ← Tüm Projeler
        </Link>
      </section>
    </div>
  )
}

export default ProjectDetail
