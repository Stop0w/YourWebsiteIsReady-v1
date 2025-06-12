import { Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Template4Props {
  business: Business;
}

export default function GolfTemplate4Premium({ business }: Template4Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Luxury Header */}
      <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{business.name.split(' ')[0]}</div>
                  <div className="text-xs text-slate-600 uppercase tracking-widest">Golf Club</div>
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-10">
              <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#experience" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Experience</a>
              <a href="#amenities" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Amenities</a>
              <a href="#membership" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Membership</a>
              <a href="#concierge" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Concierge</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                Member Login
              </Button>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                Reserve Experience
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Luxury Hero Section */}
      <section id="home" className="relative">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Content Side */}
          <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
            <div className="max-w-xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                  <i className="fas fa-star text-amber-500 mr-2"></i>
                  <span className="text-amber-800 text-sm font-medium">Exclusive Private Club</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {business.name}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {business.tagline || "An unparalleled luxury golf experience where every detail is crafted for discerning members who appreciate excellence"}
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg font-semibold">
                  Explore Membership
                </Button>
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                  Schedule Private Tour
                </Button>
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600 mb-1">1925</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Est.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600 mb-1">Private</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Club</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600 mb-1">Elite</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative">
            <div 
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">18</div>
                    <div className="text-sm text-slate-600">Championship Holes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">7,200</div>
                    <div className="text-sm text-slate-600">Signature Yards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-50 rounded-full mb-6">
              <i className="fas fa-gem text-amber-600 mr-2"></i>
              <span className="text-amber-800 text-sm font-medium">The Premium Experience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Redefining Golf Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {business.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
              <div className="bg-amber-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-concierge-bell text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Concierge</h3>
              <p className="text-slate-600 leading-relaxed">
                Dedicated personal service from arrival to departure, ensuring every detail of your experience exceeds expectations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl">
              <div className="bg-slate-700 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-utensils text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Michelin-Level Dining</h3>
              <p className="text-slate-600 leading-relaxed">
                Award-winning culinary program featuring world-class chefs and sommelier-curated wine selections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="bg-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-golf-ball text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Championship Course</h3>
              <p className="text-slate-600 leading-relaxed">
                Meticulously maintained to tournament standards with premium equipment and personalized instruction available.
              </p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-amber-400 text-4xl mb-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <blockquote className="text-2xl font-light italic mb-8 leading-relaxed">
                "This isn't just a golf club – it's a sanctuary where every detail has been thoughtfully curated to create moments of pure excellence. The level of service and attention to detail is simply unmatched."
              </blockquote>
              <div className="border-t border-slate-700 pt-8">
                <div className="font-semibold text-lg">James Richardson</div>
                <div className="text-slate-400">Founding Member since 1998</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Exclusive Amenities</h2>
            <p className="text-xl text-slate-600">Immerse yourself in luxury at every turn</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">World-Class Facilities</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our facilities represent the pinnacle of luxury golf amenities, designed to provide an unparalleled experience for our distinguished members.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-spa text-amber-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Luxury Spa & Wellness</h4>
                    <p className="text-slate-600">Full-service spa with massage therapy, fitness center, and wellness programs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-swimmer text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Resort Pool & Cabanas</h4>
                    <p className="text-slate-600">Infinity pool overlooking the course with private cabanas and poolside service.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-glass-whiskey text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Private Wine Cellar</h4>
                    <p className="text-slate-600">Curated collection of rare vintages with private tasting experiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Private Event Spaces</h4>
                    <p className="text-slate-600">Elegant venues for corporate events, weddings, and exclusive gatherings.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1566835904095-242e7e63c530?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Luxury Amenity"
                    className="rounded-2xl shadow-lg object-cover w-full h-48"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Pool Area"
                    className="rounded-2xl shadow-lg object-cover w-full h-32"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Dining"
                    className="rounded-2xl shadow-lg object-cover w-full h-32"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Luxury Interior"
                    className="rounded-2xl shadow-lg object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Exclusive Membership</h2>
            <p className="text-xl mb-12 text-amber-100 leading-relaxed">
              Membership at {business.name} is by invitation only, limited to those who share our passion for excellence and appreciate the finest things in life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Limited</div>
                <div className="text-amber-200">Exclusive Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Invitation</div>
                <div className="text-amber-200">Only Membership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Lifetime</div>
                <div className="text-amber-200">Privileges</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Membership Includes</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Unlimited championship golf</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Personal concierge service</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Priority tee time reservations</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Exclusive member events</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Full dining and spa access</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Guest privileges and reciprocals</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Private locker room access</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-amber-200 mr-3"></i>
                    <span>Complimentary equipment storage</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-10 py-4 text-lg font-semibold">
              Request Membership Information
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience Excellence</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Discover what sets {business.name} apart from every other golf experience. Contact our membership team to arrange a private tour.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-amber-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Membership Services</div>
                    <div className="text-slate-600">{business.contact?.phone}</div>
                    <div className="text-sm text-slate-500 mt-1">Available 7 days a week</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-amber-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Private Inquiries</div>
                    <div className="text-slate-600">{business.contact?.email}</div>
                    <div className="text-sm text-slate-500 mt-1">Confidential membership consultation</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-amber-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Club Location</div>
                    <div className="text-slate-600">{business.contact?.address}</div>
                    <div className="text-sm text-slate-500 mt-1">Private entrance and valet parking</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-2xl p-6">
                <h4 className="font-bold text-slate-900 mb-3">Exclusive Preview</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Schedule a private tour to experience our world-class facilities and meet with our membership team.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                  Schedule Private Tour
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Membership Inquiry</h3>
                  <p className="text-amber-100">Begin your journey to exclusive membership</p>
                </div>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                        <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Current Golf Club (if applicable)</label>
                      <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Interest Level</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600">
                        <option>Exploring membership options</option>
                        <option>Ready to begin application process</option>
                        <option>Request immediate consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                      <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="Tell us about your golf background and what you're looking for in a club experience..."></textarea>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 text-lg font-semibold">
                      Submit Confidential Inquiry
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center">
                      Your information will be kept strictly confidential and used only for membership consultation purposes.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold">{business.name.split(' ')[0]}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Golf Club</div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Where luxury meets tradition. An exclusive sanctuary for those who demand nothing less than perfection in their golf experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-facebook text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Club Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Membership Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Golf Instruction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spa Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Private Contact</h4>
              <div className="space-y-3 text-slate-300">
                <div>{business.contact?.phone}</div>
                <div>{business.contact?.email}</div>
                <div>{business.location}</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              &copy; 2024 {business.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Membership Terms</a>
              <a href="#" className="hover:text-white transition-colors">Club Rules</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}