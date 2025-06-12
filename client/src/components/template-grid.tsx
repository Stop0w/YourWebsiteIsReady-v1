import { useQuery } from "@tanstack/react-query";
import { Template } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface TemplateGridProps {
  businessSlug: string;
  category: string;
}

export default function TemplateGrid({ businessSlug, category }: TemplateGridProps) {
  const { data: templates, isLoading } = useQuery<Template[]>({
    queryKey: ['/api/templates', category],
    enabled: !!category,
  });

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-[4/3] bg-slate-200 animate-pulse"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-slate-200 rounded animate-pulse mb-2"></div>
              <div className="h-3 bg-slate-200 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates?.map((template) => (
        <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
          <div className="aspect-[4/3] relative overflow-hidden">
            <img 
              src={`${template.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`}
              alt={template.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">{template.name}</h3>
              <p className="text-sm opacity-90">{template.theme}</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Template {template.templateNumber}
              </span>
              <Link href={`/${businessSlug}/website-${template.templateNumber}`}>
                <Button 
                  size="sm" 
                  className={`${
                    category === 'golfclub' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  } text-white`}
                >
                  Preview
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
