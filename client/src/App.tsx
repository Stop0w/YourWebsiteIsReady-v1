import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/home";
import BusinessLanding from "./pages/business-landing";
import TemplateViewer from "./pages/template-viewer";
import Services from "./pages/services";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:businessSlug/services" component={Services} />
          <Route path="/:businessSlug/website-:templateNumber" component={TemplateViewer} />
          <Route path="/:businessSlug" component={BusinessLanding} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;