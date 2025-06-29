import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

export default function CompleteTemplate1() {
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
    <div>
      <header style={{ backgroundColor: '#065f46', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0' }}>{business.name}</h1>
        <p style={{ fontSize: '1.5rem', margin: '0' }}>{business.tagline}</p>
      </header>
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Our Club</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{business.description}</p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '0.5rem' }}>18 Holes</h3>
            <p>Championship Course</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '0.5rem' }}>Par 72</h3>
            <p>Professional Standard</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '0.5rem' }}>6,800 Yards</h3>
            <p>Total Distance</p>
          </div>
        </section>

        <section style={{ backgroundColor: '#ecfdf5', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
              <p><strong>Address:</strong> {business.contact?.address || business.location}</p>
              <p><strong>Phone:</strong> {business.contact?.phone}</p>
              <p><strong>Email:</strong> {business.contact?.email}</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Opening Hours</h3>
              <p><strong>Mon-Fri:</strong> 6:00 AM - 7:00 PM</p>
              <p><strong>Sat-Sun:</strong> 5:30 AM - 8:00 PM</p>
              <p><strong>Holidays:</strong> 6:00 AM - 6:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Template {params.templateNumber}</div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3, 4].map(num => (
            <a
              key={num}
              href={`/${params.businessSlug}/website-${num}`}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                textDecoration: 'none',
                backgroundColor: num === parseInt(params.templateNumber || '1') ? '#065f46' : '#f1f5f9',
                color: num === parseInt(params.templateNumber || '1') ? 'white' : '#666'
              }}
            >
              {num}
            </a>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '3rem' }}>
        <p>&copy; 2024 {business.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}