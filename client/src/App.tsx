import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import BusinessLanding from "@/pages/business-landing";
import TemplatePreview from "@/pages/template-preview";
import Services from "@/pages/services";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:businessSlug" component={BusinessLanding} />
        <Route path="/:businessSlug/website-:templateNumber" component={TemplatePreview} />
        <Route path="/:businessSlug/services" component={Services} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
