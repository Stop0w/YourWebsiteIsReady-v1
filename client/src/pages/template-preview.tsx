import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Business, Template } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TemplatePreview from "@/components/template-preview";

export default function TemplatePreviewPage() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading: businessLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  const { data: templates, isLoading: templatesLoading } = useQuery<Template[]>({
    queryKey: ['/api/templates', business?.category],
    enabled: !!business?.category,
  });

  const template = templates?.find(t => t.templateNumber === parseInt(params.templateNumber || '1'));
  
  const isLoading = businessLoading || templatesLoading;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="bg-white rounded-xl border p-8 mb-8">
            <div className="h-12 bg-slate-200 rounded mb-4"></div>
            <div className="h-96 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!business || !template) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Template Not Found</h1>
          <p className="text-slate-600 mb-6">
            The template you're looking for doesn't exist.
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
      {/* Template Header */}
      <Card className="p-6 mb-8">
        <div className={`bg-gradient-to-r ${
          business.category === 'golfclub' 
            ? 'from-green-600 to-green-700' 
            : 'from-red-600 to-red-700'
        } text-white p-6 rounded-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                {business.name} - {template.name}
              </h1>
              <p className="text-white/80">
                itsdone.com.au/{business.slug}/website-{template.templateNumber}
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                <i className="fas fa-eye mr-2"></i>Preview
              </Button>
              <Button className="bg-white text-slate-900 hover:bg-slate-50">
                Claim This Website
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Template Navigation */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Template Options</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-500">Preview:</span>
            <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
              <button className="px-3 py-1 text-sm font-medium bg-white text-slate-900 rounded-md shadow-sm">
                <i className="fas fa-desktop mr-1"></i> Desktop
              </button>
              <button className="px-3 py-1 text-sm font-medium text-slate-500 hover:text-slate-700">
                <i className="fas fa-mobile-alt mr-1"></i> Mobile
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 mb-6 overflow-x-auto">
          {templates?.map((t) => (
            <Link key={t.id} href={`/${business.slug}/website-${t.templateNumber}`}>
              <Button 
                variant={t.id === template.id ? "default" : "secondary"}
                size="sm"
                className={`flex-shrink-0 ${
                  t.id === template.id 
                    ? (business.category === 'golfclub' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-red-600 hover:bg-red-700')
                    : ''
                }`}
              >
                Template {t.templateNumber}: {t.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <TemplatePreview template={template} business={business} />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="font-semibold text-slate-900">Like this template?</p>
            <p className="text-sm text-slate-600">Claim your website in under 5 minutes</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              View Full Page
            </Button>
            <Button 
              className={`${
                business.category === 'golfclub' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              } text-white font-semibold`}
            >
              Claim This Website
            </Button>
          </div>
        </div>
      </Card>

      {/* Template Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Template Features</h3>
          <div className="space-y-3">
            {template.features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-5 h-5 ${
                  business.category === 'golfclub' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                } rounded-full flex items-center justify-center`}>
                  <i className="fas fa-check text-xs"></i>
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Customize This Template</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-800 mb-2">What You Can Change:</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Business name and contact information</li>
                <li>• Colors and branding</li>
                <li>• Photos and images</li>
                <li>• Content and descriptions</li>
                <li>• Services and pricing</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Link href={`/${business.slug}/services`}>
                <Button variant="outline" className="w-full">
                  View Pricing & Services
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
