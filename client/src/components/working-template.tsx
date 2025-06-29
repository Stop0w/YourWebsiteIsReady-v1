import { Business } from "@shared/schema";

interface WorkingTemplateProps {
  business: Business;
}

export default function WorkingTemplate({ business }: WorkingTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
        <p className="text-xl">{business.tagline}</p>
        <p className="text-lg mt-2">{business.location}</p>
      </header>
      
      <main className="max-w-6xl mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Our Club</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{business.description}</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">18 Holes</h3>
            <p className="text-slate-600">Championship Course</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Par 72</h3>
            <p className="text-slate-600">Professional Standard</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">6,800 Yards</h3>
            <p className="text-slate-600">Total Distance</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Course Features</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Championship 18-hole course</li>
                <li>• Professional practice facilities</li>
                <li>• Driving range and putting green</li>
                <li>• Golf cart rentals available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Clubhouse</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Restaurant and bar</li>
                <li>• Pro shop with equipment</li>
                <li>• Event and function rooms</li>
                <li>• Locker rooms and amenities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Get in Touch</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Address:</strong> {business.contact?.address || business.location}</p>
                <p><strong>Phone:</strong> {business.contact?.phone}</p>
                <p><strong>Email:</strong> {business.contact?.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Opening Hours</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Monday - Friday:</strong> 6:00 AM - 7:00 PM</p>
                <p><strong>Saturday - Sunday:</strong> 5:30 AM - 8:00 PM</p>
                <p><strong>Public Holidays:</strong> 6:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white p-8 text-center">
        <p>&copy; 2024 {business.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}