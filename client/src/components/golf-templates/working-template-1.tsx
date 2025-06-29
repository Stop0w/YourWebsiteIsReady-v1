import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

export default function WorkingTemplate1() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!business) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Business not found</h2>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#059669', 
        color: 'white', 
        padding: '40px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', fontWeight: 'bold' }}>
          {business.name}
        </h1>
        <p style={{ fontSize: '24px', margin: '0 0 10px 0' }}>
          {business.tagline}
        </p>
        <p style={{ fontSize: '18px', margin: '0' }}>
          {business.location}
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* About Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px', color: '#1f2937' }}>
            About Our Club
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#6b7280' }}>
            {business.description}
          </p>
        </section>

        {/* Features Grid */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '30px', 
              borderRadius: '8px', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
                18 Holes
              </h3>
              <p style={{ color: '#6b7280' }}>Championship Course</p>
            </div>
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '30px', 
              borderRadius: '8px', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
                Par 72
              </h3>
              <p style={{ color: '#6b7280' }}>Professional Standard</p>
            </div>
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '30px', 
              borderRadius: '8px', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
                6,800 Yards
              </h3>
              <p style={{ color: '#6b7280' }}>Total Distance</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ 
          backgroundColor: '#ecfdf5', 
          padding: '40px', 
          borderRadius: '8px' 
        }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px', color: '#1f2937' }}>
            Contact Information
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                Get in Touch
              </h3>
              <div style={{ color: '#6b7280' }}>
                <p><strong>Address:</strong> {business.contact?.address || business.location}</p>
                <p><strong>Phone:</strong> {business.contact?.phone}</p>
                <p><strong>Email:</strong> {business.contact?.email}</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                Opening Hours
              </h3>
              <div style={{ color: '#6b7280' }}>
                <p><strong>Monday - Friday:</strong> 6:00 AM - 7:00 PM</p>
                <p><strong>Saturday - Sunday:</strong> 5:30 AM - 8:00 PM</p>
                <p><strong>Public Holidays:</strong> 6:00 AM - 6:00 PM</p>
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
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '10px', color: '#6b7280' }}>Template {params.templateNumber}</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1, 2, 3, 4].map(num => (
            <a
              key={num}
              href={`/${params.businessSlug}/website-${num}`}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                backgroundColor: num === parseInt(params.templateNumber || '1') 
                  ? '#059669' 
                  : '#f1f5f9',
                color: num === parseInt(params.templateNumber || '1') 
                  ? 'white' 
                  : '#64748b'
              }}
            >
              {num}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '30px 20px', 
        textAlign: 'center' 
      }}>
        <p>&copy; 2024 {business.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}