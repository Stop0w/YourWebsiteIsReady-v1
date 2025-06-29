import { useParams } from "wouter";

export default function GolfCourseTemplate() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  // Sample golf course data to ensure rendering
  const businessData = {
    name: "Cumnock Golf Club",
    tagline: "Where Golf Excellence Meets Natural Beauty",
    location: "Cumnock, NSW",
    description: "Experience championship golf at its finest with our pristine 18-hole course set against stunning natural landscapes.",
    contact: {
      phone: "(02) 6367 8200",
      email: "info@cumnockgolfclub.com.au",
      address: "Golf Course Road, Cumnock NSW 2867"
    }
  };

  const templateNumber = parseInt(params.templateNumber || '1');
  
  // Color schemes for different templates
  const colors = {
    1: { primary: '#059669', secondary: '#ecfdf5', accent: '#10b981' },
    2: { primary: '#1e40af', secondary: '#eff6ff', accent: '#3b82f6' },
    3: { primary: '#7c2d12', secondary: '#fef7ed', accent: '#ea580c' },
    4: { primary: '#581c87', secondary: '#faf5ff', accent: '#a855f7' }
  };
  
  const theme = colors[templateNumber as keyof typeof colors] || colors[1];

  return (
    <html>
      <head>
        <title>{businessData.name} - Golf Course Template {templateNumber}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          .grid { display: grid; gap: 2rem; }
          .grid-3 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
          .grid-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
          .card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .btn { background: ${theme.primary}; color: white; padding: 12px 24px; border: none; border-radius: 6px; text-decoration: none; display: inline-block; font-weight: 500; }
          .text-center { text-align: center; }
          .mb-1 { margin-bottom: 1rem; }
          .mb-2 { margin-bottom: 2rem; }
          .mb-3 { margin-bottom: 3rem; }
          .section { padding: 4rem 0; }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#f8fafc' }}>
        
        {/* Header */}
        <header style={{ 
          backgroundColor: theme.primary, 
          color: 'white', 
          padding: '4rem 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              {businessData.name}
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem', opacity: 0.9 }}>
              {businessData.tagline}
            </p>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              📍 {businessData.location}
            </p>
          </div>
        </header>

        {/* Navigation */}
        <nav style={{ 
          backgroundColor: 'white', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '0',
          zIndex: 100
        }}>
          <div className="container" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            padding: '1rem 0'
          }}>
            {['About', 'Course', 'Facilities', 'Contact'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  textDecoration: 'none', 
                  color: '#374151', 
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {/* About Section */}
          <section className="section" id="about">
            <div className="container">
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '2rem', 
                color: '#1f2937',
                textAlign: 'center'
              }}>
                Welcome to {businessData.name}
              </h2>
              <div className="card" style={{ border: `3px solid ${theme.secondary}` }}>
                <p style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: '1.8', 
                  color: '#4b5563',
                  textAlign: 'center',
                  margin: '0'
                }}>
                  {businessData.description}
                </p>
              </div>
            </div>
          </section>

          {/* Course Stats */}
          <section className="section" id="course" style={{ backgroundColor: theme.secondary }}>
            <div className="container">
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '3rem', 
                color: '#1f2937',
                textAlign: 'center'
              }}>
                Course Information
              </h2>
              <div className="grid grid-3">
                {[
                  { icon: '⛳', number: '18', label: 'Championship Holes', desc: 'Full regulation course' },
                  { icon: '🏆', number: '72', label: 'Par Rating', desc: 'Tournament standard' },
                  { icon: '📏', number: '6,800', label: 'Total Yards', desc: 'Championship distance' }
                ].map((stat, index) => (
                  <div key={index} className="card text-center">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {stat.icon}
                    </div>
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: 'bold', 
                      color: theme.primary,
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: '#1f2937'
                    }}>
                      {stat.label}
                    </h3>
                    <p style={{ color: '#6b7280', margin: '0' }}>
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Facilities */}
          <section className="section" id="facilities">
            <div className="container">
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '3rem', 
                color: '#1f2937',
                textAlign: 'center'
              }}>
                World-Class Facilities
              </h2>
              <div className="grid grid-2">
                <div className="card">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                    🏌️
                  </div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1.5rem',
                    color: theme.primary,
                    textAlign: 'center'
                  }}>
                    Golf Facilities
                  </h3>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {[
                      'Professional driving range',
                      'Practice putting greens',
                      'Short game practice area',
                      'Golf cart rentals',
                      'Club fitting services'
                    ].map((item, index) => (
                      <li key={index} style={{ 
                        padding: '1rem 0', 
                        borderBottom: index < 4 ? '1px solid #f3f4f6' : 'none',
                        color: '#4b5563',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{ color: theme.accent, marginRight: '1rem' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                    🏛️
                  </div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1.5rem',
                    color: theme.primary,
                    textAlign: 'center'
                  }}>
                    Clubhouse Amenities
                  </h3>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {[
                      'Fine dining restaurant',
                      'Members bar and lounge',
                      'Fully stocked pro shop',
                      'Event facilities',
                      'Premium locker rooms'
                    ].map((item, index) => (
                      <li key={index} style={{ 
                        padding: '1rem 0', 
                        borderBottom: index < 4 ? '1px solid #f3f4f6' : 'none',
                        color: '#4b5563',
                        fontSize: '1.1rem'
                      }}>
                        <span style={{ color: theme.accent, marginRight: '1rem' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="section" id="contact" style={{ backgroundColor: theme.secondary }}>
            <div className="container">
              <div className="card" style={{ border: `3px solid ${theme.primary}` }}>
                <h2 style={{ 
                  fontSize: '3rem', 
                  marginBottom: '3rem', 
                  color: theme.primary,
                  textAlign: 'center'
                }}>
                  Visit Us Today
                </h2>
                <div className="grid grid-2">
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1.5rem',
                      color: theme.primary
                    }}>
                      📍 Contact Information
                    </h3>
                    <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Address:</strong> {businessData.contact.address}
                      </p>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Phone:</strong> {businessData.contact.phone}
                      </p>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Email:</strong> {businessData.contact.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1.5rem',
                      color: theme.primary
                    }}>
                      🕒 Opening Hours
                    </h3>
                    <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Monday - Friday:</strong> 6:00 AM - 7:00 PM
                      </p>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Saturday - Sunday:</strong> 5:30 AM - 8:00 PM
                      </p>
                      <p style={{ margin: '1rem 0' }}>
                        <strong>Public Holidays:</strong> 6:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Template Navigation */}
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          border: `2px solid ${theme.secondary}`,
          fontSize: '14px',
          zIndex: 1000,
          minWidth: '200px'
        }}>
          <div style={{ 
            marginBottom: '1rem', 
            color: '#6b7280', 
            fontSize: '12px',
            textAlign: 'center'
          }}>
            Template {templateNumber}
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            {[1, 2, 3, 4].map(num => (
              <a
                key={num}
                href={`/${params.businessSlug}/website-${num}`}
                style={{
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  backgroundColor: num === templateNumber ? theme.primary : '#f8fafc',
                  color: num === templateNumber ? 'white' : '#64748b',
                  border: `2px solid ${num === templateNumber ? theme.primary : '#e2e8f0'}`
                }}
              >
                Template {num}
              </a>
            ))}
          </div>
          <a
            href={`/${params.businessSlug}`}
            style={{
              display: 'block',
              padding: '0.75rem',
              backgroundColor: '#f8fafc',
              color: '#64748b',
              textDecoration: 'none',
              fontSize: '11px',
              textAlign: 'center',
              borderRadius: '6px',
              border: '1px solid #e2e8f0'
            }}
          >
            ← Back to Templates
          </a>
        </div>

        {/* Footer */}
        <footer style={{ 
          backgroundColor: '#1f2937', 
          color: 'white', 
          padding: '3rem 1rem', 
          textAlign: 'center' 
        }}>
          <div className="container">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              {businessData.name}
            </h3>
            <p style={{ margin: '0', opacity: 0.8 }}>
              &copy; 2024 {businessData.name}. All rights reserved. | Template {templateNumber}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}