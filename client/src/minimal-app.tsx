import { useQuery } from "@tanstack/react-query";
import { Business } from "@shared/schema";

// Import golf templates
import GolfTemplate1Classic from "./components/golf-templates/template-1-classic";
import GolfTemplate2Modern from "./components/golf-templates/template-2-modern";
import GolfTemplate3Scenic from "./components/golf-templates/template-3-scenic";
import GolfTemplate4Premium from "./components/golf-templates/template-4-premium";

export default function MinimalApp() {
  const path = window.location.pathname;
  
  // Parse URL to extract business slug and template number
  const match = path.match(/^\/([^\/]+)\/website-(\d+)$/);
  
  if (match) {
    const [, businessSlug, templateNumber] = match;
    
    const { data: business, isLoading } = useQuery<Business>({
      queryKey: [`/api/businesses/${businessSlug}`],
    });

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p>Loading golf course...</p>
          </div>
        </div>
      );
    }

    if (!business) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Golf Course Not Found</h1>
            <a href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    const templateNum = parseInt(templateNumber);
    
    switch (templateNum) {
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
  }

  // Homepage
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">It's Done</h1>
          <p className="text-xl text-gray-600 mb-8">Your Professional Website is Ready</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Golf Course Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Template {num}</h3>
                <p className="text-gray-600 mb-4">
                  {num === 1 && "Classic Green Theme"}
                  {num === 2 && "Ocean Blue Theme"}
                  {num === 3 && "Autumn Gold Theme"}
                  {num === 4 && "Royal Purple Theme"}
                </p>
                <a
                  href={`/cumnockgolfclub/website-${num}`}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  View Template
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}