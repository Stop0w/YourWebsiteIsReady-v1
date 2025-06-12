import { Template, Business } from "@shared/schema";
import { Card } from "@/components/ui/card";
import GolfTemplate1Classic from "@/components/golf-templates/template-1-classic";
import GolfTemplate2Modern from "@/components/golf-templates/template-2-modern";
import GolfTemplate3Scenic from "@/components/golf-templates/template-3-scenic";
import GolfTemplate4Premium from "@/components/golf-templates/template-4-premium";

interface TemplatePreviewProps {
  template: Template;
  business: Business;
}

export default function TemplatePreview({ template, business }: TemplatePreviewProps) {
  const renderGolfTemplate = () => {
    if (business.category !== 'golfclub') {
      // For non-golf categories, show the simple preview
      return (
        <div className="relative">
          <div 
            className="h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${template.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800)` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-4">{business.name}</h1>
                <p className="text-xl mb-8">{business.tagline}</p>
                <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-md">
                  Get Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Render the appropriate golf template based on template number
    switch (template.templateNumber) {
      case 1:
        return <GolfTemplate1Classic business={business} />;
      case 2:
        return <GolfTemplate2Modern business={business} />;
      case 3:
        return <GolfTemplate3Scenic business={business} />;
      case 4:
        return <GolfTemplate4Premium business={business} />;
      default:
        return <GolfTemplate1Classic business={business} />;
    }
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
      <div className="relative max-h-[600px] overflow-hidden">
        {renderGolfTemplate()}
      </div>
    </Card>
  );
}
