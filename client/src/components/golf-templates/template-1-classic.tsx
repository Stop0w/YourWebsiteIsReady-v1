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
      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{business.name}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {business.tagline || "Experience Championship Golf in Beautiful Surroundings"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Book Your Round
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Course Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Welcome to Excellence</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {business.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                  <div className="text-slate-600">Championship Holes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">72</div>
                  <div className="text-slate-600">Par Course</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">6,500</div>
                  <div className="text-slate-600">Total Yards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1925</div>
                  <div className="text-slate-600">Established</div>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Learn More About Our History
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Golf Course"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">4.8/5</div>
                <div className="text-sm text-slate-600">Member Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section id="course" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Course Features</h2>
            <p className="text-xl text-slate-600">Discover what makes our course special</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-flag text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Championship Design</h3>
                <p className="text-slate-600">
                  Designed by renowned architect, our course challenges players while rewarding strategic thinking and precise shot-making.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-leaf text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pristine Conditions</h3>
                <p className="text-slate-600">
                  Meticulously maintained fairways and greens ensure optimal playing conditions year-round with our dedicated grounds crew.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-mountain text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Scenic Views</h3>
                <p className="text-slate-600">
                  Breathtaking vistas from every hole, with natural water features and mature trees creating a truly memorable experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Visit Us Today</h2>
              <p className="text-lg text-slate-600 mb-8">
                Experience the difference at {business.name}. Contact us to schedule a round or learn more about membership opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Address</div>
                    <div className="text-slate-600">{business.contact?.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">{business.contact?.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">{business.contact?.email}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Book a Round</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Number of Players</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
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
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{business.name.split(' ')[0]}</h3>
              <p className="text-slate-300 mb-4">
                Experience championship golf in beautiful surroundings.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#course" className="hover:text-white">Course</a></li>
                <li><a href="#membership" className="hover:text-white">Membership</a></li>
                <li><a href="#events" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Pro Shop</a></li>
                <li><a href="#" className="hover:text-white">Lessons</a></li>
                <li><a href="#" className="hover:text-white">Restaurant</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
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
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center text-slate-400">
            <p>&copy; 2024 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}