import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CategoryShowcase from "@/components/category-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              Your Professional Website<br />
              <span className="text-slate-600">Is Already Built</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              We create stunning, professional websites for businesses without web presence. 
              View your preview, claim your site, and go live in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-800 text-white px-8 py-4 text-lg hover:bg-slate-700">
                View Demo Sites
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 px-8 py-4 text-lg hover:bg-slate-50">
                Learn More
              </Button>
            </div>
          </div>

          {/* How It Works */}
          <Card className="p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-slate-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">We Find Your Business</h4>
                <p className="text-slate-600">We research businesses without websites and create custom previews</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-palette text-slate-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">We Build 4 Options</h4>
                <p className="text-slate-600">Multiple professional templates tailored to your industry</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-rocket text-slate-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">You Claim & Launch</h4>
                <p className="text-slate-600">Choose your favorite, claim it, and go live instantly</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Current Categories</h2>
            <p className="text-xl text-slate-600">Specialized templates for different industries</p>
          </div>
          <CategoryShowcase />
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Built for Scale</h2>
            <p className="text-xl text-slate-600">Our modular architecture makes adding new categories effortless</p>
          </div>

          {/* Architecture Overview */}
          <Card className="p-8 mb-12 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Platform Architecture</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">URL Structure</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-slate-600">itsdone.com.au/</div>
                    <div className="text-slate-700 pl-4">[business-slug]/</div>
                    <div className="text-slate-500 pl-8">├── (landing page)</div>
                    <div className="text-slate-500 pl-8">├── website-1</div>
                    <div className="text-slate-500 pl-8">├── website-2</div>
                    <div className="text-slate-500 pl-8">├── website-3</div>
                    <div className="text-slate-500 pl-8">├── website-4</div>
                    <div className="text-slate-500 pl-8">└── services</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">Template System</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-slate-600">templates/</div>
                    <div className="text-slate-700 pl-4">golfclub/</div>
                    <div className="text-slate-500 pl-8">├── website-1</div>
                    <div className="text-slate-500 pl-8">├── website-2</div>
                    <div className="text-slate-500 pl-8">├── ...</div>
                    <div className="text-slate-700 pl-4">tradesman/</div>
                    <div className="text-slate-500 pl-8">├── website-1</div>
                    <div className="text-slate-500 pl-8">├── ...</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">Data Flow</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-slate-600">Business data</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-slate-600">Template engine</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-slate-600">Dynamic rendering</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-slate-600">Category styling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>

          {/* Coming Soon Categories */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Coming Soon</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="opacity-75">
                <CardContent className="p-6">
                  <div className="bg-amber-100 text-amber-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-coffee text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Cafés & Restaurants</h4>
                  <p className="text-sm text-slate-600">Food-focused templates with menus and ambiance</p>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="p-6">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-dumbbell text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Personal Trainers</h4>
                  <p className="text-sm text-slate-600">Fitness-focused with booking and testimonials</p>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="p-6">
                  <div className="bg-green-100 text-green-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-stethoscope text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Medical Practices</h4>
                  <p className="text-sm text-slate-600">Professional healthcare templates</p>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="p-6">
                  <div className="bg-purple-100 text-purple-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-home text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Real Estate</h4>
                  <p className="text-sm text-slate-600">Property showcase and agent profiles</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">It's Done</div>
              <p className="text-slate-300 mb-6 max-w-md">
                We build professional websites for businesses that don't have one yet. 
                Preview your site, claim it, and go live in minutes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>1800 ITS DONE</li>
                <li>claim@itsdone.com.au</li>
                <li>support@itsdone.com.au</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 It's Done. All rights reserved.
            </div>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}