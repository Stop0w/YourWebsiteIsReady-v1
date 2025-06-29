import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Business } from "@shared/schema";

// Import all four golf templates
import GolfTemplate1Classic from "@/components/golf-templates/template-1-classic";
import GolfTemplate2Modern from "@/components/golf-templates/template-2-modern";
import GolfTemplate3Scenic from "@/components/golf-templates/template-3-scenic";
import GolfTemplate4Premium from "@/components/golf-templates/template-4-premium";

export default function TemplateViewer() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const { data: business, isLoading: businessLoading } = useQuery<Business>({
    queryKey: [`/api/businesses/${params.businessSlug}`],
    enabled: !!params.businessSlug,
  });

  const templateNumber = parseInt(params.templateNumber || '1');

  if (businessLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading golf course...</p>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Golf Course Not Found</h1>
          <p className="text-slate-600 mb-6">The golf course you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Render the appropriate golf template based on template number
  const renderTemplate = () => {
    switch (templateNumber) {
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

  return renderTemplate();
}