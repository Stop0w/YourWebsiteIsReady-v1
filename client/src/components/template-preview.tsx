import { Template, Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TemplatePreviewProps {
  template: Template;
  business: Business;
}

export default function TemplatePreview({ template, business }: TemplatePreviewProps) {
  const getCategoryColor = (category: string) => {
    return category === 'golfclub' ? 'green' : 'red';
  };

  return (
    <Card className="overflow-hidden">
      {/* Browser Chrome */}
      <div className="flex items-center space-x-2 bg-slate-100 px-4 py-3 border-b">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-slate-600">
          itsdone.com.au/{business.slug}/website-{template.templateNumber}
        </div>
      </div>

      {/* Template Content */}
      <div className="relative">
        {/* Hero Section */}
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${template.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{business.name}</h1>
              <p className="text-xl mb-8">{business.tagline}</p>
              <Button 
                className={`${
                  getCategoryColor(business.category) === 'green' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700'
                } text-white px-8 py-3 text-lg font-semibold`}
              >
                {business.category === 'golfclub' ? 'Book Your Round' : 'Get Quote'}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-4 left-0 right-0 flex justify-center">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-6 py-3">
            <div className="flex items-center space-x-8">
              <span className={`font-bold ${
                getCategoryColor(business.category) === 'green' ? 'text-green-600' : 'text-red-600'
              }`}>
                {business.name.split(' ')[0]}
              </span>
              <a href="#" className={`text-slate-700 hover:${
                getCategoryColor(business.category) === 'green' ? 'text-green-600' : 'text-red-600'
              }`}>About</a>
              <a href="#" className={`text-slate-700 hover:${
                getCategoryColor(business.category) === 'green' ? 'text-green-600' : 'text-red-600'
              }`}>Services</a>
              <a href="#" className={`text-slate-700 hover:${
                getCategoryColor(business.category) === 'green' ? 'text-green-600' : 'text-red-600'
              }`}>Contact</a>
            </div>
          </div>
        </nav>

        {/* About Section */}
        <div className="px-8 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {business.category === 'golfclub' ? 'Welcome to Excellence' : 'Professional Service You Can Trust'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {business.description}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-8 py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {template.features?.slice(0, 3).map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className={`w-12 h-12 ${
                  getCategoryColor(business.category) === 'green' 
                    ? 'bg-green-600 bg-opacity-10' 
                    : 'bg-red-600 bg-opacity-10'
                } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas fa-${
                    business.category === 'golfclub' 
                      ? ['golf-ball', 'flag', 'trophy'][index] 
                      : ['wrench', 'star', 'clock'][index]
                  } ${
                    getCategoryColor(business.category) === 'green' ? 'text-green-600' : 'text-red-600'
                  } text-xl`}></i>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature}</h3>
                <p className="text-slate-600 text-sm">Professional quality guaranteed</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
