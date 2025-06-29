import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import BusinessLanding from "@/pages/business-landing";
import Services from "@/pages/services";
import NotFound from "@/pages/not-found";
import Template1 from "@/components/golf-templates/template-1";

function Router() {
  return (
    <Switch>
      <Route path="/:businessSlug/website-:templateNumber" component={Template1} />
      <Route path="/" component={() => (
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <Home />
        </div>
      )} />
      <Route path="/:businessSlug" component={() => (
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <BusinessLanding />
        </div>
      )} />
      <Route path="/:businessSlug/services" component={() => (
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <Services />
        </div>
      )} />
      <Route component={() => (
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <NotFound />
        </div>
      )} />
    </Switch>
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
