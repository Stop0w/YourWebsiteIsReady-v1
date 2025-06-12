import { Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Template2Props {
  business: Business;
}

export default function GolfTemplate2Modern({ business }: Template2Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Modern Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <i className="fas fa-golf-ball text-white text-lg"></i>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                {business.name.split(' ')[0]}
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#facilities" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Facilities</a>
              <a href="#membership" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Membership</a>
              <a href="#events" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Events</a>
              <a href="#contact" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
              Book Tee Time
            </Button>
          </div>
        </div>
      </header>

      {/* Split Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium">
                  Championship Golf Course
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  {business.name}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  {business.tagline || "Where modern design meets timeless tradition in the heart of championship golf"}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg shadow-lg">
                  Reserve Your Round
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                  Virtual Tour
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Holes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Par 72</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Course</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">6.5K</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Yards</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750"
                  alt="Golf Course"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">500+ Members</div>
                    <div className="text-xs text-slate-600">Active Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Cards */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Modern Golf Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {business.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Award Winning Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  Recognized as one of the top championship courses in the region, featuring strategic design that challenges every skill level.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Staff</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team of PGA professionals and certified instructors are dedicated to helping you improve your game and enjoy every round.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-star text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Amenities</h3>
                <p className="text-slate-600 leading-relaxed">
                  From our state-of-the-art practice facility to our elegant clubhouse, every detail is designed for your comfort and enjoyment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section id="facilities" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">World-Class Facilities</h2>
            <p className="text-xl text-slate-600">Experience the finest amenities designed for the modern golfer</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Championship Course</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our meticulously maintained 18-hole championship course features bentgrass fairways, strategic bunkering, and pristine greens that provide a challenging yet fair test of golf for players of all abilities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">6,847</div>
                  <div className="text-sm text-slate-600">Championship Tees</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">72.4</div>
                  <div className="text-sm text-slate-600">Course Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Golf Course"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <i className="fas fa-utensils text-green-600 text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Fine Dining</h4>
              <p className="text-slate-600">
                Award-winning cuisine in our elegant dining room with panoramic course views and outdoor terrace seating.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <i className="fas fa-dumbbell text-blue-600 text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Fitness Center</h4>
              <p className="text-slate-600">
                State-of-the-art fitness facility with golf-specific training equipment and certified personal trainers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <i className="fas fa-swimming-pool text-purple-600 text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Pool & Spa</h4>
              <p className="text-slate-600">
                Resort-style pool area with spa services for relaxation after your round, perfect for family enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section id="membership" className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100">
            Discover the benefits of membership at {business.name}. From unlimited golf to exclusive events, our membership offers unparalleled value and experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Unlimited</div>
              <div className="text-green-200">Golf Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-200">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5-Star</div>
              <div className="text-green-200">Dining Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
              Explore Membership
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg">
              Schedule Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600">
                  Ready to experience {business.name}? Contact us today to book your round or learn more about membership opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Course Location</div>
                    <div className="text-slate-600">{business.contact?.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Pro Shop</div>
                    <div className="text-slate-600">{business.contact?.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email Us</div>
                    <div className="text-slate-600">{business.contact?.email}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Experience</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
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
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Additional Requests</label>
                      <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg font-semibold">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                  <i className="fas fa-golf-ball text-white text-lg"></i>
                </div>
                <div className="text-2xl font-bold">{business.name.split(' ')[0]}</div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Where modern design meets championship golf. Experience the future of golf course excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-facebook text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-slate-300">
                <div>{business.contact?.phone}</div>
                <div>{business.contact?.email}</div>
                <div>{business.location}</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}