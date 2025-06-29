import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

export default function SimpleGolfApp() {
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

  const templateNumber = parseInt(params.templateNumber || '1');
  
  const themes = {
    1: { primary: '#059669', name: 'Classic Green' },
    2: { primary: '#1e40af', name: 'Ocean Blue' },
    3: { primary: '#7c2d12', name: 'Autumn Gold' },
    4: { primary: '#581c87', name: 'Royal Purple' }
  };
  
  const theme = themes[templateNumber as keyof typeof themes] || themes[1];

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'system-ui' }}>
      <header style={{ 
        backgroundColor: theme.primary, 
        color: 'white', 
        padding: '4rem 2rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>
          {business.name}
        </h1>
        <p style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
          {business.tagline}
        </p>
        <p style={{ fontSize: '1.1rem', margin: '0' }}>
          📍 {business.location}
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
            Welcome to {business.name}
          </h2>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '3rem', 
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '1.3rem', textAlign: 'center', lineHeight: '1.6' }}>
              {business.description}
            </p>
          </div>
        </section>

        <section style={{ 
          backgroundColor: '#f8fafc', 
          padding: '4rem 2rem', 
          borderRadius: '16px',
          marginBottom: '4rem' 
        }}>
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
            Course Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⛳</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: theme.primary }}>18</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Championship Holes</h3>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: theme.primary }}>72</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Par Rating</h3>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📏</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: theme.primary }}>6,800</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Total Yards</h3>
            </div>
          </div>
        </section>

        <section style={{ 
          backgroundColor: '#f0fdf4', 
          padding: '4rem 2rem', 
          borderRadius: '16px',
          border: `3px solid ${theme.primary}`
        }}>
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem', color: theme.primary }}>
            Contact Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem' 
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: theme.primary }}>
                📍 Visit Us
              </h3>
              <p><strong>Address:</strong> {business.contact?.address || business.location}</p>
              <p><strong>Phone:</strong> {business.contact?.phone}</p>
              <p><strong>Email:</strong> {business.contact?.email}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: theme.primary }}>
                🕒 Opening Hours
              </h3>
              <p><strong>Monday - Friday:</strong> 6:00 AM - 7:00 PM</p>
              <p><strong>Saturday - Sunday:</strong> 5:30 AM - 8:00 PM</p>
              <p><strong>Public Holidays:</strong> 6:00 AM - 6:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontSize: '14px',
        zIndex: 1000
      }}>
        <div style={{ marginBottom: '0.5rem', textAlign: 'center', color: '#666' }}>
          Template {templateNumber} - {theme.name}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
          {[1, 2, 3, 4].map(num => (
            <a
              key={num}
              href={`/${params.businessSlug}/website-${num}`}
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: num === templateNumber ? theme.primary : '#f8fafc',
                color: num === templateNumber ? 'white' : '#666',
                border: `2px solid ${num === templateNumber ? theme.primary : '#e2e8f0'}`
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
            color: '#666',
            textDecoration: 'none',
            fontSize: '11px',
            textAlign: 'center',
            borderRadius: '4px'
          }}
        >
          ← Back
        </a>
      </div>

      <footer style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '2rem', 
        textAlign: 'center' 
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          {business.name}
        </h3>
        <p style={{ margin: '0' }}>
          © 2024 {business.name}. All rights reserved. | Template {templateNumber}
        </p>
      </footer>
    </div>
  );
}