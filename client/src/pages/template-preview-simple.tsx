import { useParams } from "wouter";

export default function TemplatePreviewSimple() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">TEMPLATE PREVIEW TEST</h1>
      <div className="space-y-2">
        <p><strong>Business Slug:</strong> {params.businessSlug}</p>
        <p><strong>Template Number:</strong> {params.templateNumber}</p>
        <p><strong>URL Path:</strong> /{params.businessSlug}/website-{params.templateNumber}</p>
      </div>
      <div className="mt-8 p-4 bg-green-100 rounded">
        <p className="text-green-800">If you can see this, the routing is working correctly!</p>
      </div>
    </div>
  );
}