import { createRoot } from "react-dom/client";

// Simple working golf template components
function GolfTemplate1() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f9f0', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#16a34a', fontSize: '32px', margin: '0' }}>Cumnock Golf Club</h1>
        <p style={{ color: '#64748b', fontSize: '18px', margin: '10px 0 0 0' }}>Classic Green Theme - Template 1</p>
      </header>
      
      <main style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e293b', fontSize: '28px', marginBottom: '20px' }}>Where Golf Meets Excellence</h2>
        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
          Experience championship golf on our beautifully maintained 18-hole course, featuring stunning mountain views 
          and challenging play for golfers of all skill levels.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#dcfce7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
              <span style={{ fontSize: '24px' }}>⛳</span>
            </div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Championship Course</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>18-hole championship layout</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#dcfce7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
              <span style={{ fontSize: '24px' }}>🏌️</span>
            </div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Pro Shop</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Professional equipment & lessons</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#dcfce7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
              <span style={{ fontSize: '24px' }}>🍽️</span>
            </div>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Clubhouse</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Fine dining & event facilities</p>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button style={{ backgroundColor: '#16a34a', color: 'white', padding: '12px 24px', borderRadius: '6px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>
            Book Your Tee Time
          </button>
        </div>
      </main>
    </div>
  );
}

function GolfTemplate2() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eff6ff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#1e40af', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: '0' }}>Cumnock Golf Club</h1>
        <p style={{ fontSize: '18px', margin: '10px 0 0 0', opacity: '0.9' }}>Ocean Blue Theme - Template 2</p>
      </header>
      
      <main style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e293b', fontSize: '28px', marginBottom: '20px' }}>Modern Golf Experience</h2>
        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
          Contemporary design meets traditional golf excellence. Our modern facilities and coastal-inspired 
          architecture create the perfect setting for your golf experience.
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button style={{ backgroundColor: '#1e40af', color: 'white', padding: '12px 24px', borderRadius: '6px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>
            Explore Our Facilities
          </button>
        </div>
      </main>
    </div>
  );
}

function GolfTemplate3() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fefce8', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#ca8a04', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: '0' }}>Cumnock Golf Club</h1>
        <p style={{ fontSize: '18px', margin: '10px 0 0 0', opacity: '0.9' }}>Autumn Gold Theme - Template 3</p>
      </header>
      
      <main style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e293b', fontSize: '28px', marginBottom: '20px' }}>Scenic Golf Adventure</h2>
        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>
          Experience golf surrounded by breathtaking autumn colors and natural beauty. Our scenic course 
          offers challenging play in a stunning natural setting.
        </p>
      </main>
    </div>
  );
}

function GolfTemplate4() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf5ff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#7c3aed', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: '0' }}>Cumnock Golf Club</h1>
        <p style={{ fontSize: '18px', margin: '10px 0 0 0', opacity: '0.9' }}>Royal Purple Theme - Template 4</p>
      </header>
      
      <main style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e293b', fontSize: '28px', marginBottom: '20px' }}>Premium Golf Experience</h2>
        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>
          Luxury meets tradition in our premium golf experience. Elegant facilities and personalized 
          service create an unforgettable golfing experience.
        </p>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '48px', color: '#1e293b', margin: '0 0 10px 0' }}>It's Done</h1>
          <p style={{ fontSize: '20px', color: '#64748b', margin: '0' }}>Your Professional Website is Ready</p>
        </header>
        
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '32px', color: '#16a34a', marginBottom: '30px', textAlign: 'center' }}>Golf Course Templates</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { num: 1, name: 'Classic Green', desc: 'Traditional & Elegant', color: '#16a34a' },
              { num: 2, name: 'Ocean Blue', desc: 'Modern & Contemporary', color: '#1e40af' },
              { num: 3, name: 'Autumn Gold', desc: 'Warm & Inviting', color: '#ca8a04' },
              { num: 4, name: 'Royal Purple', desc: 'Premium & Sophisticated', color: '#7c3aed' }
            ].map((template) => (
              <div key={template.num} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', color: '#1e293b', marginBottom: '10px' }}>{template.name}</h3>
                <p style={{ color: '#64748b', marginBottom: '20px' }}>{template.desc}</p>
                <a
                  href={`/cumnockgolfclub/website-${template.num}`}
                  style={{ 
                    display: 'inline-block',
                    backgroundColor: template.color, 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  View Template
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const path = window.location.pathname;
  
  if (path.includes('/website-1')) {
    return <GolfTemplate1 />;
  } else if (path.includes('/website-2')) {
    return <GolfTemplate2 />;
  } else if (path.includes('/website-3')) {
    return <GolfTemplate3 />;
  } else if (path.includes('/website-4')) {
    return <GolfTemplate4 />;
  }
  
  return <HomePage />;
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<App />);
