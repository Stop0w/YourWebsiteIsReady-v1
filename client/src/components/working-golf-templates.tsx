import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business, Template } from "@shared/schema";

export default function WorkingGolfTemplates() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading: businessLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  const { data: templates, isLoading: templatesLoading } = useQuery<Template[]>({
    queryKey: ['/api/templates'],
  });

  if (businessLoading || templatesLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading golf course...</h2>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Golf Course Not Found</h1>
          <p>The golf course you're looking for doesn't exist.</p>
          <a href="/" style={{ 
            backgroundColor: '#059669', 
            color: 'white', 
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none'
          }}>
            Return Home
          </a>
        </div>
      </div>
    );
  }

  const templateNumber = parseInt(params.templateNumber || '1');
  const template = templates?.find(t => t.templateNumber === templateNumber && t.category === business.category);

  // Color schemes for different templates
  const getTheme = (templateNum: number) => {
    switch (templateNum) {
      case 1:
        return { primary: '#059669', secondary: '#ecfdf5', accent: '#10b981', name: 'Classic Green' };
      case 2:
        return { primary: '#1e40af', secondary: '#eff6ff', accent: '#3b82f6', name: 'Ocean Blue' };
      case 3:
        return { primary: '#7c2d12', secondary: '#fef7ed', accent: '#ea580c', name: 'Autumn Gold' };
      case 4:
        return { primary: '#581c87', secondary: '#faf5ff', accent: '#a855f7', name: 'Royal Purple' };
      default:
        return { primary: '#059669', secondary: '#ecfdf5', accent: '#10b981', name: 'Classic Green' };
    }
  };

  const theme = getTheme(templateNumber);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: theme.primary, 
        color: 'white', 
        padding: '4rem 2rem', 
        textAlign: 'center',
        background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            margin: '0 0 1rem 0', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            {business.name}
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            margin: '0 0 0.5rem 0', 
            opacity: 0.9 
          }}>
            {business.tagline}
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            margin: '0', 
            opacity: 0.8 
          }}>
            📍 {business.location}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: '0',
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          padding: '1rem'
        }}>
          {['About', 'Course', 'Facilities', 'Contact'].map(item => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* About Section */}
        <section id="about" style={{ marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Welcome to {business.name.split(' ')[0]} Golf Club
          </h2>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '3rem', 
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            border: `3px solid ${theme.secondary}`
          }}>
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.8', 
              color: '#4b5563',
              textAlign: 'center',
              margin: '0'
            }}>
              {business.description}
            </p>
          </div>
        </section>

        {/* Course Stats */}
        <section id="course" style={{ 
          marginBottom: '5rem',
          backgroundColor: theme.secondary,
          padding: '4rem 3rem',
          borderRadius: '20px',
          margin: '0 -1rem 5rem -1rem'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Course Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { icon: '⛳', number: '18', label: 'Championship Holes', desc: 'Full regulation 18-hole course' },
              { icon: '🏆', number: '72', label: 'Par Rating', desc: 'Tournament standard par 72' },
              { icon: '📏', number: '6,800', label: 'Total Yards', desc: 'Championship distance layout' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '3rem 2rem', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  border: `2px solid ${theme.primary}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  backgroundColor: theme.secondary,
                  borderRadius: '50%',
                  opacity: 0.5
                }}></div>
                
                <div style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 'bold', 
                  color: theme.primary,
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {stat.number}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#1f2937',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {stat.label}
                </h3>
                <p style={{ 
                  color: '#6b7280',
                  margin: '0',
                  fontSize: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" style={{ marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: '#1f2937',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            World-Class Facilities
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
            gap: '3rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '3rem', 
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              border: `2px solid ${theme.secondary}`
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                🏌️
              </div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: theme.primary,
                textAlign: 'center'
              }}>
                Golf Facilities
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0' 
              }}>
                {[
                  'Professional driving range with covered bays',
                  'Multiple practice putting greens',
                  'Short game practice area with bunkers',
                  'Golf cart rentals and storage',
                  'Club fitting and repair services'
                ].map((item, index) => (
                  <li 
                    key={index}
                    style={{ 
                      padding: '1rem 0', 
                      borderBottom: index < 4 ? '1px solid #f3f4f6' : 'none',
                      color: '#4b5563',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ 
                      color: theme.accent, 
                      marginRight: '1rem',
                      fontSize: '1.3rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '3rem', 
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              border: `2px solid ${theme.secondary}`
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                🏛️
              </div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: theme.primary,
                textAlign: 'center'
              }}>
                Clubhouse Amenities
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0' 
              }}>
                {[
                  'Fine dining restaurant with terrace views',
                  'Members bar and lounge area',
                  'Fully stocked pro shop',
                  'Event and function facilities',
                  'Premium locker rooms and amenities'
                ].map((item, index) => (
                  <li 
                    key={index}
                    style={{ 
                      padding: '1rem 0', 
                      borderBottom: index < 4 ? '1px solid #f3f4f6' : 'none',
                      color: '#4b5563',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ 
                      color: theme.accent, 
                      marginRight: '1rem',
                      fontSize: '1.3rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ 
          backgroundColor: theme.secondary, 
          padding: '4rem 3rem', 
          borderRadius: '20px',
          marginBottom: '3rem',
          border: `3px solid ${theme.primary}`,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            fontSize: '5rem',
            opacity: 0.1,
            color: theme.primary
          }}>
            ⛳
          </div>
          
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1
          }}>
            Visit Us Today
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: theme.primary
              }}>
                📍 Contact Information
              </h3>
              <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.3rem' }}>🏠</span>
                  <span><strong>Address:</strong> {business.contact?.address || business.location}</span>
                </p>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.3rem' }}>📞</span>
                  <span><strong>Phone:</strong> {business.contact?.phone}</span>
                </p>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.3rem' }}>✉️</span>
                  <span><strong>Email:</strong> {business.contact?.email}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
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
        </section>
      </main>

      {/* Template Navigation */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        border: `2px solid ${theme.secondary}`,
        fontSize: '14px',
        zIndex: 1000,
        minWidth: '220px'
      }}>
        <div style={{ 
          marginBottom: '1rem', 
          color: '#6b7280', 
          fontSize: '13px',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          {template?.name || `Template ${templateNumber}`} ({theme.name})
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
                backgroundColor: num === templateNumber 
                  ? theme.primary 
                  : '#f8fafc',
                color: num === templateNumber 
                  ? 'white' 
                  : '#64748b',
                border: `2px solid ${num === templateNumber ? theme.primary : '#e2e8f0'}`,
                transition: 'all 0.2s'
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
            border: '1px solid #e2e8f0',
            transition: 'all 0.2s'
          }}
        >
          ← Back to Templates
        </a>
      </div>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '3rem 2rem', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            {business.name}
          </h3>
          <p style={{ 
            margin: '0', 
            opacity: 0.8,
            fontSize: '1rem'
          }}>
            &copy; 2024 {business.name}. All rights reserved. | {template?.name || `Template ${templateNumber}`}
          </p>
        </div>
      </footer>
    </div>
  );
}