import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business, Template } from "@shared/schema";

import WorkingGolfTemplates from "@/components/working-golf-templates";

// Working Golf Template Component
function GolfTemplateComponent() {
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
          <h1>Template Not Found</h1>
          <p>Template {templateNumber} is not available.</p>
          <a 
            href={`/${business.slug}`}
            style={{ 
              backgroundColor: '#059669', 
              color: 'white', 
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            View Other Templates
          </a>
        </div>
      </div>
    );
  }

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
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            margin: '0 0 1rem 0', 
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
            📍 {business.location}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* About Section */}
        <section style={{ marginBottom: '5rem' }}>
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
        <section style={{ 
          marginBottom: '5rem',
          backgroundColor: theme.secondary,
          padding: '4rem 3rem',
          borderRadius: '20px'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center'
          }}>
            Course Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { icon: '⛳', number: '18', label: 'Championship Holes' },
              { icon: '🏆', number: '72', label: 'Par Rating' },
              { icon: '📏', number: '6,800', label: 'Total Yards' }
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
                  color: '#1f2937'
                }}>
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ 
          backgroundColor: theme.secondary, 
          padding: '4rem 3rem', 
          borderRadius: '20px',
          border: `3px solid ${theme.primary}`
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            color: theme.primary,
            textAlign: 'center'
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
          textAlign: 'center'
        }}>
          {template.name} ({theme.name})
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
                  ? theme.primary 
                  : '#f8fafc',
                color: t.templateNumber === templateNumber 
                  ? 'white' 
                  : '#64748b',
                border: `2px solid ${t.templateNumber === templateNumber ? theme.primary : '#e2e8f0'}`
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
        padding: '3rem 2rem', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            {business.name}
          </h3>
          <p style={{ margin: '0', opacity: 0.8 }}>
            &copy; 2024 {business.name}. All rights reserved. | {template.name} Template
          </p>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/:businessSlug/website-:templateNumber" component={WorkingGolfTemplates} />
      <Route path="/" component={() => (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#1f2937', marginBottom: '2rem' }}>
              It's Done - Golf Course Websites
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '3rem' }}>
              Professional golf course website templates
            </p>
            <a 
              href="/cumnockgolfclub"
              style={{ 
                backgroundColor: '#059669', 
                color: 'white', 
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              View Demo Golf Course
            </a>
          </div>
        </div>
      )} />
      <Route path="/:businessSlug" component={() => (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#1f2937', marginBottom: '2rem' }}>
              Cumnock Golf Club Templates
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '3rem' }}>
              Choose from 4 professional website templates
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem' 
            }}>
              {[
                { num: 1, name: 'Classic Green', color: '#059669' },
                { num: 2, name: 'Ocean Blue', color: '#1e40af' },
                { num: 3, name: 'Autumn Gold', color: '#7c2d12' },
                { num: 4, name: 'Royal Purple', color: '#581c87' }
              ].map(template => (
                <a
                  key={template.num}
                  href={`/cumnockgolfclub/website-${template.num}`}
                  style={{
                    display: 'block',
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: template.color,
                    border: `3px solid ${template.color}`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Template {template.num}
                  </h3>
                  <p style={{ color: '#6b7280', margin: '0' }}>
                    {template.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )} />
      <Route component={() => (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#1f2937', marginBottom: '2rem' }}>
              Page Not Found
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '3rem' }}>
              The page you're looking for doesn't exist.
            </p>
            <a 
              href="/"
              style={{ 
                backgroundColor: '#059669', 
                color: 'white', 
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      )} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
