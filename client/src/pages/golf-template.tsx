import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business, Template } from "@shared/schema";

export default function GolfTemplate() {
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
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '4px solid #e5e7eb', 
            borderTop: '4px solid #059669',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{ color: '#6b7280' }}>Loading golf course...</p>
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
          <h1 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '1rem' }}>
            Golf Course Not Found
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            The golf course you're looking for doesn't exist.
          </p>
          <a 
            href="/" 
            style={{ 
              backgroundColor: '#059669', 
              color: 'white', 
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  const templateNumber = parseInt(params.templateNumber || '1');
  const template = templates?.find(t => t.templateNumber === templateNumber && t.category === business.category);

  if (!template) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '1rem' }}>
            Template Not Found
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Template {templateNumber} is not available.
          </p>
          <a 
            href={`/${business.slug}`}
            style={{ 
              backgroundColor: '#059669', 
              color: 'white', 
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            View Other Templates
          </a>
        </div>
      </div>
    );
  }

  // Template styles based on template number
  const getTemplateStyles = (templateNum: number) => {
    switch (templateNum) {
      case 1:
        return {
          primary: '#059669',
          secondary: '#ecfdf5',
          accent: '#10b981',
          background: '#f8fafc'
        };
      case 2:
        return {
          primary: '#1e40af',
          secondary: '#eff6ff',
          accent: '#3b82f6',
          background: '#f1f5f9'
        };
      case 3:
        return {
          primary: '#7c2d12',
          secondary: '#fef7ed',
          accent: '#ea580c',
          background: '#fefcfb'
        };
      case 4:
        return {
          primary: '#581c87',
          secondary: '#faf5ff',
          accent: '#a855f7',
          background: '#fefffe'
        };
      default:
        return {
          primary: '#059669',
          secondary: '#ecfdf5',
          accent: '#10b981',
          background: '#f8fafc'
        };
    }
  };

  const styles = getTemplateStyles(templateNumber);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: styles.background }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: styles.primary, 
        color: 'white', 
        padding: '4rem 1rem', 
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            margin: '0 0 1rem 0', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          opacity: 0.5
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          opacity: 0.5
        }}></div>
      </header>

      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
          {['About', 'Course', 'Facilities', 'Membership', 'Contact'].map(item => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                textDecoration: 'none', 
                color: '#374151', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                transition: 'all 0.2s'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        {/* About Section */}
        <section id="about" style={{ marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Welcome to {business.name.split(' ')[0]} Golf Club
          </h2>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '3rem', 
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            border: `3px solid ${styles.secondary}`
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
        <section id="course" style={{ marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Course Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { icon: '⛳', number: '18', label: 'Championship Holes', desc: 'Professionally designed course layout' },
              { icon: '🏆', number: '72', label: 'Par Rating', desc: 'Tournament standard par 72' },
              { icon: '📏', number: '6,800', label: 'Total Yards', desc: 'Challenging yet enjoyable distance' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '3rem 2rem', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  border: `2px solid ${styles.secondary}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  backgroundColor: styles.secondary,
                  borderRadius: '50%',
                  opacity: 0.3
                }}></div>
                
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem' 
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 'bold', 
                  color: styles.primary,
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
                <p style={{ 
                  color: '#6b7280',
                  margin: '0',
                  fontSize: '1rem'
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
            textAlign: 'center'
          }}>
            World-Class Facilities
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '3rem', 
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              border: `2px solid ${styles.secondary}`
            }}>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                🏌️
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: styles.primary,
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
                      color: styles.accent, 
                      marginRight: '1rem',
                      fontSize: '1.2rem'
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
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              border: `2px solid ${styles.secondary}`
            }}>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                🏛️
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: styles.primary,
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
                  'Fine dining restaurant with terrace',
                  'Members bar and lounge',
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
                      color: styles.accent, 
                      marginRight: '1rem',
                      fontSize: '1.2rem'
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
          backgroundColor: styles.secondary, 
          padding: '4rem 3rem', 
          borderRadius: '20px',
          marginBottom: '3rem',
          border: `3px solid ${styles.primary}`,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            fontSize: '4rem',
            opacity: 0.1
          }}>
            ⛳
          </div>
          
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: styles.primary,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Visit Us Today
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem' 
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: styles.primary
              }}>
                📍 Contact Information
              </h3>
              <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>🏠</span>
                  <span><strong>Address:</strong> {business.contact?.address || business.location}</span>
                </p>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>📞</span>
                  <span><strong>Phone:</strong> {business.contact?.phone}</span>
                </p>
                <p style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>✉️</span>
                  <span><strong>Email:</strong> {business.contact?.email}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: styles.primary
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
        border: `2px solid ${styles.secondary}`,
        fontSize: '14px',
        zIndex: 1000,
        minWidth: '200px'
      }}>
        <div style={{ 
          marginBottom: '1rem', 
          color: '#6b7280', 
          fontSize: '12px',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          {template.name}
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {templates?.filter(t => t.category === 'golfclub').map(t => (
            <a
              key={t.id}
              href={`/${params.businessSlug}/website-${t.templateNumber}`}
              style={{
                padding: '0.75rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: t.templateNumber === templateNumber 
                  ? styles.primary 
                  : '#f8fafc',
                color: t.templateNumber === templateNumber 
                  ? 'white' 
                  : '#64748b',
                border: `2px solid ${t.templateNumber === templateNumber ? styles.primary : '#e2e8f0'}`,
                transition: 'all 0.2s'
              }}
            >
              Template {t.templateNumber}
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
        padding: '3rem 1rem', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
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
            &copy; 2024 {business.name}. All rights reserved. | Template {templateNumber}
          </p>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
}