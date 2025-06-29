import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

export default function Template1() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#0f766e', 
        color: 'white', 
        padding: '3rem 1rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          margin: '0 0 0.5rem 0', 
          fontWeight: 'bold' 
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
          {business.location}
        </p>
      </header>

      {/* Navigation Bar */}
      <nav style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '0 1rem'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          padding: '1rem 0'
        }}>
          <a href="#about" style={{ 
            textDecoration: 'none', 
            color: '#374151', 
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}>About</a>
          <a href="#course" style={{ 
            textDecoration: 'none', 
            color: '#374151', 
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>Course</a>
          <a href="#facilities" style={{ 
            textDecoration: 'none', 
            color: '#374151', 
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>Facilities</a>
          <a href="#contact" style={{ 
            textDecoration: 'none', 
            color: '#374151', 
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '3rem 1rem' 
      }}>
        {/* About Section */}
        <section id="about" style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Welcome to {business.name.split(' ')[0]}
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.7', 
            color: '#4b5563',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {business.description}
          </p>
        </section>

        {/* Course Features */}
        <section id="course" style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Course Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%', 
                margin: '0 auto 1rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '2rem', 
                  fontWeight: 'bold' 
                }}>18</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Championship Holes
              </h3>
              <p style={{ color: '#6b7280' }}>
                Full 18-hole championship course designed for all skill levels
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%', 
                margin: '0 auto 1rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold' 
                }}>72</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Par 72 Course
              </h3>
              <p style={{ color: '#6b7280' }}>
                Professional standard par 72 layout with strategic challenges
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%', 
                margin: '0 auto 1rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold' 
                }}>6.8K</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Total Yards
              </h3>
              <p style={{ color: '#6b7280' }}>
                6,800 yards of pristine fairways and challenging greens
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Club Facilities
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Golf Facilities
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0' 
              }}>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Professional driving range
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Practice putting greens
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Short game practice area
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  color: '#4b5563'
                }}>
                  ✓ Golf cart rentals
                </li>
              </ul>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Clubhouse Amenities
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0', 
                margin: '0' 
              }}>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Restaurant & bar
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Pro shop
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  color: '#4b5563'
                }}>
                  ✓ Event facilities
                </li>
                <li style={{ 
                  padding: '0.5rem 0', 
                  color: '#4b5563'
                }}>
                  ✓ Locker rooms
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ 
          backgroundColor: '#f0fdf4', 
          padding: '3rem 2rem', 
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Visit Us Today
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#065f46'
              }}>
                Contact Information
              </h3>
              <div style={{ color: '#374151', lineHeight: '1.6' }}>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Address:</strong> {business.contact?.address || business.location}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Phone:</strong> {business.contact?.phone}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Email:</strong> {business.contact?.email}
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#065f46'
              }}>
                Opening Hours
              </h3>
              <div style={{ color: '#374151', lineHeight: '1.6' }}>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Monday - Friday:</strong> 6:00 AM - 7:00 PM
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Saturday - Sunday:</strong> 5:30 AM - 8:00 PM
                </p>
                <p style={{ margin: '0.5rem 0' }}>
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
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        fontSize: '14px',
        zIndex: 1000
      }}>
        <div style={{ 
          marginBottom: '0.5rem', 
          color: '#6b7280', 
          fontSize: '12px',
          textAlign: 'center'
        }}>
          Template {params.templateNumber}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3, 4].map(num => (
            <a
              key={num}
              href={`/${params.businessSlug}/website-${num}`}
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                backgroundColor: num === parseInt(params.templateNumber || '1') 
                  ? '#0f766e' 
                  : '#f1f5f9',
                color: num === parseInt(params.templateNumber || '1') 
                  ? 'white' 
                  : '#64748b',
                transition: 'all 0.2s'
              }}
            >
              {num}
            </a>
          ))}
        </div>
        <a
          href={`/${params.businessSlug}`}
          style={{
            display: 'block',
            marginTop: '0.5rem',
            padding: '0.5rem',
            backgroundColor: '#f8fafc',
            color: '#64748b',
            textDecoration: 'none',
            fontSize: '11px',
            textAlign: 'center',
            borderRadius: '4px'
          }}
        >
          ← Back to Overview
        </a>
      </div>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '2rem 1rem', 
        textAlign: 'center' 
      }}>
        <p style={{ margin: '0', opacity: 0.8 }}>
          &copy; 2024 {business.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}