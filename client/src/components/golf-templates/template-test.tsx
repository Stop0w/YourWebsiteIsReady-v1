import { Business } from "@shared/schema";

interface TestTemplateProps {
  business: Business;
}

export default function TestTemplate({ business }: TestTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-600 text-white p-8">
        <h1 className="text-4xl font-bold">{business.name}</h1>
        <p className="text-xl mt-2">{business.tagline}</p>
      </header>
      
      <main className="p-8">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Our Club</h2>
          <p className="text-lg text-slate-600 mb-8">{business.description}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">18 Holes</h3>
              <p className="text-slate-600">Championship Course</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Par 72</h3>
              <p className="text-slate-600">Professional Layout</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">6,800 Yards</h3>
              <p className="text-slate-600">Total Distance</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Address:</span> {business.contact?.address || business.location}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> {business.contact?.phone}
                </div>
                <div>
                  <span className="font-semibold">Email:</span> {business.contact?.email}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white p-8 mt-16">
        <div className="text-center">
          <p>&copy; 2024 {business.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}