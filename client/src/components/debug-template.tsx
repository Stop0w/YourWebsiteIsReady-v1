import { Business } from "@shared/schema";

interface DebugTemplateProps {
  business: Business;
}

export default function DebugTemplate({ business }: DebugTemplateProps) {
  console.log("DebugTemplate rendering with business:", business);
  
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-green-600">DEBUG TEMPLATE</h1>
      <div className="mt-4 space-y-2">
        <p><strong>Business Name:</strong> {business?.name || 'NO NAME'}</p>
        <p><strong>Business Slug:</strong> {business?.slug || 'NO SLUG'}</p>
        <p><strong>Category:</strong> {business?.category || 'NO CATEGORY'}</p>
        <p><strong>Location:</strong> {business?.location || 'NO LOCATION'}</p>
      </div>
      <div className="mt-8 p-4 bg-green-100 rounded">
        <p className="text-green-800">If you can see this, the template is working correctly!</p>
      </div>
    </div>
  );
}