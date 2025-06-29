import React from "react";

// Template 1: Classic Green
const Template1 = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f0f9f0', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <header style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#15803d', fontSize: '36px', margin: '0', fontWeight: 'bold' }}>Cumnock Golf Club</h1>
      <p style={{ color: '#64748b', fontSize: '20px', margin: '12px 0 0 0' }}>Classic Green Theme</p>
    </header>
    
    <main style={{ backgroundColor: 'white', padding: '48px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>Where Golf Meets Excellence</h2>
      <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
        Experience championship golf on our beautifully maintained 18-hole course, featuring stunning mountain views 
        and challenging play for golfers of all skill levels. Our traditional design emphasizes classic elegance.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '36px' }}>
        <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
          <div style={{ backgroundColor: '#dcfce7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
            ⛳
          </div>
          <h3 style={{ color: '#1e293b', marginBottom: '12px', fontSize: '20px', fontWeight: 'bold' }}>Championship Course</h3>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.5' }}>18-hole championship layout designed by renowned golf course architects</p>
        </div>
        
        <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
          <div style={{ backgroundColor: '#dcfce7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
            🏌️
          </div>
          <h3 style={{ color: '#1e293b', marginBottom: '12px', fontSize: '20px', fontWeight: 'bold' }}>Professional Instruction</h3>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.5' }}>Expert coaching and professional equipment to elevate your game</p>
        </div>
        
        <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
          <div style={{ backgroundColor: '#dcfce7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
            🍽️
          </div>
          <h3 style={{ color: '#1e293b', marginBottom: '12px', fontSize: '20px', fontWeight: 'bold' }}>Clubhouse Dining</h3>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.5' }}>Fine dining experience with panoramic course views</p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: '#15803d', color: 'white', padding: '16px 32px', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          Book Your Tee Time
        </button>
      </div>
    </main>
  </div>
);

// Template 2: Ocean Blue
const Template2 = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#eff6ff', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <header style={{ backgroundColor: '#1e40af', color: 'white', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
      <h1 style={{ fontSize: '36px', margin: '0', fontWeight: 'bold' }}>Cumnock Golf Club</h1>
      <p style={{ fontSize: '20px', margin: '12px 0 0 0', opacity: '0.9' }}>Ocean Blue Theme</p>
    </header>
    
    <main style={{ backgroundColor: 'white', padding: '48px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>Modern Golf Experience</h2>
      <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
        Contemporary design meets traditional golf excellence. Our modern facilities and coastal-inspired 
        architecture create the perfect setting for your premium golf experience.
      </p>
      
      <div style={{ backgroundColor: '#f1f5f9', padding: '32px', borderRadius: '12px', marginBottom: '36px' }}>
        <h3 style={{ color: '#1e40af', fontSize: '24px', marginBottom: '16px', fontWeight: 'bold' }}>Premium Amenities</h3>
        <ul style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', margin: '0', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '8px' }}>State-of-the-art driving range with target greens</li>
          <li style={{ marginBottom: '8px' }}>Professional putting green and short game area</li>
          <li style={{ marginBottom: '8px' }}>Modern clubhouse with panoramic ocean views</li>
          <li style={{ marginBottom: '8px' }}>Full-service pro shop and equipment rental</li>
        </ul>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: '#1e40af', color: 'white', padding: '16px 32px', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          Explore Our Facilities
        </button>
      </div>
    </main>
  </div>
);

// Template 3: Autumn Gold
const Template3 = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#fefce8', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <header style={{ backgroundColor: '#ca8a04', color: 'white', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
      <h1 style={{ fontSize: '36px', margin: '0', fontWeight: 'bold' }}>Cumnock Golf Club</h1>
      <p style={{ fontSize: '20px', margin: '12px 0 0 0', opacity: '0.9' }}>Autumn Gold Theme</p>
    </header>
    
    <main style={{ backgroundColor: 'white', padding: '48px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>Scenic Golf Adventure</h2>
      <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
        Experience golf surrounded by breathtaking autumn colors and natural beauty. Our scenic course 
        offers challenging play in a stunning natural setting with warm, inviting hospitality.
      </p>
      
      <div style={{ backgroundColor: '#fef3c7', padding: '32px', borderRadius: '12px', marginBottom: '36px' }}>
        <h3 style={{ color: '#ca8a04', fontSize: '24px', marginBottom: '16px', fontWeight: 'bold' }}>Natural Beauty</h3>
        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>
          Our course winds through ancient oak groves and rolling meadows, offering spectacular views 
          of the surrounding countryside. Each hole presents unique challenges while showcasing the 
          natural beauty of the landscape.
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: '#ca8a04', color: 'white', padding: '16px 32px', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          Discover Our Course
        </button>
      </div>
    </main>
  </div>
);

// Template 4: Royal Purple
const Template4 = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#faf5ff', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <header style={{ backgroundColor: '#7c3aed', color: 'white', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
      <h1 style={{ fontSize: '36px', margin: '0', fontWeight: 'bold' }}>Cumnock Golf Club</h1>
      <p style={{ fontSize: '20px', margin: '12px 0 0 0', opacity: '0.9' }}>Royal Purple Theme</p>
    </header>
    
    <main style={{ backgroundColor: 'white', padding: '48px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1e293b', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>Premium Golf Experience</h2>
      <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
        Luxury meets tradition in our premium golf experience. Elegant facilities, personalized service, 
        and world-class amenities create an unforgettable golfing experience for discerning players.
      </p>
      
      <div style={{ backgroundColor: '#f3f4f6', padding: '32px', borderRadius: '12px', marginBottom: '36px' }}>
        <h3 style={{ color: '#7c3aed', fontSize: '24px', marginBottom: '16px', fontWeight: 'bold' }}>Exclusive Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', color: '#64748b', fontSize: '16px' }}>
          <div>
            <h4 style={{ color: '#374151', marginBottom: '8px', fontWeight: 'bold' }}>Personal Caddie Service</h4>
            <p style={{ margin: '0', lineHeight: '1.5' }}>Professional caddies to enhance your game</p>
          </div>
          <div>
            <h4 style={{ color: '#374151', marginBottom: '8px', fontWeight: 'bold' }}>Private Lessons</h4>
            <p style={{ margin: '0', lineHeight: '1.5' }}>One-on-one instruction with PGA professionals</p>
          </div>
          <div>
            <h4 style={{ color: '#374151', marginBottom: '8px', fontWeight: 'bold' }}>Valet Service</h4>
            <p style={{ margin: '0', lineHeight: '1.5' }}>Full valet and club cleaning service</p>
          </div>
          <div>
            <h4 style={{ color: '#374151', marginBottom: '8px', fontWeight: 'bold' }}>Fine Dining</h4>
            <p style={{ margin: '0', lineHeight: '1.5' }}>Award-winning cuisine in elegant settings</p>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: '#7c3aed', color: 'white', padding: '16px 32px', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          Experience Excellence
        </button>
      </div>
    </main>
  </div>
);

// Homepage
const HomePage = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '64px', color: '#1e293b', margin: '0 0 16px 0', fontWeight: 'bold' }}>It's Done</h1>
        <p style={{ fontSize: '24px', color: '#64748b', margin: '0' }}>Your Professional Website is Ready</p>
      </header>
      
      <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '16px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '40px', color: '#15803d', marginBottom: '36px', textAlign: 'center', fontWeight: 'bold' }}>Golf Course Templates</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ border: '2px solid #e5e7eb', borderRadius: '12px', padding: '32px', textAlign: 'center', transition: 'all 0.3s ease' }}>
            <div style={{ backgroundColor: '#dcfce7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              🌿
            </div>
            <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '12px', fontWeight: 'bold' }}>Classic Green</h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '16px', lineHeight: '1.5' }}>Traditional elegance with championship-quality features</p>
            <a
              href="/cumnockgolfclub/website-1"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#15803d', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease'
              }}
            >
              View Template
            </a>
          </div>

          <div style={{ border: '2px solid #e5e7eb', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#dbeafe', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              🌊
            </div>
            <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '12px', fontWeight: 'bold' }}>Ocean Blue</h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '16px', lineHeight: '1.5' }}>Modern design with coastal inspiration</p>
            <a
              href="/cumnockgolfclub/website-2"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#1e40af', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              View Template
            </a>
          </div>

          <div style={{ border: '2px solid #e5e7eb', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#fef3c7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              🍂
            </div>
            <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '12px', fontWeight: 'bold' }}>Autumn Gold</h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '16px', lineHeight: '1.5' }}>Warm and inviting with natural beauty</p>
            <a
              href="/cumnockgolfclub/website-3"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#ca8a04', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              View Template
            </a>
          </div>

          <div style={{ border: '2px solid #e5e7eb', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#ede9fe', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>
              👑
            </div>
            <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '12px', fontWeight: 'bold' }}>Royal Purple</h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '16px', lineHeight: '1.5' }}>Premium luxury and sophisticated elegance</p>
            <a
              href="/cumnockgolfclub/website-4"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#7c3aed', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              View Template
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CleanGolfApp() {
  const path = window.location.pathname;
  
  if (path.includes('/website-1')) {
    return <Template1 />;
  } else if (path.includes('/website-2')) {
    return <Template2 />;
  } else if (path.includes('/website-3')) {
    return <Template3 />;
  } else if (path.includes('/website-4')) {
    return <Template4 />;
  }
  
  return <HomePage />;
}