import { useParams } from "wouter";

export default function TemplateViewer() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  const templateNumber = parseInt(params.templateNumber || '1');
  const businessSlug = params.businessSlug || 'unknown';

  // Simple test pages to confirm routing works
  const renderTestTemplate = () => {
    switch (templateNumber) {
      case 1:
        return (
          <div className="min-h-screen bg-green-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-green-800 mb-4">Golf Template 1</h1>
              <p className="text-xl text-green-600 mb-2">Classic Golf Template</p>
              <p className="text-lg text-gray-600">Business: {businessSlug}</p>
              <p className="text-sm text-gray-500 mt-4">This is a test page to confirm routing works</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">Golf Template 2</h1>
              <p className="text-xl text-blue-600 mb-2">Modern Golf Template</p>
              <p className="text-lg text-gray-600">Business: {businessSlug}</p>
              <p className="text-sm text-gray-500 mt-4">This is a test page to confirm routing works</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-yellow-800 mb-4">Golf Template 3</h1>
              <p className="text-xl text-yellow-600 mb-2">Scenic Golf Template</p>
              <p className="text-lg text-gray-600">Business: {businessSlug}</p>
              <p className="text-sm text-gray-500 mt-4">This is a test page to confirm routing works</p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="min-h-screen bg-purple-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-purple-800 mb-4">Golf Template 4</h1>
              <p className="text-xl text-purple-600 mb-2">Premium Golf Template</p>
              <p className="text-lg text-gray-600">Business: {businessSlug}</p>
              <p className="text-sm text-gray-500 mt-4">This is a test page to confirm routing works</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Template Not Found</h1>
              <p className="text-xl text-gray-600">Template {templateNumber} does not exist</p>
            </div>
          </div>
        );
    }
  };

  return renderTestTemplate();
}