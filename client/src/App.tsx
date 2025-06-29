import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";

// Import original pages
import Home from "./pages/home";
import BusinessLanding from "./pages/business-landing";
import Services from "./pages/services";
import NotFound from "./pages/not-found";
import { queryClient } from "./lib/queryClient";

// Import working golf template component
import SimpleGolfApp from "./simple-golf-app";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/:businessSlug/website-:templateNumber" component={SimpleGolfApp} />
          <Route path="/:businessSlug/services" component={Services} />
          <Route path="/:businessSlug" component={BusinessLanding} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;