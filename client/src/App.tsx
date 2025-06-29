import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import SimpleGolfApp from "./simple-golf-app";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/:businessSlug/website-:templateNumber" component={SimpleGolfApp} />
          <Route path="/" component={() => (
            <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '4rem 2rem' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '4rem', color: '#1f2937', marginBottom: '2rem', fontWeight: 'bold' }}>
                  It's Done - Golf Course Websites
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '4rem', lineHeight: '1.6' }}>
                  Professional golf course website templates with modern designs
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                  gap: '3rem',
                  marginBottom: '4rem'
                }}>
                  <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    border: '2px solid #059669'
                  }}>
                    <h2 style={{ fontSize: '2rem', color: '#059669', marginBottom: '1.5rem' }}>
                      🏌️ Cumnock Golf Club
                    </h2>
                    <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                      Championship 18-hole course with premium facilities and scenic views
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {[1, 2, 3, 4].map(num => (
                        <a
                          key={num}
                          href={`/cumnockgolfclub/website-${num}`}
                          style={{
                            backgroundColor: '#059669',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            transition: 'all 0.2s'
                          }}
                        >
                          Template {num}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    border: '2px solid #1e40af'
                  }}>
                    <h2 style={{ fontSize: '2rem', color: '#1e40af', marginBottom: '1.5rem' }}>
                      🏌️ Randwick Golf Club
                    </h2>
                    <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                      Historic golf club with traditional charm and modern amenities
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {[1, 2, 3, 4].map(num => (
                        <a
                          key={num}
                          href={`/randwickgolfclub/website-${num}`}
                          style={{
                            backgroundColor: '#1e40af',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            transition: 'all 0.2s'
                          }}
                        >
                          Template {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '3rem', 
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '2rem' }}>
                    Four Professional Templates
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '2rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: '#059669', 
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white'
                      }}>1</div>
                      <h4 style={{ color: '#059669', margin: '0 0 0.5rem 0' }}>Classic Green</h4>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0' }}>Traditional golf theme</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: '#1e40af', 
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white'
                      }}>2</div>
                      <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>Ocean Blue</h4>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0' }}>Modern coastal design</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: '#7c2d12', 
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white'
                      }}>3</div>
                      <h4 style={{ color: '#7c2d12', margin: '0 0 0.5rem 0' }}>Autumn Gold</h4>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0' }}>Warm autumn colors</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: '#581c87', 
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white'
                      }}>4</div>
                      <h4 style={{ color: '#581c87', margin: '0 0 0.5rem 0' }}>Royal Purple</h4>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0' }}>Premium luxury theme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;