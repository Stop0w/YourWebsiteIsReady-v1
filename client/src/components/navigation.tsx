import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Navigation() {
  const [location] = useLocation();
  
  const getBreadcrumb = () => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts.length === 0) return null;
    
    const businessSlug = pathParts[0];
    const page = pathParts[1];
    
    return (
      <nav className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
        <span>itsdone.com.au</span>
        <i className="fas fa-chevron-right text-xs"></i>
        <span className="text-slate-900 font-medium">{businessSlug}</span>
        {page && (
          <>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-slate-600">{page}</span>
          </>
        )}
      </nav>
    );
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-check text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-slate-900">It's Done</span>
              <span className="text-sm text-slate-500 hidden lg:block">
                We've already built it for you.
              </span>
            </Link>
            {getBreadcrumb()}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="#categories" className="text-slate-600 hover:text-slate-800 hidden md:block">
              Categories
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-800 hidden md:block">
              About
            </Link>
            <Button className="bg-slate-800 hover:bg-slate-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
