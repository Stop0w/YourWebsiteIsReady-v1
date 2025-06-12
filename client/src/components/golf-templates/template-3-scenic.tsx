import { Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Template3Props {
  business: Business;
}

export default function GolfTemplate3Scenic({ business }: Template3Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-width Hero with Overlay Navigation */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>
        
        {/* Floating Navigation */}
        <header className="absolute top-8 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="flex justify-between items-center px-8 py-4">
                <div className="text-2xl font-bold text-slate-900">{business.name.split(' ')[0]}</div>
                <nav className="hidden lg:flex space-x-8">
                  <a href="#home" className="text-slate-700 hover:text-green-600 font-medium">Home</a>
                  <a href="#about" className="text-slate-700 hover:text-green-600 font-medium">About</a>
                  <a href="#course" className="text-slate-700 hover:text-green-600 font-medium">Course Info</a>
                  <a href="#contact" className="text-slate-700 hover:text-green-600 font-medium">Contact</a>
                </nav>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium mb-6">
                Established 1925 • Championship Course
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                {business.name}
              </h1>
              <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
                {business.tagline || "Where breathtaking scenery meets championship golf in perfect harmony"}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 text-lg font-semibold">
                Explore Our Course
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg">
                Virtual Tour
              </Button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <span className="text-white text-2xl opacity-60">⌄</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {business.description}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From the first tee to the final putt, every element of our course has been carefully crafted to provide an unforgettable experience.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">98</div>
                  <div className="text-slate-600 font-medium">Years of Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
                  <div className="text-slate-600 font-medium">Member Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-slate-600 font-medium">Tournament Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">800+</div>
                  <div className="text-slate-600 font-medium">Active Members</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1566835904095-242e7e63c530?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                  alt="Golf Course"
                  className="rounded-2xl shadow-2xl w-full object-cover h-96"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="text-sm text-slate-600 mb-1">Course Designer</div>
                  <div className="font-bold text-slate-900">Robert Trent Jones Jr.</div>
                  <div className="text-sm text-slate-600 mt-2">Renowned for creating challenging yet fair championship courses worldwide.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Plan Your Visit</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the beauty and challenge of {business.name}. Contact us to schedule your round or learn about membership opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📍</span>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <div className="text-slate-600">{business.contact?.address || business.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📞</span>
                    <div>
                      <div className="font-semibold text-slate-900">Pro Shop</div>
                      <div className="text-slate-600">{business.contact?.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✉️</span>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-slate-600">{business.contact?.email}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Operating Hours</h4>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>6:30 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Round</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                        <input type="date" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Players</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                          <option>1 Player</option>
                          <option>2 Players</option>
                          <option>3 Players</option>
                          <option>4 Players</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{business.name}</h3>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Where breathtaking scenery meets championship golf. Experience the difference that nearly a century of excellence makes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#course" className="hover:text-white transition-colors">Course Info</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <div>{business.contact?.address || business.location}</div>
                <div>{business.contact?.phone}</div>
                <div>{business.contact?.email}</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}