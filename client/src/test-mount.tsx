export default function TestMount() {
  const path = window.location.pathname;
  
  // Template 1: Classic Green
  if (path.includes('/website-1')) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f0f9f0', padding: '20px' }}>
        <h1 style={{ color: '#15803d', fontSize: '36px', marginBottom: '20px' }}>Cumnock Golf Club</h1>
        <h2 style={{ color: '#666', fontSize: '24px', marginBottom: '30px' }}>Classic Green Theme - Template 1</h2>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px' }}>
          <h3 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Where Golf Meets Excellence</h3>
          <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            Experience championship golf on our beautifully maintained 18-hole course, featuring stunning mountain views 
            and challenging play for golfers of all skill levels.
          </p>
          <button style={{ backgroundColor: '#15803d', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
            Book Your Tee Time
          </button>
        </div>
      </div>
    );
  }
  
  // Template 2: Ocean Blue
  if (path.includes('/website-2')) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#eff6ff', padding: '20px' }}>
        <h1 style={{ color: '#1e40af', fontSize: '36px', marginBottom: '20px' }}>Cumnock Golf Club</h1>
        <h2 style={{ color: '#666', fontSize: '24px', marginBottom: '30px' }}>Ocean Blue Theme - Template 2</h2>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px' }}>
          <h3 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Modern Golf Experience</h3>
          <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            Contemporary design meets traditional golf excellence. Our modern facilities create the perfect setting for your golf experience.
          </p>
          <button style={{ backgroundColor: '#1e40af', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
            Explore Our Facilities
          </button>
        </div>
      </div>
    );
  }
  
  // Template 3: Autumn Gold
  if (path.includes('/website-3')) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fefce8', padding: '20px' }}>
        <h1 style={{ color: '#ca8a04', fontSize: '36px', marginBottom: '20px' }}>Cumnock Golf Club</h1>
        <h2 style={{ color: '#666', fontSize: '24px', marginBottom: '30px' }}>Autumn Gold Theme - Template 3</h2>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px' }}>
          <h3 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Scenic Golf Adventure</h3>
          <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            Experience golf surrounded by breathtaking autumn colors and natural beauty in a stunning natural setting.
          </p>
          <button style={{ backgroundColor: '#ca8a04', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
            Discover Our Course
          </button>
        </div>
      </div>
    );
  }
  
  // Template 4: Royal Purple
  if (path.includes('/website-4')) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#faf5ff', padding: '20px' }}>
        <h1 style={{ color: '#7c3aed', fontSize: '36px', marginBottom: '20px' }}>Cumnock Golf Club</h1>
        <h2 style={{ color: '#666', fontSize: '24px', marginBottom: '30px' }}>Royal Purple Theme - Template 4</h2>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px' }}>
          <h3 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Premium Golf Experience</h3>
          <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            Luxury meets tradition in our premium golf experience with elegant facilities and personalized service.
          </p>
          <button style={{ backgroundColor: '#7c3aed', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
            Experience Excellence
          </button>
        </div>
      </div>
    );
  }
  
  // Homepage
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '64px', color: '#1e293b', marginBottom: '20px' }}>It's Done</h1>
        <p style={{ fontSize: '24px', color: '#64748b', marginBottom: '50px' }}>Your Professional Website is Ready</p>
        
        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '40px', color: '#15803d', marginBottom: '40px' }}>Golf Course Templates</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '15px' }}>Classic Green</h3>
              <p style={{ color: '#64748b', marginBottom: '25px' }}>Traditional elegance with championship features</p>
              <a href="/cumnockgolfclub/website-1" style={{ 
                display: 'inline-block', backgroundColor: '#15803d', color: 'white', 
                padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
              }}>
                View Template
              </a>
            </div>

            <div style={{ border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '15px' }}>Ocean Blue</h3>
              <p style={{ color: '#64748b', marginBottom: '25px' }}>Modern design with coastal inspiration</p>
              <a href="/cumnockgolfclub/website-2" style={{ 
                display: 'inline-block', backgroundColor: '#1e40af', color: 'white', 
                padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
              }}>
                View Template
              </a>
            </div>

            <div style={{ border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '15px' }}>Autumn Gold</h3>
              <p style={{ color: '#64748b', marginBottom: '25px' }}>Warm and inviting with natural beauty</p>
              <a href="/cumnockgolfclub/website-3" style={{ 
                display: 'inline-block', backgroundColor: '#ca8a04', color: 'white', 
                padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
              }}>
                View Template
              </a>
            </div>

            <div style={{ border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '15px' }}>Royal Purple</h3>
              <p style={{ color: '#64748b', marginBottom: '25px' }}>Premium luxury and elegant sophistication</p>
              <a href="/cumnockgolfclub/website-4" style={{ 
                display: 'inline-block', backgroundColor: '#7c3aed', color: 'white', 
                padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
              }}>
                View Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}