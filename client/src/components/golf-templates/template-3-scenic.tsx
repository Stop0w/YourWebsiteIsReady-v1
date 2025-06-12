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
                  <a href="#gallery" className="text-slate-700 hover:text-green-600 font-medium">Gallery</a>
                  <a href="#course" className="text-slate-700 hover:text-green-600 font-medium">Course Info</a>
                  <a href="#dining" className="text-slate-700 hover:text-green-600 font-medium">Dining</a>
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
                <i className="fas fa-chevron-down text-white text-2xl opacity-60"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Gallery Section */}
      <section id="gallery" className="py-0">
        <div className="grid lg:grid-cols-4 h-96">
          <div 
            className="bg-cover bg-center relative group cursor-pointer"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">Hole 1</div>
              <div className="text-sm opacity-80">Par 4 • 425 yards</div>
            </div>
          </div>
          <div 
            className="bg-cover bg-center relative group cursor-pointer"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">Signature Hole</div>
              <div className="text-sm opacity-80">Par 3 • 165 yards</div>
            </div>
          </div>
          <div 
            className="bg-cover bg-center relative group cursor-pointer"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">18th Green</div>
              <div className="text-sm opacity-80">Par 5 • 520 yards</div>
            </div>
          </div>
          <div 
            className="bg-cover bg-center relative group cursor-pointer"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581029772658-dfa1e76b38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">Clubhouse</div>
              <div className="text-sm opacity-80">Dining & Events</div>
            </div>
          </div>
        </div>
      </section>

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
                  From the first tee to the final putt, every element of our course has been carefully crafted to provide an unforgettable experience. Our commitment to excellence extends beyond the fairways to encompass world-class amenities, exceptional service, and a welcoming community atmosphere.
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

      {/* Course Information */}
      <section id="course" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Course Details</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our championship 18-hole course offers a diverse and challenging layout that tests every aspect of your game
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">6,847</div>
                    <div className="text-slate-600">Championship Yards</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">72.4</div>
                    <div className="text-slate-600">Course Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">132</div>
                    <div className="text-slate-600">Slope Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">72</div>
                    <div className="text-slate-600">Par</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tee Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-900">Championship Tees</div>
                      <div className="text-slate-600">6,847 yards • Rating: 72.4</div>
                    </div>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-900">Member Tees</div>
                      <div className="text-slate-600">6,234 yards • Rating: 70.1</div>
                    </div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-900">Forward Tees</div>
                      <div className="text-slate-600">5,621 yards • Rating: 67.8</div>
                    </div>
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-900">Family Tees</div>
                      <div className="text-slate-600">5,108 yards • Rating: 65.2</div>
                    </div>
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Signature Holes */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Signature Holes</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">Hole 7</h4>
                    <div className="text-green-600 font-semibold">Par 3 • 165 yards</div>
                  </div>
                  <p className="text-slate-600">
                    An island green surrounded by natural wetlands, requiring precision and confidence to find the putting surface.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">Hole 12</h4>
                    <div className="text-green-600 font-semibold">Par 4 • 445 yards</div>
                  </div>
                  <p className="text-slate-600">
                    A dramatic dogleg right with elevated tees overlooking the valley, demanding strategic placement off the tee.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400)` }}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">Hole 18</h4>
                    <div className="text-green-600 font-semibold">Par 5 • 520 yards</div>
                  </div>
                  <p className="text-slate-600">
                    A spectacular finishing hole with water guarding the green and the clubhouse providing a stunning backdrop.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Culinary Excellence
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our award-winning dining program features locally-sourced ingredients and expertly crafted dishes in an elegant atmosphere overlooking the 18th green.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Fine Dining Restaurant</div>
                    <div className="text-slate-300">Elegant atmosphere with panoramic course views and seasonal menus featuring locally-sourced cuisine.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-coffee text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Casual Grill & Bar</div>
                    <div className="text-slate-300">Relaxed setting perfect for post-round refreshments with classic favorites and craft beverages.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-glass-cheers text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Private Events</div>
                    <div className="text-slate-300">Customized catering for weddings, corporate events, and special celebrations.</div>
                  </div>
                </div>
              </div>
              
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
                View Dining Menu
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Restaurant"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">4.8★</div>
                <div className="text-sm font-medium">Dining Rating</div>
                <div className="text-xs text-slate-600 mt-1">200+ Reviews</div>
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
                    <i className="fas fa-map-marker-alt text-green-600 mt-1"></i>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <div className="text-slate-600">{business.contact?.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-phone text-green-600 mt-1"></i>
                    <div>
                      <div className="font-semibold text-slate-900">Pro Shop</div>
                      <div className="text-slate-600">{business.contact?.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-envelope text-green-600 mt-1"></i>
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
                  <div className="flex justify-between">
                    <span>Restaurant</span>
                    <span>11:00 AM - 9:00 PM</span>
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
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                        <input type="date" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                          <option>Morning (7:00 AM - 11:00 AM)</option>
                          <option>Afternoon (11:00 AM - 3:00 PM)</option>
                          <option>Evening (3:00 PM - 7:00 PM)</option>
                        </select>
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
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
                      <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Cart rental, dining reservations, etc."></textarea>
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
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#course" className="hover:text-white transition-colors">Course Info</a></li>
                <li><a href="#dining" className="hover:text-white transition-colors">Dining</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pro Shop</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <div>{business.contact?.address}</div>
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