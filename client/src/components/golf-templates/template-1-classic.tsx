import { Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Template1Props {
  business: Business;
}

export default function GolfTemplate1Classic({ business }: Template1Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green-800">{business.name.split(' ')[0]}</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-green-600 font-medium">About</a>
              <a href="#course" className="text-slate-700 hover:text-green-600 font-medium">Course</a>
              <a href="#membership" className="text-slate-700 hover:text-green-600 font-medium">Membership</a>
              <a href="#events" className="text-slate-700 hover:text-green-600 font-medium">Events</a>
              <a href="#contact" className="text-slate-700 hover:text-green-600 font-medium">Contact</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">{business.name}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {business.tagline || "Experience championship golf at its finest"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Book Your Round
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Welcome to Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {business.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Championship Course</h3>
                <p className="text-slate-600">
                  Our 18-hole championship course offers a challenging yet enjoyable experience for golfers of all skill levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Staff</h3>
                <p className="text-slate-600">
                  Our experienced team of golf professionals is here to help you improve your game and enjoy every moment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Fine Dining</h3>
                <p className="text-slate-600">
                  Enjoy exceptional cuisine in our clubhouse restaurant with panoramic views of the course.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section id="course" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Course Details</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our meticulously maintained championship course features 18 holes of strategic golf designed to challenge and delight players of every skill level.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                  <div className="text-slate-600">Championship Holes</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">6,800</div>
                  <div className="text-slate-600">Total Yards</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">72</div>
                  <div className="text-slate-600">Par</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">4.5★</div>
                  <div className="text-slate-600">Rating</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Golf Course"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h2>
            <p className="text-xl text-slate-600">Get in touch to book your round or learn about membership</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Address</div>
                  <div className="text-slate-600">{business.contact?.address || business.location}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <div className="text-slate-600">{business.contact?.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600">✉️</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div className="text-slate-600">{business.contact?.email}</div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Round</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Players</label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                      <option>1 Player</option>
                      <option>2 Players</option>
                      <option>3 Players</option>
                      <option>4 Players</option>
                    </select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{business.name}</h3>
              <p className="text-slate-300">
                Experience championship golf in a welcoming, professional environment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#course" className="hover:text-white">Course</a></li>
                <li><a href="#membership" className="hover:text-white">Membership</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <div>{business.contact?.phone}</div>
                <div>{business.contact?.email}</div>
                <div>{business.location}</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}