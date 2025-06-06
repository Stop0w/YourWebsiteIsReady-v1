import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Business, Service } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const params = useParams<{ businessSlug: string }>();
  
  const { data: business, isLoading: businessLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  const { data: services, isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const isLoading = businessLoading || servicesLoading;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="bg-white rounded-xl border p-8 mb-8">
            <div className="h-12 bg-slate-200 rounded mb-4"></div>
            <div className="h-6 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Business Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Business Header */}
      <Card className="p-8 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
            business.category === 'golfclub' ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <i className={`fas fa-${
              business.category === 'golfclub' ? 'golf-ball' : 'hammer'
            } text-white text-2xl`}></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{business.name}</h1>
            <p className="text-slate-600">Services & Pricing</p>
          </div>
        </div>
        
        <p className="text-lg text-slate-600">
          Everything you need to get your professional website online and keep it running smoothly.
        </p>
      </Card>

      {/* Services Overview */}
      <div className="mb-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Service Offerings</h2>
          <p className="text-xl text-slate-600">What's included when you claim your website</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <Card key={service.id} className={`${service.popular ? 'border-2 border-slate-800 relative' : ''}`}>
              {service.popular && (
                <div className="absolute -top-2 left-4 bg-slate-800 text-white text-xs px-2 py-1 rounded">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <div className={`bg-slate-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 ${
                  service.popular ? 'bg-slate-800' : ''
                }`}>
                  <i className={`fas fa-${
                    ['server', 'edit', 'globe'][index]
                  } ${service.popular ? 'text-white' : 'text-slate-600'} text-2xl`}></i>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3 text-slate-600 mb-6">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-1">${service.price}</div>
                  <div className="text-slate-600">per {service.interval}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Business-Specific Package */}
      <Card className="p-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Recommended Package for {business.name}
          </h3>
          <p className="text-slate-600">Customized pricing and services for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`p-6 border-2 ${
            business.category === 'golfclub' 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <h4 className={`text-lg font-semibold mb-4 ${
              business.category === 'golfclub' ? 'text-green-800' : 'text-red-800'
            }`}>
              Complete Package
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Professional Website</span>
                <span className="font-medium text-slate-800">Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Hosting & SSL</span>
                <span className="font-medium text-slate-800">$29/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Monthly Updates</span>
                <span className="font-medium text-slate-800">$30/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Custom Domain</span>
                <span className="font-medium text-slate-800">$30/month</span>
              </div>
              <div className={`border-t pt-3 flex justify-between ${
                business.category === 'golfclub' ? 'border-green-200' : 'border-red-200'
              }`}>
                <span className="font-semibold text-slate-800">Total Monthly</span>
                <span className={`font-bold text-xl ${
                  business.category === 'golfclub' ? 'text-green-600' : 'text-red-600'
                }`}>
                  $89
                </span>
              </div>
            </div>
            <Button 
              className={`w-full ${
                business.category === 'golfclub' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              } text-white font-semibold`}
            >
              Claim This Package
            </Button>
          </Card>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Get Started Today</h4>
              <div className="space-y-4">
                <Card className="p-4 bg-slate-50">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-slate-600 mr-3"></i>
                    <div>
                      <div className="font-medium text-slate-800">Call Us</div>
                      <div className="text-slate-600">1800 ITS DONE</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-slate-50">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-slate-600 mr-3"></i>
                    <div>
                      <div className="font-medium text-slate-800">Email</div>
                      <div className="text-slate-600">claim@itsdone.com.au</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-slate-50">
                  <div className="flex items-center">
                    <i className="fas fa-calendar text-slate-600 mr-3"></i>
                    <div>
                      <div className="font-medium text-slate-800">Book a Call</div>
                      <div className="text-slate-600">15-minute setup consultation</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="p-8 mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">How quickly can I claim my website?</h4>
            <p className="text-slate-600 text-sm">
              Your website is already built! You can claim it and go live within 24 hours.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Can I customize the design?</h4>
            <p className="text-slate-600 text-sm">
              Yes! You can update colors, images, content, and branding to match your business.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">What if I want to cancel?</h4>
            <p className="text-slate-600 text-sm">
              No long-term contracts. You can cancel anytime with 30 days notice.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Do you provide support?</h4>
            <p className="text-slate-600 text-sm">
              Yes! All packages include 24/7 technical support and monthly content updates.
            </p>
          </div>
        </div>
      </Card>

      {/* Back to Templates */}
      <div className="text-center">
        <Link href={`/${business.slug}`}>
          <Button variant="outline" className="mr-4">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Templates
          </Button>
        </Link>
        <Button 
          className={`${
            business.category === 'golfclub' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-red-600 hover:bg-red-700'
          } text-white`}
        >
          Claim Your Website Now
        </Button>
      </div>
    </div>
  );
}
