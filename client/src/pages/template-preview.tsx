import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Business, Template } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GolfTemplate1Classic from "@/components/golf-templates/template-1-classic";
import GolfTemplate2Modern from "@/components/golf-templates/template-2-modern";
import GolfTemplate3Scenic from "@/components/golf-templates/template-3-scenic";
import GolfTemplate4Premium from "@/components/golf-templates/template-4-premium";
import TestTemplate from "@/components/golf-templates/template-test";
import DebugTemplate from "@/components/debug-template";

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
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!business || !template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="p-8 text-center max-w-md">
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

  // For golf templates, render the full template directly
  if (business.category === 'golfclub') {
    const renderTemplate = () => {
      // Temporarily use test template to verify routing works
      return <TestTemplate business={business} />;
    };

    return (
      <div className="min-h-screen">
        {/* Template Navigation Overlay */}
        <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4">
          <div className="text-xs text-slate-600 mb-2">Template Navigation</div>
          <div className="flex gap-2">
            {templates?.map((t) => (
              <Link 
                key={t.id} 
                href={`/${business.slug}/website-${t.templateNumber}`}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                  t.templateNumber === template.templateNumber
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.templateNumber}
              </Link>
            ))}
          </div>
          <Link href={`/${business.slug}`}>
            <Button size="sm" variant="outline" className="mt-2 w-full text-xs">
              Back to Overview
            </Button>
          </Link>
        </div>
        
        {renderTemplate()}
      </div>
    );
  }

  // For other categories, show a basic preview
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{business.name}</h1>
          <p className="text-slate-600 mb-8">{business.description}</p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${template.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-white">
                  <h1 className="text-5xl font-bold mb-4">{business.name}</h1>
                  <p className="text-xl mb-8">{business.tagline}</p>
                  <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-md inline-block">
                    Get Quote
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <Link href={`/${business.slug}`}>
              <Button variant="outline">Back to Templates</Button>
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Claim This Website
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}