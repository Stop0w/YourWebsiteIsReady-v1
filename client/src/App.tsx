import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

// Import original pages
import Home from "./pages/home";
import BusinessLanding from "./pages/business-landing";
import Services from "./pages/services";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        try {
          const response = await fetch(queryKey[0] as string);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.json();
        } catch (error) {
          console.error('Query error:', error);
          throw error;
        }
      },
    },
  },
});

function GolfTemplateViewer() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading, error } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#059669', fontSize: '2rem', margin: '0' }}>Loading template...</h2>
        </div>
      </div>
    );
  }

  if (error || !business) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#dc2626', fontSize: '3rem', margin: '0 0 1rem 0' }}>Business Not Found</h1>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', margin: '0 0 2rem 0' }}>
            The business you're looking for doesn't exist.
          </p>
          <a href="/" style={{ 
            backgroundColor: '#059669', 
            color: 'white', 
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Return Home
          </a>
        </div>
      </div>
    );
  }

  const templateNumber = parseInt(params.templateNumber || '1');
  
  const themes = {
    1: { primary: '#059669', secondary: '#ecfdf5', accent: '#10b981', name: 'Classic Green' },
    2: { primary: '#1e40af', secondary: '#eff6ff', accent: '#3b82f6', name: 'Ocean Blue' },
    3: { primary: '#7c2d12', secondary: '#fef7ed', accent: '#ea580c', name: 'Autumn Gold' },
    4: { primary: '#581c87', secondary: '#faf5ff', accent: '#a855f7', name: 'Royal Purple' }
  };
  
  const theme = themes[templateNumber as keyof typeof themes] || themes[1];

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <section id="about" style={{ marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem', 
            color: '#1f2937',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Welcome to {business.name}
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

        <section id="course" style={{ 
          marginBottom: '5rem',
          backgroundColor: theme.secondary,
          padding: '4rem 3rem',
          borderRadius: '20px'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {business.category === 'golfclub' ? 'Course Information' : 'Service Information'}
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {business.category === 'golfclub' ? [
              { icon: '⛳', number: '18', label: 'Championship Holes', desc: 'Full regulation 18-hole course' },
              { icon: '🏆', number: '72', label: 'Par Rating', desc: 'Tournament standard par 72' },
              { icon: '📏', number: '6,800', label: 'Total Yards', desc: 'Championship distance layout' }
            ] : [
              { icon: '🔧', number: '24/7', label: 'Emergency Service', desc: 'Available around the clock' },
              { icon: '✅', number: '100%', label: 'Licensed & Insured', desc: 'Fully certified professionals' },
              { icon: '⭐', number: '5★', label: 'Customer Rating', desc: 'Excellent service record' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '3rem 2rem', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  border: `2px solid ${theme.primary}`
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '3.5rem', 
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

        <section id="contact" style={{ 
          backgroundColor: theme.secondary, 
          padding: '4rem 3rem', 
          borderRadius: '20px',
          marginBottom: '3rem',
          border: `3px solid ${theme.primary}`
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Contact Us Today
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem'
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
                <p style={{ margin: '1rem 0' }}>
                  <strong>Address:</strong> {business.contact?.address || business.location}
                </p>
                <p style={{ margin: '1rem 0' }}>
                  <strong>Phone:</strong> {business.contact?.phone}
                </p>
                <p style={{ margin: '1rem 0' }}>
                  <strong>Email:</strong> {business.contact?.email}
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
                🕒 {business.category === 'golfclub' ? 'Opening Hours' : 'Service Hours'}
              </h3>
              <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ margin: '1rem 0' }}>
                  <strong>Monday - Friday:</strong> {business.category === 'golfclub' ? '6:00 AM - 7:00 PM' : '7:00 AM - 6:00 PM'}
                </p>
                <p style={{ margin: '1rem 0' }}>
                  <strong>Saturday - Sunday:</strong> {business.category === 'golfclub' ? '5:30 AM - 8:00 PM' : '8:00 AM - 5:00 PM'}
                </p>
                <p style={{ margin: '1rem 0' }}>
                  <strong>{business.category === 'golfclub' ? 'Public Holidays' : 'Emergency'}:</strong> {business.category === 'golfclub' ? '6:00 AM - 6:00 PM' : '24/7 Available'}
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
          Template {templateNumber} ({theme.name})
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
            © 2024 {business.name}. All rights reserved. | Template {templateNumber}
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/:businessSlug/website-:templateNumber" component={GolfTemplateViewer} />
          <Route path="/:businessSlug/services" component={Services} />
          <Route path="/:businessSlug" component={BusinessLanding} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;