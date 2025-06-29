import { useQuery } from "@tanstack/react-query";
import { Business } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CategoryShowcase() {
  const { data: businesses, isLoading } = useQuery<Business[]>({
    queryKey: ['/api/businesses'],
  });

  const golfBusinesses = businesses?.filter(b => b.category === 'golfclub') || [];
  const tradesmanBusinesses = businesses?.filter(b => b.category === 'tradesman') || [];

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-2 gap-12">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded mb-4"></div>
              <div className="h-20 bg-slate-200 rounded mb-6"></div>
              <div className="h-10 bg-slate-200 rounded"></div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <>
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Golf Clubs Category */}
      <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-600 text-white rounded-lg p-3 mr-4">
              <i className="fas fa-golf-ball text-2xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Golf Clubs</h3>
              <p className="text-slate-600">Elegant designs for golf courses and clubs</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-slate-800 mb-3">Template Features:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <i className="fas fa-check text-green-600 mr-2"></i>
                Scenic course photography
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-600 mr-2"></i>
                Booking integration ready
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-600 mr-2"></i>
                Course information displays
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-600 mr-2"></i>
                Event scheduling sections
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-slate-800 mb-3">Example Businesses:</h4>
            <div className="space-y-2">
              {golfBusinesses.slice(0, 2).map((business) => (
                <Link key={business.id} href={`/${business.slug}`}>
                  <div className="text-green-700 hover:text-green-800 text-sm font-medium">
                    {business.name} - {business.location}
                  </div>
                </Link>
              ))}
            </div>
          </div>



          <Link href="/cumnockgolfclub">
            <Button className="bg-green-600 text-white hover:bg-green-700 w-full">
              View Golf Club Examples
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Tradesmen Category */}
      <Card className="bg-gradient-to-br from-red-50 to-white border-red-100">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="bg-red-600 text-white rounded-lg p-3 mr-4">
              <i className="fas fa-hammer text-2xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Tradesmen</h3>
              <p className="text-slate-600">Professional sites for service providers</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-slate-800 mb-3">Template Features:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <i className="fas fa-check text-red-600 mr-2"></i>
                Service area mapping
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-red-600 mr-2"></i>
                Customer testimonials
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-red-600 mr-2"></i>
                Emergency contact forms
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-red-600 mr-2"></i>
                License & certification display
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-slate-800 mb-3">Example Businesses:</h4>
            <div className="space-y-2">
              {tradesmanBusinesses.slice(0, 2).map((business) => (
                <Link key={business.id} href={`/${business.slug}`}>
                  <div className="text-red-700 hover:text-red-800 text-sm font-medium">
                    {business.name} - {business.location}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/abcplumbing">
            <Button className="bg-red-600 text-white hover:bg-red-700 w-full">
              View Tradesman Examples
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
