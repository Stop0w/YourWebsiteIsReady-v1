import { Business } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface BusinessHeaderProps {
  business: Business;
}

export default function BusinessHeader({ business }: BusinessHeaderProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'golfclub':
        return 'bg-green-100 text-green-800';
      case 'tradesman':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'golfclub':
        return 'fas fa-golf-ball';
      case 'tradesman':
        return 'fas fa-hammer';
      default:
        return 'fas fa-building';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'golfclub':
        return 'Golf Club';
      case 'tradesman':
        return 'Tradesman';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              business.category === 'golfclub' ? 'bg-green-600' : 'bg-red-600'
            }`}>
              <i className={`${getCategoryIcon(business.category)} text-white text-lg`}></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{business.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getCategoryColor(business.category)}>
                  {getCategoryName(business.category)}
                </Badge>
                {business.location && (
                  <>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{business.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            {business.description}
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <div className={`text-white px-8 py-4 rounded-xl text-center ${
            business.category === 'golfclub' 
              ? 'bg-gradient-to-r from-green-600 to-green-700' 
              : 'bg-gradient-to-r from-red-600 to-red-700'
          }`}>
            <p className="text-sm font-medium opacity-90">Already Built For You</p>
            <p className="text-2xl font-bold">4 Website Options</p>
            <p className="text-sm opacity-90">Ready to Claim</p>
          </div>
        </div>
      </div>
    </div>
  );
}
