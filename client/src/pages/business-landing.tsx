import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Business } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BusinessHeader from "@/components/business-header";
import TemplateGrid from "@/components/template-grid";

export default function BusinessLanding() {
  const params = useParams<{ businessSlug: string }>();
  
  const { data: business, isLoading, error } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

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

  if (error || !business) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Business Not Found</h1>
          <p className="text-slate-600 mb-6">
            The business you're looking for doesn't exist or hasn't been created yet.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BusinessHeader business={business} />

      {/* Template Selection */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Website Templates</h2>
          <div className="text-sm text-slate-500">Choose your favorite design</div>
        </div>
        <TemplateGrid businessSlug={business.slug} category={business.category} />
      </div>

      {/* Action Buttons */}
      <Card className="p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg text-slate-900">Ready to make this yours?</h3>
            <p className="text-slate-600">Claim your website with hosting, domain, and updates included.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button 
              className={`${
                business.category === 'golfclub' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              } text-white px-6 py-3 font-medium`}
            >
              <i className="fas fa-check mr-2"></i>
              Claim This Website
            </Button>
            <Link href={`/${business.slug}/services`}>
              <Button variant="outline" className="px-6 py-3 font-medium">
                View Services & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* What's Included */}
      <Card className="p-8 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className={`w-12 h-12 ${
              business.category === 'golfclub' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            } rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <i className="fas fa-globe text-xl"></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Custom Domain</h4>
            <p className="text-slate-600 text-sm">Your own professional domain name</p>
          </div>
          
          <div className="text-center">
            <div className={`w-12 h-12 ${
              business.category === 'golfclub' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            } rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <i className="fas fa-server text-xl"></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Fast Hosting</h4>
            <p className="text-slate-600 text-sm">Reliable, high-speed hosting with 99.9% uptime guarantee</p>
          </div>
          
          <div className="text-center">
            <div className={`w-12 h-12 ${
              business.category === 'golfclub' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            } rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <i className="fas fa-edit text-xl"></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Updates Included</h4>
            <p className="text-slate-600 text-sm">Monthly content updates and maintenance included</p>
          </div>
        </div>
      </Card>

      {/* Other Categories */}
      <Card className="bg-slate-900 text-white p-8">
        <h3 className="text-xl font-bold mb-4">See Examples from Other Industries</h3>
        <p className="text-slate-300 mb-6">We create professional websites for businesses across different industries.</p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {business.category !== 'tradesman' && (
            <Link href="/abcplumbing">
              <Card className="bg-slate-800 border-slate-700 hover:border-red-600 transition-colors cursor-pointer p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-wrench text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">ABC Plumbing</h4>
                      <span className="text-sm text-slate-400">Tradesman</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">Professional plumbing services with emergency callouts, testimonials, and service area mapping.</p>
                  <div className="text-red-400 text-sm font-medium">
                    View Example <i className="fas fa-arrow-right ml-1"></i>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}
          
          {business.category !== 'golfclub' && (
            <Link href="/cumnockgolfclub">
              <Card className="bg-slate-800 border-slate-700 hover:border-green-600 transition-colors cursor-pointer p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-golf-ball text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Cumnock Golf Club</h4>
                      <span className="text-sm text-slate-400">Golf Club</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">Elegant golf club website with course information, booking system, and event management.</p>
                  <div className="text-green-400 text-sm font-medium">
                    View Example <i className="fas fa-arrow-right ml-1"></i>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}
          
          <Card className="bg-slate-800 border-slate-700 opacity-75 p-6">
            <CardContent className="p-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-plus text-slate-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300">More Categories</h4>
                  <span className="text-sm text-slate-400">Coming Soon</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Restaurants, fitness centers, professional services, and more.</p>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  );
}
