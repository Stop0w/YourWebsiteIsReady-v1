import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Business } from "@shared/schema";

// Import golf templates
import GolfTemplate1Classic from "./golf-templates/template-1-classic";
import GolfTemplate2Modern from "./golf-templates/template-2-modern";
import GolfTemplate3Scenic from "./golf-templates/template-3-scenic";
import GolfTemplate4Premium from "./golf-templates/template-4-premium";

interface TemplatePreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateNumber: number;
  business: Business;
}

export default function TemplatePreviewModal({ 
  open, 
  onOpenChange, 
  templateNumber, 
  business 
}: TemplatePreviewModalProps) {
  const renderTemplate = () => {
    switch (templateNumber) {
      case 1:
        return <GolfTemplate1Classic business={business} />;
      case 2:
        return <GolfTemplate2Modern business={business} />;
      case 3:
        return <GolfTemplate3Scenic business={business} />;
      case 4:
        return <GolfTemplate4Premium business={business} />;
      default:
        return <div className="p-8 text-center">Template not found</div>;
    }
  };

  const getTemplateName = () => {
    switch (templateNumber) {
      case 1:
        return "Classic Green Theme";
      case 2:
        return "Ocean Blue Theme";
      case 3:
        return "Autumn Gold Theme";
      case 4:
        return "Royal Purple Theme";
      default:
        return `Template ${templateNumber}`;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {business.name} - {getTemplateName()}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto p-6 pt-0">
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="scale-75 origin-top-left transform-gpu">
              <div style={{ width: '133.33%', height: 'auto' }}>
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 pt-0 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Preview of {getTemplateName()} for {business.name}
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Close Preview
              </Button>
              <Button
                onClick={() => {
                  window.open(`/${business.slug}/website-${templateNumber}`, '_blank');
                }}
              >
                View Full Site
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}