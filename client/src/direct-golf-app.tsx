import { Business } from "@shared/schema";

// Direct golf template implementations
const sampleBusiness: Business = {
  id: 1,
  slug: "cumnockgolfclub",
  name: "Cumnock Golf Club",
  category: "golfclub",
  location: "Cumnock, NSW",
  description: "Premier golf course with stunning mountain views",
  tagline: "Where Golf Meets Excellence",
  contact: {
    phone: "(02) 6367 8999",
    email: "info@cumnockgolf.com.au",
    address: "Golf Course Road, Cumnock NSW 2867"
  },
  status: "active",
  createdAt: "2024-01-01"
};

function GolfTemplate1() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-green-800">{sampleBusiness.name}</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-green-600 font-medium">About</a>
              <a href="#course" className="text-slate-700 hover:text-green-600 font-medium">Course</a>
              <a href="#contact" className="text-slate-700 hover:text-green-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{sampleBusiness.tagline}</h1>
          <p className="text-xl mb-8">{sampleBusiness.description}</p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Book Your Tee Time
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Classic Green Theme</h2>
            <p className="text-lg text-slate-600">Traditional elegance meets modern amenities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">⛳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Championship Course</h3>
              <p className="text-slate-600">18-hole championship golf course designed for all skill levels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏌️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Instruction</h3>
              <p className="text-slate-600">Expert coaching to improve your game</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clubhouse Dining</h3>
              <p className="text-slate-600">Fine dining with panoramic course views</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GolfTemplate2() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">{sampleBusiness.name}</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-100 hover:text-white font-medium">Home</a>
              <a href="#about" className="text-blue-100 hover:text-white font-medium">About</a>
              <a href="#course" className="text-blue-100 hover:text-white font-medium">Course</a>
              <a href="#contact" className="text-blue-100 hover:text-white font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Ocean Blue Theme</h1>
          <p className="text-xl mb-8">Modern design with coastal inspiration</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Explore Our Course
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Premium Golf Experience</h2>
          <p className="text-lg text-slate-600 mb-12">Contemporary facilities in a stunning natural setting</p>
        </div>
      </section>
    </div>
  );
}

export default function DirectGolfApp() {
  const path = window.location.pathname;
  
  if (path.includes('/website-1')) {
    return <GolfTemplate1 />;
  } else if (path.includes('/website-2')) {
    return <GolfTemplate2 />;
  } else if (path.includes('/website-3')) {
    return (
      <div className="min-h-screen bg-yellow-50">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-yellow-800 mb-4">Autumn Gold Theme</h1>
          <p className="text-xl text-yellow-700">Template 3 - Warm autumn colors</p>
        </div>
      </div>
    );
  } else if (path.includes('/website-4')) {
    return (
      <div className="min-h-screen bg-purple-50">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Royal Purple Theme</h1>
          <p className="text-xl text-purple-700">Template 4 - Elegant purple design</p>
        </div>
      </div>
    );
  }

  // Homepage
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">It's Done</h1>
          <p className="text-xl text-gray-600 mb-8">Your Professional Website is Ready</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Golf Course Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, name: "Classic Green", desc: "Traditional & Elegant" },
              { num: 2, name: "Ocean Blue", desc: "Modern & Contemporary" },
              { num: 3, name: "Autumn Gold", desc: "Warm & Inviting" },
              { num: 4, name: "Royal Purple", desc: "Premium & Sophisticated" }
            ].map((template) => (
              <div key={template.num} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.desc}</p>
                <a
                  href={`/cumnockgolfclub/website-${template.num}`}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
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